import {ThemeVariants} from './types/theme';

export const themeVariants: ThemeVariants = {
  light: {
    dark: false,
    colors: {
      primary: 'blue',
      background: 'white',
      card: 'white',
      text: 'black',
      border: 'black',
      notification: 'black',
    },
  },
  dark: {
    dark: true,
    colors: {
      primary: 'red',
      background: 'black',
      card: 'grey',
      text: 'white',
      border: 'white',
      notification: 'white',
    },
  },
};
