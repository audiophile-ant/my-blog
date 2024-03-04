import './index.custom.scss';

import { VerticalAlignTopOutlined } from '@ant-design/icons';
import { BackTop } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

import { changShow } from '@/redux/slices/showNav';

import styles from './index.scss';


const BackToTop: React.FC = () => {
  const dispatch = useDispatch()

  const backTop = () => {
    dispatch(changShow?.(true))
  };

  return (
    <BackTop duration={700} visibilityHeight={300} onClick={backTop} className='BackTop'>
      <div className={styles.backTop}>
        <VerticalAlignTopOutlined />
      </div>
    </BackTop>
  );
};

export default BackToTop
