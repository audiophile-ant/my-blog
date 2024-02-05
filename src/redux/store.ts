import { configureStore } from '@reduxjs/toolkit';

import { nowEnv } from '@/environment';
import isLogin from '@/redux/slices/isLogin';
import mode from '@/redux/slices/mode';
import requireLogin from '@/redux/slices/requireLogin';

export default configureStore({
  reducer: { isLogin, requireLogin, mode},
  devTools: nowEnv !== 'prod'
});
