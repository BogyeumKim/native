import {useMutation} from 'react-query';
import {AuthError, register} from '../api/auth';
import {useUserState} from '../contexts/UserContext';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../screens/types';
import { applyToken } from '../api/client';
import authStorage from '../storages/authStorage';

export default function useRegister() {
  const [, setUser] = useUserState();
  const navigation = useNavigation<RootStackNavigationProp>();

  const mutation = useMutation(register, {
    onSuccess: data => {
      setUser(data.user);
      navigation.pop();
      applyToken(data.jwt);
      authStorage.set(data);
    },
    onError: (error: AuthError) => {
      console.log(error);
      /* TODO: 구현 예정 */
    },
  });
  return mutation;
}
