import React, {FunctionComponent} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {images} from '../../../../assets';
import {HeaderCustom} from '../../../../components';
import TextCustom from '../../../../components/customs/Text';
import {routes} from '../../../../constants';
import {NavigationService} from '../../../../navigation';
import useStyles from './styles';
import {Itemlish} from './components';

const Profile: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'user', type: 'font-awesome'}}
        title="My profile"
      />
      <View style={styles.viewAvatar}>
        <Image source={images.avata} style={styles.avatar} />
        <TouchableOpacity
          style={styles.btnMyProfile}
          onPress={() => NavigationService.navigate(routes.MYPROFILE)}>
          <TextCustom textBold title="Drake Kun" />
          <TextCustom textLight title="drake@gmail.com" />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View style={styles.viewList}>
        <Itemlish />
      </View>
    </View>
  );
};

export default Profile;
