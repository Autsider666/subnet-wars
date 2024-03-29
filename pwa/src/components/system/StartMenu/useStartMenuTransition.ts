import type { MotionProps } from 'framer-motion';
import { useTheme } from 'styled-components';
import { TRANSITIONS_IN_MILLISECONDS } from 'utils/constants';

const useStartMenuTransition = (): MotionProps => {
  const {
    sizes: { startMenu },
  } = useTheme();

  return {
    animate: 'active',
    exit: 'initial',
    initial: 'initial',
    transition: {
      duration: TRANSITIONS_IN_MILLISECONDS.START_MENU / 1000,
      ease: [-0.15, 1, 0, 1],
    },
    variants: {
      active: { height: startMenu.height },
      initial: { height: 0 },
    },
  };
};

export default useStartMenuTransition;
