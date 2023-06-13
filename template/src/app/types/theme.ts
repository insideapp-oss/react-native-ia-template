import {Theme as NavigationTheme} from '@react-navigation/native';
import {ColorSchemeName} from 'react-native';

export interface Theme extends NavigationTheme {}

type Colors = Pick<keyof ColorSchemeName, 'light' | 'dark'>;

export type ThemeVariants = {
  [key in keyof Colors]: Theme;
};
