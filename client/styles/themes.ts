import type { DefaultTheme } from 'styled-components';
import defaultTheme from './themes/default';

type Themes = {
  [name: string]: DefaultTheme;
};

const themes: Themes = { defaultTheme };

export default themes;
