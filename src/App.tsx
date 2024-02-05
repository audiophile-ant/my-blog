import './global.custom.scss';

import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ErrorBoundary from '@/components/ErrorBoundary';
import  Loading  from '@/components/Loading' 
import  RequireAuth  from '@/components/RequireAuth' 

// import s from './App.scss';

const Home = lazy(
  () => import(/* webpackChunkName:'Admin', webpackPrefetch:true */ '@/pages/Home')
);
const Login = lazy(
  () => import(/* webpackChunkName:'Home', webpackPrefetch:true */ '@/pages/Login')
);

const App: React.FC = () => {
  return (   
      <ErrorBoundary>
        <Suspense fallback={<Loading/>}>
        <Routes>
            <Route
              path='login'
              element={
                <RequireAuth requireLogin={false} to='/admin'>
                  <Login />
                </RequireAuth>
              }
            />
            <Route path='home' element={<Home />} />
            <Route path='*' element={<Navigate to='login' />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
  );
};

export default App;
