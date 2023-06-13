import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Text} from 'react-native';
import useAppNavigation from '../../app/hooks/useAppNavigation';
import useAppStyles, {StylesCallback} from '../../app/hooks/useAppStyles';
import {RootStackParamList} from '../components/RootStackNavigator';
import {Screens} from '../types/screens';

type Props = NativeStackScreenProps<RootStackParamList, Screens.Welcome>;

const getStyles: StylesCallback = ({colors}) => ({
  title: {
    color: colors.text,
    backgroundColor: colors.primary,
  },
  button: {
    backgroundColor: colors.primary,
  },
});

export function Welcome({}: Props) {
  const navigation = useAppNavigation();
  const styles = useAppStyles(getStyles);

  return (
    <>
      <Text style={styles.title}>Welcome</Text>
      <Button
        title="Action"
        onPress={() => navigation.push(Screens.Action, {name: 'from welcome'})}
        color={styles.button.backgroundColor}
      />
    </>
  );
}
