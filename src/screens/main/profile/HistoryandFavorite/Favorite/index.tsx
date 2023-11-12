import React from 'react';
import {View} from 'react-native';
import {FavoritesList} from './components';
import useStyles from './styles';

const FavoriteSreen: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <FavoritesList />
    </View>
  );
};

export default FavoriteSreen;