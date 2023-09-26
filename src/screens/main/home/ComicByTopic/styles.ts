import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../utils/font';
import {Device} from '../../../../utils';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  iconStyle: {
    color: colors.black,
  },
  textHeader: {
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(25),
    color: colors.black,
  },
}));

export default useStyles;