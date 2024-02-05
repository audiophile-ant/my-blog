import { useTitle } from 'ahooks';
import classNames from 'classnames';
import React from 'react';

import styles from './index.scss'


const Home: React.FC = () => {
  useTitle('Home');

  return (
    <div className={classNames(styles.AppBox)}>
      {/* <Nav />
      <Main />
      <Footer />
      <BackToTop /> */}
    </div>
  );
};

export default Home;
