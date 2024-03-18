import {useMutation} from 'react-query';
import {AuthError, login} from '../api/auth';
import {Alert} from 'react-native';
import {useUserState} from '../contexts/UserContext';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../screens/types';

export default function useLogin() {
  const [, setUser] = useUserState();
  const navigation = useNavigation<RootStackNavigationProp>();

  const mutation = useMutation(login, {
    onSuccess: data => {
      setUser(data.user);
      navigation.pop();
    },
    onError: (error: AuthError) => {
      console.log(error);
      /* TODO: 구현 예정 */
    },
  });
  return mutation;
}
