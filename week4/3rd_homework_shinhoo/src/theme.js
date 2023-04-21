import { createTheming } from 'react-color-theme';

export const [ThemeProvider, useTheme, themes] = createTheming(
  {
    background: '#F0F2F5',
    foreground: '#3e3e4a',
    text: '#1C1E21',
    primary: '#1C1E21',
    secondary: '##1877F2',
  }
//   {
//     dark: {
//       background: '#282836',
//       foreground: '#3e3e4a',
//       text: '#fff',
//     },
//     light: {
//       background: '#fff',
//       foreground: '#eee',
//       text: '#333',
//     },
//   }
);