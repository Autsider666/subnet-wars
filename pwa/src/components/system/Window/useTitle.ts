import { useProcessor } from 'contexts/ProcessorContext';
import processRegistry from 'contexts/ProcessorContext/processRegistry';
import { basename } from 'path';
import { useCallback } from 'react';
import { PROCESS_DELIMITER } from 'utils/constants';

type Title = {
  appendFileToTitle: (url: string) => void;
};

const useTitle = (id: string): Title => {
  const { title } = useProcessor();
  const [pid] = id.split(PROCESS_DELIMITER) || [];
  const { title: originalTitle } = processRegistry[pid] || {};
  const appendFileToTitle = useCallback(
    (url: string) => title(id, `${originalTitle} - ${basename(url)}`),
    [id, originalTitle, title]
  );

  return {
    appendFileToTitle,
  };
};

export default useTitle;
