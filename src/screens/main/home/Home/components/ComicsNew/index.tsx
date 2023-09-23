import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import useStyles from './style';
import {ComicItem} from '../../../../../../components';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';

const ComicsNew = ({numCols}: {numCols: number}) => {
  const number = numCols;
  const RenderItem = ({item, index}: any) => (
    <ComicItem
      data={item}
      viewStyle={number == 1 ? styles.comicItem : null}
      imageStyle={number == 1 ? styles.imgComic : null}
      contentStyle={number == 1 ? styles.content : null}
      index={index}
    />
  );
  const styles = useStyles();
  return (
    <View>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={RenderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          key={numCols}
          numColumns={numCols}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
};

export default ComicsNew;
const data = [
  {
    id: 1,
    name: 'Boruto & Itachi',
    topic: 'Tiffany',
    image:
      'https://i.pinimg.com/originals/fc/99/4e/fc994e76624d91c7baa236cec4043755.jpg',
    rate: 3.28,
  },
  {
    id: 2,
    name: 'Boruto & Itachi',
    topic: 'Osmond',
    image:
      'https://i.pinimg.com/1200x/a5/6d/47/a56d47ee7a756a257dec50dfbf87b625.jpg',
    rate: 2.25,
  },
  {
    id: 3,
    name: 'Boruto & Itachi',
    topic: 'Stan',
    image:
      'https://thuvienanime.com/wp-content/uploads/2021/09/lieu-than-thuvienanime-2.jpg',
    rate: 4.5,
  },
  {
    id: 4,
    name: 'Boruto & Itachi',
    topic: 'Maggie',
    image:
      'https://thuvienanime.com/wp-content/uploads/2021/09/lieu-than-thuvienanime-3.jpg',
    rate: 3.26,
  },
  {
    id: 5,
    name: 'Boruto & Itachi',
    topic: 'Dallis',
    image: 'https://vidian.me/public-img/image-1677306627308.jpeg',
    rate: 4.41,
  },
  {
    id: 6,
    name: 'Boruto & Itachi ',
    topic: 'Tiffany',
    image:
      'https://i.pinimg.com/originals/fc/99/4e/fc994e76624d91c7baa236cec4043755.jpg',
    rate: 3.28,
  },
  {
    id: 7,
    name: 'Boruto & Itachi',
    topic: 'Osmond',
    image:
      'https://i.pinimg.com/1200x/a5/6d/47/a56d47ee7a756a257dec50dfbf87b625.jpg',
    rate: 2.25,
  },
  {
    id: 8,
    name: 'Boruto & Itachi',
    topic: 'Stan',
    image:
      'https://thuvienanime.com/wp-content/uploads/2021/09/lieu-than-thuvienanime-2.jpg',
    rate: 4.5,
  },
  {
    id: 9,
    name: 'Boruto & Itachi',
    topic: 'Maggie',
    image:
      'https://thuvienanime.com/wp-content/uploads/2021/09/lieu-than-thuvienanime-3.jpg',
    rate: 3.26,
  },
  {
    id: 10,
    name: 'Boruto & Itachi',
    topic: 'Dallis',
    image: 'https://vidian.me/public-img/image-1677306627308.jpeg',
    rate: 4.41,
  },
];