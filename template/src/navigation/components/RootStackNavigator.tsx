import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Screens} from '../types/screens';
import {Action} from '../views/Action';
import {Welcome} from '../views/Welcome';

export type RootStackParamList = {
  [Screens.Welcome]: undefined;
  [Screens.Action]: {name: string};
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={Screens.Welcome}>
      <RootStack.Screen
        name={Screens.Welcome}
        component={Welcome}
        options={{title: 'Welcome'}}
      />
      <RootStack.Screen
        name={Screens.Action}
        component={Action}
        initialParams={{
          name: 'test',
        }}
      />
    </RootStack.Navigator>
  );
};
