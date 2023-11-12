import { makeStyles, normalize } from '@rneui/themed';

import { fontFamilySetup } from '../../../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    width: '100%',
    height: normalize(140),
    flexDirection: 'row',
    marginBottom: normalize(15),
  },
  imgComic: {
    width: '30%',
    marginRight: '2%',
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
  },
  nameComic: {
    lineHeight: normalize(25),
    color: colors.black,
    fontSize: normalize(13),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.bold,
  },
  textContinue: {
    lineHeight: normalize(25),
    color: colors.primary,
    fontSize: normalize(13),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.bold,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRate: {
    color: colors.grey4,
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.medium,
    marginLeft: normalize(5),
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  ellipsiIcon: {
    width: '10%',
    justifyContent: 'center',
  },
  ellipsiIconStyle: {
    color: colors.black,
  },
  textTopics: {
    fontSize: normalize(7),
    color: colors.black,
    textAlign: 'center',
    fontFamily: fontFamilySetup.medium,
  },
  itemTopics: {
    backgroundColor: colors.backgroundTopic,
    marginRight: normalize(5),
    marginTop: normalize(5),
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(5),
    borderRadius: 4,
  },
  topicsContainer: {
    flexDirection: 'row',
    width: '70%',
    flexWrap: 'wrap',
  },
}));

export default useStyles;