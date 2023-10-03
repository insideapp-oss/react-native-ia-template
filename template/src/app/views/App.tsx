/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {RootStackNavigator} from '../../navigation/components/RootStackNavigator';
import {AppProvider} from '../components/AppProvider';
import {themeVariants} from '../themes';

export function App(): JSX.Element {
  return (
    <AppProvider themeVariants={themeVariants}>
      <RootStackNavigator />
    </AppProvider>
  );
}
