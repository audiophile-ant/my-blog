import './global.custom.scss';

import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import ErrorBoundary from '@/components/ErrorBoundary';
import  Loading  from '@/components/Loading' 
import RequireAuth from '@/components/RequireAuth' 
import { selectTimeSwitch } from '@/redux/selectors';
import { getTime } from '@/redux/slices/timeOfDay';



const Home = lazy(
  () => import(/* webpackChunkName:'Admin', webpackPrefetch:true */ '@/pages/Home')
);
const Login = lazy(
  () => import(/* webpackChunkName:'Home', webpackPrefetch:true */ '@/pages/Login')
);

const App: React.FC = () => {

  const dispatch = useDispatch();
  const tswitch = useSelector(selectTimeSwitch)
  let intervalId: any = null

  useEffect(() => {
    dispatch(getTime())
    intervalId && clearInterval(intervalId)
    intervalId = setInterval(() => { dispatch(getTime()) }, 60000);
    
    if (tswitch) {
      clearInterval(intervalId)
    }  
  
    // 组件销毁时清除定时器
    return () => {
      clearInterval(intervalId);  
    };
  },[dispatch, tswitch])
  return (   
      <ErrorBoundary>
        <Suspense fallback={<Loading/>}>
        <Routes>
            <Route
              path='/login'
              element={
                <RequireAuth requireLogin={false} to='/admin'>
                  <Login />
                </RequireAuth>
              }
            />
          <Route path='/home/*' element={<Home />} />
          <Route path='/' element={<Navigate to='login' />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
  );
};

export default App;
