import {CheckBox} from '@rneui/themed';
import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import useStyles from '../../styles';

const ItemFilters: React.FC = () => {
  const styles = useStyles();

  // Top Menu Filters
  const [isAllSelected, setAllSelected] = useState(true);
  const [isSortSelected, setSortSelected] = useState(false);
  const [isPriceSelected, setPriceSelected] = useState(false);
  const [isRatingSelected, setRatingSelected] = useState(false);
  const [isGenreSelected, setGenreSelected] = useState(false);

  // Show menu Selected Filters
  const [showAllSelected, setShowAllSelected] = useState(true);
  const [showSortSelected, setShowSortSelected] = useState(false);
  const [showPriceSelected, setShowPriceSelected] = useState(false);
  const [showRatingSelected, setShowRatingSelected] = useState(false);
  const [showGenreSelected, setShowGenreSelected] = useState(false);

  // Sort
  const [isCbSelected1, setCbSelected1] = useState(true);
  const [isCbSelected2, setCbSelected2] = useState(false);
  const [isCbSelected3, setCbSelected3] = useState(false);
  const [isCbSelected4, setCbSelected4] = useState(false);
  const [isCbSelected5, setCbSelected5] = useState(false);
  const [isCbSelected6, setCbSelected6] = useState(false);

  // Price
  const [isCbSelected7, setCbSelected7] = useState(true);
  const [isCbSelected8, setCbSelected8] = useState(false);

  // Rating
  const [isCbSelected9, setCbSelected9] = useState(true);
  const [isCbSelected10, setCbSelected10] = useState(false);
  const [isCbSelected11, setCbSelected11] = useState(false);

  // Genre
  const [isCbSelected12, setCbSelected12] = useState(true);
  const [isCbSelected13, setCbSelected13] = useState(true);
  const [isCbSelected14, setCbSelected14] = useState(true);
  const [isCbSelected15, setCbSelected15] = useState(true);
  const [isCbSelected16, setCbSelected16] = useState(true);
  const [isCbSelected17, setCbSelected17] = useState(true);
  const [isCbSelected18, setCbSelected18] = useState(true);
  const [isCbSelected19, setCbSelected19] = useState(true);
  const [isCbSelected20, setCbSelected20] = useState(true);
  const [isCbSelected21, setCbSelected21] = useState(true);
  const [isCbSelected22, setCbSelected22] = useState(true);
  const [isCbSelected23, setCbSelected23] = useState(true);

  const handleAllClick = () => {
    if (isAllSelected) {
      setAllSelected(false);
      setShowAllSelected(false);
    } else {
      setAllSelected(true);
      setShowAllSelected(true);
      setShowSortSelected(false);
      setShowPriceSelected(false);
      setShowRatingSelected(false);
      setShowGenreSelected(false);
    }

    setSortSelected(false);
    setPriceSelected(false);
    setRatingSelected(false);
    setGenreSelected(false);
  };

  const handleSortClick = () => {
    if (isSortSelected) {
      setSortSelected(false);
      setShowSortSelected(false);
    } else {
      setSortSelected(true);
      setShowSortSelected(true);
      setShowAllSelected(false);
      setShowPriceSelected(false);
    }

    setAllSelected(false);
    setPriceSelected(false);
    setRatingSelected(false);
    setGenreSelected(false);
  };

  const handlePriceClick = () => {
    if (isPriceSelected) {
      setPriceSelected(false);
      setShowPriceSelected(false);
    } else {
      setPriceSelected(true);
      setShowPriceSelected(true);
      setShowAllSelected(false);
      setShowSortSelected(false);
      setShowRatingSelected(false);
      setShowGenreSelected(false);
    }

    setAllSelected(false);
    setSortSelected(false);
    setRatingSelected(false);
    setGenreSelected(false);
  };

  const handleRatingClick = () => {
    if (isRatingSelected) {
      setRatingSelected(false);
      setShowRatingSelected(false);
    } else {
      setRatingSelected(true);
      setShowRatingSelected(true);
      setShowAllSelected(false);
      setShowSortSelected(false);
      setShowPriceSelected(false);
      setShowGenreSelected(false);
    }

    setAllSelected(false);
    setSortSelected(false);
    setPriceSelected(false);
    setGenreSelected(false);
  };

  const handleGenreClick = () => {
    if (isGenreSelected) {
      setGenreSelected(false);
      setShowGenreSelected(false);
    } else {
      setGenreSelected(true);
      setShowGenreSelected(true);
      setShowAllSelected(false);
      setShowSortSelected(false);
      setShowPriceSelected(false);
      setShowRatingSelected(false);
    }

    setAllSelected(false);
    setSortSelected(false);
    setPriceSelected(false);
    setRatingSelected(false);
  };

  const handleCbSortItem1Click = () => {
    if (isCbSelected1) {
      setCbSelected1(false);
    } else {
      setCbSelected1(true);
    }

    setCbSelected2(false);
    setCbSelected3(false);
    setCbSelected4(false);
    setCbSelected5(false);
    setCbSelected6(false);
  };

  const handleCbSortItem2Click = () => {
    if (isCbSelected2) {
      setCbSelected2(false);
    } else {
      setCbSelected2(true);
    }

    setCbSelected1(false);
    setCbSelected3(false);
    setCbSelected4(false);
    setCbSelected5(false);
    setCbSelected6(false);
  };

  const handleCbSortItem3Click = () => {
    if (isCbSelected3) {
      setCbSelected3(false);
    } else {
      setCbSelected3(true);
    }

    setCbSelected2(false);
    setCbSelected1(false);
    setCbSelected4(false);
    setCbSelected5(false);
    setCbSelected6(false);
  };

  const handleCbSortItem4Click = () => {
    if (isCbSelected4) {
      setCbSelected4(false);
    } else {
      setCbSelected4(true);
    }

    setCbSelected2(false);
    setCbSelected3(false);
    setCbSelected1(false);
    setCbSelected5(false);
    setCbSelected6(false);
  };

  const handleCbSortItem5Click = () => {
    if (isCbSelected5) {
      setCbSelected5(false);
    } else {
      setCbSelected5(true);
    }

    setCbSelected2(false);
    setCbSelected3(false);
    setCbSelected4(false);
    setCbSelected1(false);
    setCbSelected6(false);
  };

  const handleCbSortItem6Click = () => {
    if (isCbSelected6) {
      setCbSelected6(false);
    } else {
      setCbSelected6(true);
    }

    setCbSelected2(false);
    setCbSelected3(false);
    setCbSelected4(false);
    setCbSelected5(false);
    setCbSelected1(false);
  };

  const handleCbPriceItem7Click = () => {
    if (isCbSelected7) {
      setCbSelected7(false);
    } else {
      setCbSelected7(true);
    }

    setCbSelected8(false);
  };

  const handleCbPriceItem8Click = () => {
    if (isCbSelected8) {
      setCbSelected8(false);
    } else {
      setCbSelected8(true);
    }

    setCbSelected7(false);
  };

  const handleCbRatingItem9Click = () => {
    if (isCbSelected9) {
      setCbSelected9(false);
    } else {
      setCbSelected9(true);
    }

    setCbSelected10(false);
    setCbSelected11(false);
  };

  const handleCbRatingItem10Click = () => {
    if (isCbSelected10) {
      setCbSelected10(false);
    } else {
      setCbSelected10(true);
    }

    setCbSelected9(false);
    setCbSelected11(false);
  };

  const handleCbRatingItem11Click = () => {
    if (isCbSelected11) {
      setCbSelected11(false);
    } else {
      setCbSelected11(true);
    }

    setCbSelected9(false);
    setCbSelected10(false);
  };

  const handleCbGenreItem12Click = () => {
    if (isCbSelected12) {
      setCbSelected12(false);
      setCbSelected13(false);
      setCbSelected14(false);
      setCbSelected15(false);
      setCbSelected16(false);
      setCbSelected17(false);
      setCbSelected18(false);
      setCbSelected19(false);
      setCbSelected20(false);
      setCbSelected21(false);
      setCbSelected22(false);
      setCbSelected23(false);
    } else {
      setCbSelected12(true);
      setCbSelected13(true);
      setCbSelected14(true);
      setCbSelected15(true);
      setCbSelected16(true);
      setCbSelected17(true);
      setCbSelected18(true);
      setCbSelected19(true);
      setCbSelected20(true);
      setCbSelected21(true);
      setCbSelected22(true);
      setCbSelected23(true);
    }
  };

  const handleCbGenreItem13Click = () => {
    if (isCbSelected13) {
      setCbSelected13(false);
      setCbSelected12(false);
    } else {
      setCbSelected13(true);
    }
  };

  const handleCbGenreItem14Click = () => {
    if (isCbSelected14) {
      setCbSelected14(false);
      setCbSelected12(false);
    } else {
      setCbSelected14(true);
    }
  };

  const handleCbGenreItem15Click = () => {
    if (isCbSelected15) {
      setCbSelected15(false);
      setCbSelected12(false);
    } else {
      setCbSelected15(true);
    }
  };

  const handleCbGenreItem16Click = () => {
    if (isCbSelected16) {
      setCbSelected16(false);
      setCbSelected12(false);
    } else {
      setCbSelected16(true);
    }
  };

  const handleCbGenreItem17Click = () => {
    if (isCbSelected17) {
      setCbSelected17(false);
      setCbSelected12(false);
    } else {
      setCbSelected17(true);
    }
  };

  const handleCbGenreItem18Click = () => {
    if (isCbSelected18) {
      setCbSelected18(false);
      setCbSelected12(false);
    } else {
      setCbSelected18(true);
    }
  };

  const handleCbGenreItem19Click = () => {
    if (isCbSelected19) {
      setCbSelected19(false);
      setCbSelected12(false);
    } else {
      setCbSelected19(true);
    }
  };

  const handleCbGenreItem20Click = () => {
    if (isCbSelected20) {
      setCbSelected20(false);
      setCbSelected12(false);
    } else {
      setCbSelected20(true);
    }
  };

  const handleCbGenreItem21Click = () => {
    if (isCbSelected21) {
      setCbSelected21(false);
      setCbSelected12(false);
    } else {
      setCbSelected21(true);
    }
  };

  const handleCbGenreItem22Click = () => {
    if (isCbSelected22) {
      setCbSelected22(false);
      setCbSelected12(false);
    } else {
      setCbSelected22(true);
    }
  };

  const handleCbGenreItem23Click = () => {
    if (isCbSelected23) {
      setCbSelected23(false);
      setCbSelected12(false);
    } else {
      setCbSelected23(true);
    }
  };

  return (
    <View style={styles.viewItem}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.scrollViewTitle}>
        <View style={styles.viewRow}>
          <TouchableOpacity
            onPress={handleAllClick}
            style={[
              styles.btnTitle,
              {
                backgroundColor: isAllSelected
                  ? styles.backgroundBtnTitleFocus.backgroundColor
                  : styles.backgroundBtnTitleBlur.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles.textTitle,
                {
                  color: isAllSelected
                    ? styles.colorsTextTitleFocus.color
                    : styles.colorsTextTitleBlur.color,
                },
              ]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSortClick}
            style={[
              styles.btnTitle,
              {
                backgroundColor: isSortSelected
                  ? styles.backgroundBtnTitleFocus.backgroundColor
                  : styles.backgroundBtnTitleBlur.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles.textTitle,
                {
                  color: isSortSelected
                    ? styles.colorsTextTitleFocus.color
                    : styles.colorsTextTitleBlur.color,
                },
              ]}>
              Sort
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePriceClick}
            style={[
              styles.btnTitle,
              {
                backgroundColor: isPriceSelected
                  ? styles.backgroundBtnTitleFocus.backgroundColor
                  : styles.backgroundBtnTitleBlur.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles.textTitle,
                {
                  color: isPriceSelected
                    ? styles.colorsTextTitleFocus.color
                    : styles.colorsTextTitleBlur.color,
                },
              ]}>
              Price
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleRatingClick}
            style={[
              styles.btnTitle,
              {
                backgroundColor: isRatingSelected
                  ? styles.backgroundBtnTitleFocus.backgroundColor
                  : styles.backgroundBtnTitleBlur.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles.textTitle,
                {
                  color: isRatingSelected
                    ? styles.colorsTextTitleFocus.color
                    : styles.colorsTextTitleBlur.color,
                },
              ]}>
              Rating
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleGenreClick}
            style={[
              styles.btnTitle,
              {
                backgroundColor: isGenreSelected
                  ? styles.backgroundBtnTitleFocus.backgroundColor
                  : styles.backgroundBtnTitleBlur.backgroundColor,
              },
            ]}>
            <Text
              style={[
                styles.textTitle,
                {
                  color: isGenreSelected
                    ? styles.colorsTextTitleFocus.color
                    : styles.colorsTextTitleBlur.color,
                },
              ]}>
              Genre
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}
        style={styles.scrollViewItem}>
        {showAllSelected ? (
          <View>
            {/* Sort Items */}
            <View style={[styles.viewItemSort, {justifyContent: 'center'}]}>
              <View
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <Text style={styles.textHeaderItem}>Sort</Text>
              </View>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbSortItem1Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected1}
                  onPress={handleCbSortItem1Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected1
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Highest Views</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbSortItem2Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected2}
                  onPress={handleCbSortItem2Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected2
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>New Releases</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbSortItem3Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected3}
                  onPress={handleCbSortItem3Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected3
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Highest Rating</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbSortItem4Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected4}
                  onPress={handleCbSortItem4Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected4
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Lowest Rating</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbSortItem5Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected5}
                  onPress={handleCbSortItem5Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected5
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Oldest Release</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbSortItem6Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected6}
                  onPress={handleCbSortItem6Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected6
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Lowest Views</Text>
              </TouchableOpacity>
            </View>
            {/* Price Items */}
            <View style={[styles.viewItemPrice, {justifyContent: 'center'}]}>
              <View
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <Text style={styles.textHeaderItem}>Price</Text>
              </View>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbPriceItem7Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected7}
                  onPress={handleCbPriceItem7Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected7
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Price low to high</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbPriceItem8Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected8}
                  onPress={handleCbPriceItem8Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected8
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Price high to low</Text>
              </TouchableOpacity>
            </View>
            {/* Rating Items */}
            <View style={[styles.viewItemRating, {justifyContent: 'center'}]}>
              <View
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <Text style={styles.textHeaderItem}>Rating</Text>
              </View>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbRatingItem9Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected9}
                  onPress={handleCbRatingItem9Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected9
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>All</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbRatingItem10Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected10}
                  onPress={handleCbRatingItem10Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected10
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>4.5+</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbRatingItem11Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected11}
                  onPress={handleCbRatingItem11Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected11
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>4.0+</Text>
              </TouchableOpacity>
            </View>
            {/* Genre Items */}
            <View style={[styles.viewItemGenre, {justifyContent: 'center'}]}>
              <View
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <Text style={styles.textHeaderItem}>Genre</Text>
              </View>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem12Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected12}
                  onPress={handleCbGenreItem12Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected12
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>All</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem13Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected13}
                  onPress={handleCbGenreItem13Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected13
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Action</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem14Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected14}
                  onPress={handleCbGenreItem14Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected14
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Adventure</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />

              <TouchableOpacity
                onPress={handleCbGenreItem15Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected15}
                  onPress={handleCbGenreItem15Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected15
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Romace</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem16Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected16}
                  onPress={handleCbGenreItem16Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected16
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Comic</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem17Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected17}
                  onPress={handleCbGenreItem17Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected17
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Comedy</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />

              <TouchableOpacity
                onPress={handleCbGenreItem18Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected18}
                  onPress={handleCbGenreItem18Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected18
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Fansty</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem19Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected19}
                  onPress={handleCbGenreItem19Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected19
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Mystery</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem20Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected20}
                  onPress={handleCbGenreItem20Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected20
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Horror</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />

              <TouchableOpacity
                onPress={handleCbGenreItem21Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected21}
                  onPress={handleCbGenreItem21Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected21
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Sco-Fi</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem22Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected22}
                  onPress={handleCbGenreItem22Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected22
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Thriller</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem23Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected23}
                  onPress={handleCbGenreItem23Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected23
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Travel</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        {showSortSelected ? (
          <View>
            {/* Sort Items */}
            <View style={[styles.viewItemSort, {justifyContent: 'center'}]}>
              <View
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <Text style={styles.textHeaderItem}>Sort</Text>
              </View>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbSortItem1Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected1}
                  onPress={handleCbSortItem1Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected1
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Highest Views</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbSortItem2Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected2}
                  onPress={handleCbSortItem2Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected2
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>New Releases</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbSortItem3Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected3}
                  onPress={handleCbSortItem3Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected3
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Highest Rating</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbSortItem4Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected4}
                  onPress={handleCbSortItem4Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected4
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Lowest Rating</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbSortItem5Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected5}
                  onPress={handleCbSortItem5Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected5
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Oldest Release</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbSortItem6Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected6}
                  onPress={handleCbSortItem6Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected6
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Lowest Views</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        {showPriceSelected ? (
          <View>
            {/* Price Items */}
            <View style={[styles.viewItemPrice, {justifyContent: 'center'}]}>
              <View
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <Text style={styles.textHeaderItem}>Price</Text>
              </View>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbPriceItem7Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected7}
                  onPress={handleCbPriceItem7Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected7
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Price low to high</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbPriceItem8Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected8}
                  onPress={handleCbPriceItem8Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected8
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Price high to low</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        {showRatingSelected ? (
          <View>
            {/* Rating Items */}
            <View style={[styles.viewItemRating, {justifyContent: 'center'}]}>
              <View
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <Text style={styles.textHeaderItem}>Rating</Text>
              </View>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbRatingItem9Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected9}
                  onPress={handleCbRatingItem9Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected9
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>All</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbRatingItem10Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected10}
                  onPress={handleCbRatingItem10Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected10
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>4.5+</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbRatingItem11Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected11}
                  onPress={handleCbRatingItem11Click}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected11
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>4.0+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        {showGenreSelected ? (
          <View>
            {/* Genre Items */}
            <View style={[styles.viewItemGenre, {justifyContent: 'center'}]}>
              <View
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <Text style={styles.textHeaderItem}>Genre</Text>
              </View>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem12Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected12}
                  onPress={handleCbGenreItem12Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected12
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>All</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem13Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected13}
                  onPress={handleCbGenreItem13Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected13
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Action</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem14Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected14}
                  onPress={handleCbGenreItem14Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected14
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Adventure</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />

              <TouchableOpacity
                onPress={handleCbGenreItem15Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected15}
                  onPress={handleCbGenreItem15Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected15
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Romace</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem16Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected16}
                  onPress={handleCbGenreItem16Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected16
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Comic</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem17Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected17}
                  onPress={handleCbGenreItem17Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected17
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Comedy</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />

              <TouchableOpacity
                onPress={handleCbGenreItem18Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected18}
                  onPress={handleCbGenreItem18Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected18
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Fansty</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem19Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected19}
                  onPress={handleCbGenreItem19Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected19
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Mystery</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem20Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected20}
                  onPress={handleCbGenreItem20Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected20
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Horror</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />

              <TouchableOpacity
                onPress={handleCbGenreItem21Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected21}
                  onPress={handleCbGenreItem21Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected21
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Sco-Fi</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem22Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected22}
                  onPress={handleCbGenreItem22Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected22
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Thriller</Text>
              </TouchableOpacity>
              <View style={styles.viewUnderline} />
              <TouchableOpacity
                onPress={handleCbGenreItem23Click}
                style={[
                  styles.viewRow,
                  {justifyContent: 'flex-start', alignItems: 'center'},
                ]}>
                <CheckBox
                  checked={isCbSelected23}
                  onPress={handleCbGenreItem23Click}
                  containerStyle={styles.backgroundColorCB}
                  style={{
                    backgroundColor: isCbSelected23
                      ? styles.backgroundBtnTitleFocus.backgroundColor
                      : styles.backgroundBtnTitleBlur.backgroundColor,
                  }}
                />
                <Text style={styles.textItem}>Travel</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </ScrollView>
      <View style={[styles.viewRow, styles.viewBtn]}>
        <TouchableOpacity style={[styles.btn, styles.backgroundColorBtnReset]}>
          <Text style={styles.textBtnReset}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.backgroundColorBtnApply]}>
          <Text style={styles.textBtnApply}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemFilters;