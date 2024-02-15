import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { authenticateLogin } from '../store/authSlice';

function SignupScreen() {
  const [isAuthenticationg, setIsAuthenticating] = useState(false);

  const authDispatch = useDispatch();


  async function signuphandler({email, password}){
    try{
      setIsAuthenticating(true);
      const token = await createUser(email, password);
      authDispatch(authenticateLogin(token));
    }catch(e){
        Alert.alert('인증 실패!', '사용자 생성에 실패하였습니다.');
    }
    setIsAuthenticating(false);
  }

  if(isAuthenticationg) {
    return <LoadingOverlay  message="생성중 ..." />
  }

  return <AuthContent onAuthenticate={signuphandler}/>;
}

export default SignupScreen;