import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  headerContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  iconHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  backBtn: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  headingTxt: {
    fontSize: 18,
    fontWeight: '500',
    padding: 5,
    color: '#000000',
  },
  shareBtn: {
    height: 20,
    width: 20,
    padding: 3,
  },
});

export default style;
