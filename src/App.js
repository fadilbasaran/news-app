import { StatusBar } from 'expo-status-bar';
import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard';
import news_banner_data from './news_banner_data.json';
export default function App() {
  const renderNews = ({ item }) => <NewsCard news={item}></NewsCard>;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>

      <FlatList
        ListHeaderComponent={() =>

        (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              news_banner_data.map(bannerNews => <Image style={styles.banner_image} key={bannerNews.id} source={{ uri: bannerNews.imageUrl }} />)

            }
          </ScrollView>
        )
        }
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={({ item }) => renderNews({ item })}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width,
    margin: 5,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    margin: 5,
    fontFamily:'semibold',
  },
});
