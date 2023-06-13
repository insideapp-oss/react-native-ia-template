import React, {FC, PropsWithChildren} from 'react';
import {NavigationProvider} from './NavigationProvider';
import {ThemeProvider} from './ThemeProvider';

type Props = React.ComponentProps<typeof ThemeProvider>;

export const AppProvider: FC<PropsWithChildren<Props>> = ({
  themeVariants,
  children,
}) => {
  return (
    <ThemeProvider themeVariants={themeVariants}>
      <NavigationProvider>{children}</NavigationProvider>
    </ThemeProvider>
  );
};
