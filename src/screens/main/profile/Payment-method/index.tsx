import React from 'react';
import {View} from 'react-native';
import HeaderCustom from '../../../../components/customs/HeaderCustom';
import {routes} from '../../../../constants';
import {NavigationService} from '../../../../navigation';
import useStyles from './styles';
import {Pay} from './components';

const Payments_method: React.FC = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.navigate(routes.PROFILE);
  };

  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-left', type: 'font-awesome-5'}}
        title="Payments Method"
        onPressLeftIcon={handlePressGoback}
      />
      <Pay icGoogle title="Google Pay" />
      <Pay icZaloPay title="Zalo Pay" />
      <Pay icPaypal title="Paypal" />
    </View>
  );
};

export default Payments_method;