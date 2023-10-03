import React, {FC, PropsWithChildren} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import useAppStyles, {StylesCallback} from '../hooks/useAppStyles';

const getStyles: StylesCallback = ({colors}) => ({
  safeArea: {
    backgroundColor: colors.background,
  },
});

export const ThemedSafeAreaProvider: FC<PropsWithChildren> = ({children}) => {
  const styles = useAppStyles(getStyles);
  return (
    <SafeAreaProvider style={styles.safeArea}>{children}</SafeAreaProvider>
  );
};
