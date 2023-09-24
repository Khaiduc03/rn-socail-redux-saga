import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../utils';
import { fontFamilySetup } from '../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();
const useStyles = makeStyles(({ colors }) => ({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: normalize(24),
        paddingVertical: normalize (15),
    },
    text: {
        fontSize: normalize(15),
        letterSpacing: normalize(0.2),
        fontStyle: 'normal',
        fontFamily: fontFamilySetup.bold,
        color: colors.black,
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}));
export default useStyles
