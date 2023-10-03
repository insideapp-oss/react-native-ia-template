import React, {FC, PropsWithChildren} from 'react';
import {NavigationProvider} from './NavigationProvider';
import {ThemeProvider} from './ThemeProvider';
import {ThemedSafeAreaProvider} from './ThemedSafeAreaProvider';

type Props = React.ComponentProps<typeof ThemeProvider>;

export const AppProvider: FC<PropsWithChildren<Props>> = ({
  themeVariants,
  children,
}) => {
  return (
    <ThemeProvider themeVariants={themeVariants}>
      <ThemedSafeAreaProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </ThemedSafeAreaProvider>
    </ThemeProvider>
  );
};
