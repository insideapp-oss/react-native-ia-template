import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text} from 'react-native';
import {RootStackParamList} from '../components/RootStackNavigator';
import {Screens} from '../types/screens';

type Props = NativeStackScreenProps<RootStackParamList, Screens.Action>;

export function Action({
  route: {
    params: {name},
  },
}: Props) {
  return <Text>Action {name}</Text>;
}
