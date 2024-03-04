import './index.custom.scss';

import { MenuFoldOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';
import { Drawer } from 'antd';
import classNames from 'classnames';
import MarkNav from 'markdown-navbar';
import React from 'react';
import { useDispatch } from 'react-redux';

import { changShow } from '@/redux/slices/showNav';

import styles from './index.scss';

interface Props {
  content?: string;
}

const Navbar: React.FC<Props> = ({ content }) => {
  const dispatch = useDispatch()
  const [visible, { setTrue: openDrawer, setFalse: closeDrawer }] = useBoolean(false);

  return (
    <>
      {/* 正常的目录 */}
      <MarkNav
        className={classNames('postNavBar', styles.navBar)}
        source={content || ''}
        headingTopOffset={15}
        ordered={false}
        updateHashAuto={false}
        onNavItemClick={() => dispatch(changShow(false))}
      />
      {/* 中屏显示的按钮 */}
      <div className={styles.hoverBar} onClick={openDrawer}>
        <MenuFoldOutlined />
      </div>
      {/* 中屏抽屉 */}
      <Drawer
        placement='right'
        onClose={closeDrawer}
        visible={visible}
        className={classNames(styles.drawer, 'mobile-navBar-box')}
        width={340}
      >
        <MarkNav
          className='postNavBar'
          source={content || ''}
          headingTopOffset={15 + 60}
          ordered={false}
          updateHashAuto={false}
          onNavItemClick={() => dispatch(changShow(false))}
        />
      </Drawer>
    </>
  );
};

export default Navbar;
