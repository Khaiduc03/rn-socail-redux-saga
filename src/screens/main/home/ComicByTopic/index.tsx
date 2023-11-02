import {
  StyleSheet,
  Text,
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {ComicItem, HeaderCustom} from '../../../../components';
import useStyles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {backScreen} from '../../../../utils';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {ComicActions, ComicType, LoadingActions} from '../../../../redux';
import {
  getDataByTopic,
  getListComic,
} from '../../../../redux/selectors/comic.selector';
import {getIsLoading} from '../../../../redux/selectors/loading.selector';
import {useRoute} from '@react-navigation/native';

interface RouteParamsIdTopic {
  uuid: string;
  name: string;
}

const ComicByTopic = () => {
  const route = useRoute();
  const uuidComic = (route.params as RouteParamsIdTopic).uuid;
  const nameTopic = (route.params as RouteParamsIdTopic).name;
  const dispatch = useAppDispatch();
  const dataComic = useAppSelector(getDataByTopic) || [];
  const [numCols, setNumCols] = useState<number>(3);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(ComicActions.getListByTopic({page: page, uuid: uuidComic}));
  }, [page]);

  const loadMoreComic = () => {
    setPage(page + 1);
  };

  const RenderItem = ({item, index}: {item: ComicType; index: number}) => (
    <ComicItem
      data={item}
      viewStyle={numCols == 1 ? styles.comicItem : null}
      imageStyle={numCols == 1 ? styles.imgComic : null}
      contentStyle={numCols == 1 ? styles.content : null}
      index={index}
      topicStyle={numCols == 1 ? styles.topicsContainer : null}
    />
  );

  const handleListIconPress = () => {
    setNumCols(1);
  };
  const handleGridIconPress = () => {
    setNumCols(3);
  };

  const styles = useStyles();

  const handlePressSearch = () => {
    NavigationService.navigate(routes.SEARCH);
  };

  return (
    <View style={styles.container}>
      <HeaderCustom
        title={nameTopic}
        leftIconStyle={styles.leftIconStyle}
        leftIcon={{name: 'arrow-back', color: styles.leftIconStyle.color}}
        onPressLeftIcon={() => backScreen()}
        rightIconleft={{name: 'search', type: 'ionicon'}}
        onPressRightIconLeft={handlePressSearch}
        rightIconRight={{name: 'tune'}}
      />

      <FlatList
        contentContainerStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => {
          return (
            <HeaderCustom
              titleStyle={styles.titleHeaderStyle}
              title="Show in "
              rightIconMiddle={{
                name: 'grid-outline',
                type: 'ionicon',
                color: numCols === 3 ? '#F89300' : '',
              }}
              rightIconRight={{
                name: 'list-circle-outline',
                type: 'ionicon',
                color: numCols === 1 ? '#F89300' : '',
              }}
              onPressRightIconMiddle={handleGridIconPress}
              onPressRightIconRight={handleListIconPress}
            />
          );
        }}
        columnWrapperStyle={numCols === 3 ? {gap: 5} : null}
        data={dataComic}
        renderItem={RenderItem}
        keyExtractor={item => item.uuid.toString()}
        showsVerticalScrollIndicator={false}
        key={numCols.toString()}
        numColumns={numCols}
        onEndReached={loadMoreComic}
        onEndReachedThreshold={0}
      />
    </View>
  );
};

export default ComicByTopic;
