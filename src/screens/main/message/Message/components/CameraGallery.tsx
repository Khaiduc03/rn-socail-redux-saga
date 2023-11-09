import {Avatar, Icon, Text} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {Image, Platform, TouchableOpacity, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  PERMISSION_TYPE,
  useAppDispatch,
  useAppSelector,
  usePermission,
} from '../../../../../hooks';
import {AuthActions, getAuthUserProfile} from '../../../../../redux';
import {showToastError} from '../../../../../utils';
import ModalWrapContent from '../../../../../components/customs/ModalWrapContent';
import useStyles from '../styles';
import {AvatarProps} from '../types';

const AnimatedView = Animated.createAnimatedComponent(View);

const AvatarComponets: React.FunctionComponent<AvatarProps> = props => {
  const styles = useStyles();
  const user = useAppSelector(getAuthUserProfile);

  const dispatch = useAppDispatch();

  const [isZoomed, setIsZoomed] = useState(false);
  const permission = usePermission();
  const toggleZoom = () => setIsZoomed(!isZoomed);

  const progress = useSharedValue(0.5);

  useEffect(() => {
    if (isZoomed) {
      progress.value = withSpring(1);
    } else {
      progress.value = withSpring(0.5);
    }
  }, [isZoomed]);

  const overlayStyle = useAnimatedStyle(() => {
    const background = interpolateColor(
      progress.value,
      [0, 1, 0],
      ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.6)'],
    );

    return {
      backgroundColor: background,
    };
  }, []);

  const containerStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [0, 1, 0],
      [0.3, 1, 0.3],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{scale: scale}],
    };
  }, []);

  const [isShow, setIsShow] = useState<boolean>(false);
  const toggleShow = () => setIsShow(!isShow);

  const optionsCamera: ImagePicker.CameraOptions = {
    quality: 1,
    mediaType: 'photo',
    cameraType: 'front',
    saveToPhotos: true,
  };
  const optionLibrary: ImagePicker.ImageLibraryOptions = {
    mediaType: 'photo',
    quality: 1,
    selectionLimit: 0,
    maxWidth: 500,
    maxHeight: 500,
  };

  const showCamera = async () => {
    setIsShow(false);
    request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    ).then(async result => {
      if (result !== RESULTS.GRANTED && result !== RESULTS.UNAVAILABLE) {
        await permission.showPermissionDialog(PERMISSION_TYPE.camera);
      } else {
        const result = await ImagePicker.launchCamera(optionsCamera);
        if (result.errorCode) {
          showToastError(result.errorMessage + '');
        } else if (result.didCancel) {
          showToastError('Bạn chưa chụp ảnh');
        } else if (result.errorMessage) {
          showToastError('Có lỗi xảy ra khi mở camera');
        } else if (result.assets) {
          const formdata = new FormData();
          formdata.append('avatar', {
            uri: result.assets[0].uri,
            name: result.assets[0].fileName,
            type: result.assets[0].type,
          });
          await handleUploadImage(formdata);
        }
      }
    });
    setIsShow(false);
  };

  const showGallery = async () => {
    setIsShow(false);
    request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    ).then(async result => {
      if (result === RESULTS.GRANTED) {
        await permission.showPermissionDialog(PERMISSION_TYPE.library);
      } else {
        const result = await ImagePicker.launchImageLibrary(optionLibrary);
        if (result.errorCode) {
          showToastError('Have error when open the libary');
        } else if (result.didCancel) {
          showToastError('You was cancel');
        } else if (result.errorMessage) {
          showToastError('Something wrong!!');
        } else if (result.assets) {
          const formdata = new FormData();
          formdata.append('avatar', {
            uri: result.assets[0].uri,
            name: result.assets[0].fileName,
            type: result.assets[0].type,
          });
          await handleUploadImage(formdata);
        }
      }
    });
    setIsShow(false);
  };

  const handleUploadImage = async (formdata: any) => {
    dispatch(AuthActions.handleUpdateAvatar(formdata));
  };

  const handleDeleteImage = async () => {
    setIsShow(false);
    dispatch(AuthActions.handleDeleteAvatar());
  };

  if (!isZoomed) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleShow}>
          <Icon name="attach-outline" type="ionicon" size={30} color={'#000'} />
          {isShow && (
            <ModalWrapContent
              isVisible={isShow}
              onBackdropPress={() => setIsShow(false)}
              contentStyle={styles.contentStyle}>
              <TouchableOpacity
                style={styles.modalItem}
                // onPress={() => toggleZoom()}
              >
                <Icon
                  type="ionicon"
                  name={'person-circle-outline'}
                  color={'black'}
                  size={28}
                  containerStyle={styles.iconStyle}
                />
                <Text style={styles.textStyle}>See your images</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => showCamera()}>
                <Icon
                  type="ionicon"
                  name={'camera-outline'}
                  color={'black'}
                  size={28}
                  containerStyle={styles.iconStyle}
                />
                <Text style={styles.textStyle}>Take a photo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => showGallery()}>
                <Icon
                  type="ionicon"
                  name={'images-outline'}
                  color={'black'}
                  size={28}
                  containerStyle={styles.iconStyle}
                />
                <Text style={styles.textStyle}>Select a photo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalItem}
                onPress={handleDeleteImage}>
                <Icon
                  type="ionicon"
                  name={'trash-outline'}
                  color={'black'}
                  size={28}
                  containerStyle={styles.iconStyle}
                />
                <Text style={styles.textStyle}>Remove photo</Text>
              </TouchableOpacity>
            </ModalWrapContent>
          )}
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <TouchableOpacity
    // onPress={toggleZoom}
    >
      <Image
        style={styles.avatarContainer}
        source={{
          uri:
            user.image_url ||
            'https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556777.jpg?w=1060&t=st=1697884276~exp=1697884876~hmac=8ae3b1ba19610030b247f24a1f8a03452924b22a72ebf3b5a8d4755defcd26f6',
        }}
      />
    </TouchableOpacity>
  );
};

export default AvatarComponets;