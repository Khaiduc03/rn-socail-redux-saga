import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {Image} from '@rneui/themed';
import useStyles from './styles';
import {Device} from '../../../../../../utils';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';

interface CarouselDataItem {
  id: string;
  image: string;
}

const BannerComic: React.FC = () => {
  const styles = useStyles();
  const flatlistRef = useRef<FlatList | null>(null);
  const screenWidth = Device.getDeviceWidth();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatlistRef.current?.scrollToIndex({
          index: 0,
          animated: true,
        });
      } else {
        flatlistRef.current?.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (data: any, index: number) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const renderItem = ({
    item,
    index,
  }: {
    item: CarouselDataItem;
    index: number;
  }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => NavigationService.navigate(routes.COMICDETAIL)}>
        <FastImage
          source={{uri: item.image}}
          style={{height: screenWidth * 0.5, width: screenWidth}}
        />
      </TouchableOpacity>
    );
  };

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / screenWidth;
    setActiveIndex(index);
  };

  return (
    <View>
      <FlatList
        data={carouselData}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onScroll={handleScroll}
      />
      <View style={styles.dotContainer}>
        {carouselData?.map((item, index) => {
          return (
            <Text
              key={item.id}
              style={activeIndex == index ? styles.dotActive : styles.dot}>
              ⬤
            </Text>
          );
        })}
      </View>
    </View>
  );
};

export default BannerComic;
const carouselData: CarouselDataItem[] = [
  {
    id: '1',
    image:
      'https://gamek.mediacdn.vn/133514250583805952/2022/1/2/solo-leveling-1620917554185396197198-16410674690231914720800.jpg',
  },
  {
    id: '2',
    image:
      'https://photo2.tinhte.vn/data/attachment-files/2021/03/5382277_Melissa-Poldebrat-And-Yuri-Elizabeth1.jpg',
  },
  {
    id: '3',
    image:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fgamek.mediacdn.vn%2F133514250583805952%2F2022%2F1%2F15%2Fsword-she-16422636752621114958409.jpg&tbnid=sXlloBxwj3pG0M&vet=12ahUKEwivx7OI3ZiCAxUZNd4KHQ2hD2AQMyhAegUIARDMAQ..i&imgrefurl=https%3A%2F%2Fgamek.vn%2Ftop-7-bo-manhwa-co-trang-han-quoc-dang-duoc-nhieu-nguoi-doc-san-don-nhat-2022011523353546.chn&docid=8sGa7Ijv1hc31M&w=957&h=638&q=manhwa%20jpg&ved=2ahUKEwivx7OI3ZiCAxUZNd4KHQ2hD2AQMyhAegUIARDMAQ',
  },
  {
    id: '4',
    image: 'https://wallpaperaccess.com/full/10822.jpg',
  },
  {
    id: '5',
    image:
      'https://e0.pxfuel.com/wallpapers/463/451/desktop-wallpaper-lookism.jpg',
  },
];
