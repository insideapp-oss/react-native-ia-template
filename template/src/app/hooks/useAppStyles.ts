import {StyleSheet} from 'react-native';
import {Theme} from '../types/theme';
import useAppTheme from './useAppTheme';

export interface StylesCallback<T extends Array<any> = []> {
  (theme: Theme, ...rest: T): StyleSheet.NamedStyles<any>;
}

export default function useAppStyles<
  C extends StylesCallback<T>,
  T extends Array<any> = [],
>(getStyles: C, ...rest: T) {
  const theme = useAppTheme();
  const styles = getStyles(theme, ...rest);
  return StyleSheet.create(styles);
}
