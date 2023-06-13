// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/components/RootStackNavigator';

const useAppNavigation: () => NativeStackNavigationProp<RootStackParamList> =
  useNavigation;
export default useAppNavigation;
