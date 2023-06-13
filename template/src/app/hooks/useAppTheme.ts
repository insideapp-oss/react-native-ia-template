import {useContext} from 'react';
import {ThemeContext} from '../components/ThemeProvider';

export default function useAppTheme() {
  return useContext(ThemeContext);
}
