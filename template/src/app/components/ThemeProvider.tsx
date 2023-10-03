import React, {FC, PropsWithChildren, useMemo} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {themeVariants as defaultThemeVariants} from '../themes';
import {Theme, ThemeVariants} from '../types/theme';

export const ThemeContext = React.createContext<Theme>(
  defaultThemeVariants.light,
);

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
    <>
      <StatusBar barStyle={theme.statusBarStyle} />
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </>
  );
};
