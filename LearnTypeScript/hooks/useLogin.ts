import {useMutation} from 'react-query';
import {AuthError, login} from '../api/auth';
import {Alert} from 'react-native';

export default function useLogin() {
  const mutation = useMutation(login, {
    onSuccess: data => {
      console.log(data);
      /* TODO: 구현 예정 */
    },
    onError: (error: AuthError) => {
      console.log(error);
      /* TODO: 구현 예정 */
    },
  });
  return mutation;
}
