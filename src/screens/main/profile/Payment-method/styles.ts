import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../utils';
import { StyleSheet } from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const usestyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
    },
    Payment: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 24
    },
    Icon: {
        width: 64,
        height: 64,
        borderRadius:50,
    },
    TextName: {
        fontSize: normalize(HEIGHT * 0.021),
        fontWeight: '700',
        letterSpacing: normalize(0.2),
        fontStyle: 'normal',
        fontFamily: 'Urbanist-Regular',
        color: colors.black,
    },
    TextConnect: {
        fontSize: normalize(HEIGHT * 0.021),
        fontWeight: '700',
        letterSpacing: normalize(0.2),
        fontStyle: 'normal',
        fontFamily: 'Urbanist-Regular',

    }
}));
export default usestyles;