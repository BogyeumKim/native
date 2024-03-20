import {useCallback} from 'react';
import {Alert, Platform, ToastAndroid} from 'react-native';

export default function useInform() {
  const inform = useCallback(({title, message}: InformParams) => {
    if (Platform.OS === 'ios') {
        Alert.alert(title ?? '알림', message);
    } else {
      ToastAndroid.showWithGravityAndOffset('test', ToastAndroid.LONG,ToastAndroid.BOTTOM,25,50);
      ToastAndroid.show(message, ToastAndroid.SHORT);
    }
  }, []);

  return inform;
}
interface InformParams {
  title?: string;
  message: string;
}