import {Spacings} from 'react-native-ui-lib';
import {Platform} from 'react-native';

Spacings.loadSpacings({
  page: Platform.OS === 'android' ? 16 : 10,
});
