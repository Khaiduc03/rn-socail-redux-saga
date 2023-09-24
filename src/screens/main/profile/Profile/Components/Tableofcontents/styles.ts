import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {StyleSheet} from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  viewClick: {
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(15),
  },
}));

export default useStyles;
