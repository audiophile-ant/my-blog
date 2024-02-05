import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { selectIsLogin, selectRequireLogin } from '@/redux/selectors';



interface Props {
  requireLogin: boolean;
  to: string;
  children: any;
}

export default ({ to, children }: Props) => {
  const location = useLocation();
  const isLogin = useSelector(selectIsLogin);
  const requireLogin = useSelector(selectRequireLogin);


  if (requireLogin) {
    return isLogin ? <Navigate to={to} state={{ from: location }} replace /> : children;
  } else {
    return children;
  }
};
