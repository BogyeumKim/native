import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay'

function SignupScreen() {
  const [isAuthenticationg, setIsAuthenticating] = useState(false);


  async function signuphandler({email, password}){
    setIsAuthenticating(true);
    await createUser(email, password);
    setIsAuthenticating(false);
  }

  if(isAuthenticationg) {
    return <LoadingOverlay  message="생성중 ..." />
  }

  return <AuthContent onAuthenticate={signuphandler}/>;
}

export default SignupScreen;