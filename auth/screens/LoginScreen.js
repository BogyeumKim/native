import { useEffect, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { authenticateLogin } from "../store/authSlice";

function LoginScreen() {
  const [isAuthenticationg, setIsAuthenticating] = useState(false);

  const authDispatch = useDispatch();

  async function loginHandler({ email, password }) {
    try {
      setIsAuthenticating(true);
      const token = await login(email, password);
      console.log('token ::' , token);
      authDispatch(authenticateLogin(token));
    } catch (e) {
      Alert.alert('인증 실패','로그인 실패');
      setIsAuthenticating(false);
    }

    
  }

  if (isAuthenticationg) {
    return <LoadingOverlay message="로긴중 ..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
