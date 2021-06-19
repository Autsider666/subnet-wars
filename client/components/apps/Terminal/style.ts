import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Window = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.appBackground};
  bottom: 0;
  left: 0;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;

  .userInput {
    display: flex;
    flex-direction: row;

    span {
      width: 100%;
      border: 5px;
      background-color: transparent;
      word-break: break-all;
    }
  }
`;
