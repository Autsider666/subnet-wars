import type { DefaultTheme } from 'styled-components';
import defaultTheme from './themes/default';

const Themes: {
  [name: string]: DefaultTheme;
} = { defaultTheme };

export default Themes;
