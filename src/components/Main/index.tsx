import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import ErrorBoundary from '@/components/ErrorBoundary';

import styles from './index.scss';

const Front = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Front'));
const Articles = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Articles'));
const Classes = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Classes'));
const Msg = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Msg'));
const Link = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Link'));
const About = lazy(() => import(/* webpackPrefetch:true */ '@/pages/About'));
const Post = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Post'));
const ArtDetail = lazy(() => import(/* webpackPrefetch:true */ '@/pages/ArtDetail'));

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <ErrorBoundary>
          <Suspense fallback={<></>}>
            <Routes>
              <Route path='/' element={<Front />} />
              <Route path='articles' element={<Articles />} />
              <Route path='classes' element={<Classes />} />
              <Route path='msg' element={<Msg />} />
              <Route path='link' element={<Link />} />
              <Route path='about' element={<About />} />
              <Route path='post' element={<Post />} />
              <Route path='artDetail' element={<ArtDetail />} />
              {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default Main;
