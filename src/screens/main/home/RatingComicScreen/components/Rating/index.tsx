import {AirbnbRating} from '@rneui/themed';
import React from 'react';
import {Text, View} from 'react-native';
import Svg, {Line} from 'react-native-svg';
import useStyles from './styles';

interface LineComponentProps {
  length: number;
  stroke: string;
}

const LineComponent: React.FC<LineComponentProps> = ({length, stroke}) => {
  return (
    <Svg height="4" width={length.toString()}>
      <Line
        x1="0"
        y1="5"
        x2={length.toString()}
        y2="5"
        stroke={stroke}
        strokeWidth="80"
        strokeLinecap="butt"
      />
    </Svg>
  );
};

const ItemRating: React.FC = () => {
  const styles = useStyles();

  const data = [
    {value: 5, length: 100},
    {value: 4, length: 80},
    {value: 3, length: 70},
    {value: 2, length: 60},
    {value: 1, length: 50},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.viewRating1}>
          <Text style={styles.numberRating}>4.9</Text>
          <AirbnbRating
            isDisabled={true}
            defaultRating={4}
            selectedColor="#FFC911"
            showRating={false}
            size={20}
          />
          <Text style={styles.numberReviews}>( 6.8k reviews )</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.viewRating2}>
          {data.map(({value, length}, index) => (
            <View style={styles.lineRating} key={index}>
              <Text style={styles.numberLine}>{value}</Text>
              <LineComponent length={length} stroke="#FAA731" />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ItemRating;
