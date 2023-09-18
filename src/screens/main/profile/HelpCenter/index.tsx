import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../../components/customs/Headers';
import { TopNavigator } from '../../../../navigation/navigators/TopNavigator';
import useStyles from './styles';
import { HeaderCustom, TabViewItem } from '../../../../components';
import FAQ from './FAQ';
import Contact_us from './Contact_us';
import { NavigationService } from '../../../../navigation';
import { routes } from '../../../../constants';

const HelpCenter: React.FC = () => {
    const styles = useStyles();
    const handlePressGoback = () => {
        NavigationService.navigate(routes.PROFILE);
    };
    return (
        <View style={styles.container}>
            <HeaderCustom leftIcon={{ name: 'arrow-left', type: 'font-awesome' }} title='Help Center'
                onPressLeftIcon={handlePressGoback}
            />
            <TabViewItem
                screen1={<FAQ />}
                screen2={<Contact_us />} />
        </View>
    )
}

export default HelpCenter