import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {HeaderCustom, TabViewItem} from '../../../../components';
import useStyles from './styles';
import {Episodes, HeaderDetail, Preview} from './Components';
import {NavigationService} from '../../../../navigation';

const ComicsDetail = () => {
  const styles = useStyles();
  const handlePressBack = () => {
    NavigationService.goBack();
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        viewStyle={styles.headerStyle}
        onPressLeftIcon={handlePressBack}
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        rightIconleft={{name: 'bookmark-outline', type: 'ionicon'}}
        rightIconMiddle={{name: 'document-outline', type: 'ionicon'}}
        rightIconRight={{name: 'paper-plane-outline', type: 'ionicon'}}
      />

      <TabViewItem
        title1={'PREVIEW'}
        title2={'EPISODES'}
        screen1={<Preview />}
        screen2={<Episodes />}
        viewStyle={{height: 2000}}
        headerDetail={<HeaderDetail />}
      />
    </View>
  );
};
export default ComicsDetail;
