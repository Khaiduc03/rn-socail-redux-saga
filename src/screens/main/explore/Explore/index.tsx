import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {HeaderCustom} from '../../../../components';
import CarouselSquareList from './Components/CarouselSquareList';
import ListHotComic from './Components/ListHotComic';
import RecommendedSeries from './Components/RecommendedSeries';
import TrendingComic from './Components/TrendingComic';
import useStyles from './styles';

const data = [
  {
    title: 'Exemplary wife',
    category: 'Fantasy',
    image:
      'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/10/solo-leveling-1.jpg',
  },
  {
    title: 'Porcelain flower girl',
    category: 'Drama',
    image:
      'https://geekculture.co/wp-content/uploads/2023/03/solo-leveling-anime-trailer.jpg',
  },
  {
    title: 'The eyes of a lover',
    category: 'Action',
    image:
      'https://gamek.mediacdn.vn/133514250583805952/2022/1/2/solo-leveling-1620917554185396197198-16410674690231914720800.jpg',
  },
  {
    title: 'Country girl',
    category: 'Comedy',
    image:
      'https://www.jeumobi.com/wp-content/uploads/2022/11/trailer-solo-leveling-arise.jpg',
  },
  {
    title: 'Young lady saves money to travel',
    category: 'Mystery',
    image:
      'https://img.dtruyen.com/public/images/large/923/trongsinhvethoinguyenthuylamruongZ2bsyDe.jpg',
  },
  {
    title: 'Girl selling chrysanthemums',
    category: 'Horror',
    image:
      'https://staticg.sportskeeda.com/editor/2023/01/6d2a5-16739045595947-1920.jpg',
  },
];

const ExploreScreen: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <HeaderCustom
        titleStyle={styles.titleStyle}
        leftIconStyle={styles.leftIconStyle}
        leftIcon={{name: 'id-card', type: 'ionicon'}}
        title="Explore"
      />

      <View style={styles.backgoundPopular}>
        <CarouselSquareList data={data} autoPlay={false} pagination={true} />
      </View>
      <ScrollView>
        <RecommendedSeries />
        <TrendingComic />
        <ListHotComic />
      </ScrollView>
    </View>
  );
};

export default ExploreScreen;
