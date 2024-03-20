import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useQuery} from 'react-query';
import {getArticles} from '../api/articles';
import axios from 'axios';
import Articles from '../components/Articles';
import { useUserState } from '../contexts/UserContext';

function ArticlesScreen() {

  // const axiosTest = async () => {
  //   try {
  //     const res = await axios.get('http://10.0.2.2:1337/articles');
  //     const data = res.data;
  //     console.log(data);
  //   } catch (error) {
  //     console.error('Error fetching articles:', error);
  //   }
  // };

  // axiosTest();
  
  
  const {data,isLoading} = useQuery('articles',getArticles);
  console.log({data,isLoading});
  const [user] = useUserState();

  
  if (!data) {
    return <ActivityIndicator size="large" style={styles.spinner} />;
  }

  return <Articles articles={data} showWriteButton={!!user} />;
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
  },
});

export default ArticlesScreen;
