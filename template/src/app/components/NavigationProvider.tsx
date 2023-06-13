import {NavigationContainer} from '@react-navigation/native';
import React, {FC, PropsWithChildren} from 'react';
import useAppTheme from '../hooks/useAppTheme';

export const NavigationProvider: FC<PropsWithChildren> = ({children}) => {
  const theme = useAppTheme();
  return <NavigationContainer theme={theme}>{children}</NavigationContainer>;
};
