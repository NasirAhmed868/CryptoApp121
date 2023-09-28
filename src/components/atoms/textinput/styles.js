import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import Themes from '../../../utility/theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: scale(200),
    borderColor: 'gray',
    color: Themes.textColor,
  },
});
export default styles;
