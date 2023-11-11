import {View, Text, FlatList} from 'react-native';
import React from 'react';
import useStyles from '../../../styles';
import {Icon} from '@rneui/themed';
import {ItemProps, data} from '../../../types';

const Notifications: React.FC = () => {
  const styles = useStyles();

  const NotificationsItem = (itemProps: ItemProps) => (
    <View style={styles.viewItem}>
      <View style={styles.viewRowCenter}>
        <View
          style={[
            styles.viewIcon,
            {backgroundColor: itemProps.backgroundColor},
          ]}>
          <Icon
            name={itemProps.nameIcon}
            color={itemProps.colorIcon}
            type="ionicon"
            size={24}
          />
        </View>
        <View>
          <View>
            <Text style={styles.textTitle}>{itemProps.title}</Text>
          </View>
          <View style={styles.viewRowCenter}>
            <View style={styles.viewText}>
              <Text style={styles.text}>{itemProps.time}</Text>
            </View>

            <View style={styles.view} />

            <View style={styles.viewText}>
              <Text style={styles.text}>{itemProps.date}</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.textDescription}>{itemProps.description}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem => (
        <NotificationsItem
          title={renderItem.item.title}
          time={renderItem.item.time}
          date={renderItem.item.date}
          description={renderItem.item.description}
          nameIcon={renderItem.item.nameIcon}
          colorIcon={renderItem.item.colorIcon}
          backgroundColor={renderItem.item.backgroundColor}
        />
      )}
    />
  );
};

export default Notifications;
