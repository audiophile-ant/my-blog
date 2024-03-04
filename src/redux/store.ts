import { configureStore } from '@reduxjs/toolkit';

import { nowEnv } from '@/environment';
import isLogin from '@/redux/slices/isLogin';
import mode from '@/redux/slices/mode';
import requireLogin from '@/redux/slices/requireLogin';
import showNav from '@/redux/slices/showNav';
import timeOfDay from '@/redux/slices/timeOfDay';
import timeSwitch from '@/redux/slices/timeSwitch';

export default configureStore({
  reducer: { isLogin, requireLogin, mode, timeOfDay, showNav, timeSwitch},
  devTools: nowEnv !== 'prod'
});
