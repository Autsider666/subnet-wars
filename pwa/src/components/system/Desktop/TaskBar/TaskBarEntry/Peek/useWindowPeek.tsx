import PeekWindow from 'components/system/Desktop/TaskBar/TaskBarEntry/Peek/PeekWindow';
import { useProcessor } from 'contexts/ProcessorContext';
import { useCallback, useEffect, useRef, useState } from 'react';

type WindowPeek = {
  PeekComponent?: React.ComponentType;
  peekEvents: {
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  };
};

const useWindowPeek = (id: string): WindowPeek => {
  const {
    processes: { [id]: process },
  } = useProcessor();
  const { peekElement, componentWindow, minimized, maximized } = process || {};
  const mouseTimer = useRef<NodeJS.Timer | null>(null);
  const previewTimer = useRef<NodeJS.Timer | null>(null);
  const [showPeek, setShowPeek] = useState(false);
  const [previewSrc, setPreviewSrc] = useState('');

  const onMouseEnter = (): void => {
    const previewElement = peekElement || componentWindow;

    if (!mouseTimer.current && !previewTimer.current && previewElement) {
      const renderFrame = (): void => {
        import('html-to-image').then(({ toPng }) =>
          toPng(previewElement).then((dataUrl) => {
            const previewImage = new Image();

            previewImage.src = dataUrl;
            previewImage.onload = () => setPreviewSrc(dataUrl);
          })
        );
      };

      mouseTimer.current = setTimeout(() => {
        renderFrame();
        setShowPeek(true);
        previewTimer.current = setInterval(renderFrame, 1000);
      }, 1000 / 2);
    }
  };
  const onMouseLeave = useCallback(() => {
    if (mouseTimer?.current) clearTimeout(mouseTimer.current);
    if (previewTimer?.current) clearInterval(previewTimer.current);

    mouseTimer.current = null;
    previewTimer.current = null;

    setShowPeek(false);
    setPreviewSrc('');
  }, []);

  useEffect(() => {
    if (maximized || minimized) onMouseLeave();
  }, [maximized, minimized, onMouseLeave]);

  useEffect(() => onMouseLeave, [onMouseLeave]);

  return {
    PeekComponent:
      showPeek && previewSrc ? () => <PeekWindow id={id} image={previewSrc} /> : undefined,
    peekEvents:
      maximized || minimized
        ? {}
        : {
            onMouseEnter,
            onMouseLeave,
          },
  };
};

export default useWindowPeek;
