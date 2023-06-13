import {DefaultTheme} from '@react-navigation/native';
import React, {FC, PropsWithChildren, useMemo} from 'react';
import {useColorScheme} from 'react-native';
import {Theme, ThemeVariants} from '../types/theme';

export const ThemeContext = React.createContext<Theme>(DefaultTheme);

type Props = {
  themeVariants: ThemeVariants;
};

export const ThemeProvider: FC<PropsWithChildren<Props>> = ({
  themeVariants,
  children,
}) => {
  const colorScheme = useColorScheme() ?? 'light';

  const theme = useMemo(
    () => themeVariants[colorScheme],
    [themeVariants, colorScheme],
  );

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
