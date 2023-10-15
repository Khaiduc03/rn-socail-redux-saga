import {View, Text} from 'react-native';
import React from 'react';
import usestyles from './styles';
import {CustomCirclerProps} from './types';
import {Icon, Avatar, Switch} from '@rneui/themed';
import Switch_custom from '../Switch';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {getMode} from '../../../redux/selectors/thems.selector';
import {ThemeActions} from '../../../redux';

const ItemListProfile: React.FC<CustomCirclerProps> = props => {
  const {colorBackground, title, name, type, rightIcon, color, switchRight} =
    props;
  const styles = usestyles();
  const dispatch = useAppDispatch();
  const mode = useAppSelector(getMode);

  const handleTheme = () => {
    if (mode === 'light') {
      dispatch(ThemeActions.setTheme('dark'));
    } else {
      dispatch(ThemeActions.setTheme('light'));
    }
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Avatar
          size={50}
          rounded
          icon={{name: name, type: type, color: color}}
          containerStyle={{backgroundColor: colorBackground}}
        />
        {<Text style={styles.txtCircle}>{title}</Text>}
      </View>
      {switchRight && (
        <Switch
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleTheme}
          value={mode === 'dark' ? true : false}
        />
      )}
      {rightIcon && (
        <Icon style={styles.rightIcon} name="caret-right" type="font-awesome" />
      )}
    </View>
  );
};

export default ItemListProfile;
