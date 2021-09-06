import {Assets} from 'react-native-ui-lib';
Assets.loadAssetsGroup('icons', {});

Assets.loadAssetsGroup('onboarding', {
  onboarding1: require('../assets/onboarding1.png'),
  onboarding2: require('../assets/onboarding2.png'),
  onboarding3: require('../assets/onboarding3.png'),
});

Assets.loadAssetsGroup('iconTab', {
  ic_new: require('../assets/icon_tab_new.png'),
  ic_play: require('../assets/icon_tab_play.png'),
  ic_healthTip: require('../assets/icon_tab_healthTip.png'),
  ic_goal: require('../assets/icon_tab_goal.png'),
  ic_profile: require('../assets/icon_tab_profile.png'),
});
Assets.loadAssetsGroup('iconHeader', {
  ic_search: require('../assets/icon_header_search.png'),
  ic_option: require('../assets/icon_header_option.png'),
});
Assets.loadAssetsGroup('imgNewScreen', {
  ic_bg: require('../assets/img_new_bg.png'),
});

export default Assets;
