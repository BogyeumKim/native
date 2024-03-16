import {Text, View} from 'react-native';
import {useQuery} from 'react-query';
import {getArticles} from '../api/articles';
import axios from 'axios';

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

  return (
    <View>
      <Text>Articlessdddds</Text>
    </View>
  );
}

export default ArticlesScreen;
