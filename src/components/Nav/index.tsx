import './index.custom.scss';

import {
  BgColorsOutlined,
  CheckOutlined,
  CloudSyncOutlined,
  HomeOutlined,
  MenuOutlined,
  SettingOutlined} from '@ant-design/icons';
import {
  useEventListener,
  useLocalStorageState,
  useSafeState,
  useUpdateEffect
} from 'ahooks';
import { Drawer, Switch } from 'antd';
import classNames from 'classnames';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { selectMode, selectShowNav, selectTimeOfDay, selectTimeSwitch } from '@/redux/selectors';
import { changeMode } from '@/redux/slices/mode';
import { changShow } from '@/redux/slices/showNav';
import { setTime } from '@/redux/slices/timeOfDay';
import { getStatues } from '@/redux/slices/timeSwitch';

import { useLinkList } from './config';
import styles from './index.scss';


const Nav: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [timeIndex, setTimeIndex] = useState(0)

  // eslint-disable-next-line no-unused-vars
  const [_, setLocalMode] = useLocalStorageState('localMode');
  const { navArr, mobileNavArr } = useLinkList();
  const [visible, setVisible] = useSafeState(false);
  const mode = useSelector(selectMode)
  const tswitch = useSelector(selectTimeSwitch)
  const time = useSelector(selectTimeOfDay)


  const modeOptions = ['rgb(255, 255, 255)', 'rgb(255, 204, 153)', 'rgb(0, 102, 153)'];

  const changeBG = () => {
    if (mode === 4) {
      dispatch(changeMode(0))  
    } else {
      dispatch(changeMode(mode + 1))   
    }
  }

  useEventListener(
    'mousewheel',
    event => {
      event = event || window.event;
      dispatch(changShow!(event.wheelDeltaY > 0))      
    },
    { target: document.body }
  );

  useUpdateEffect(() => {
    setLocalMode(mode);
  }, [mode]);

  useEffect(() => {
    switch (time) {
      case 'am': setTimeIndex(0); break;
      case 'pm': setTimeIndex(1); break;
      case 'dark': setTimeIndex(2); break;
      default: setTimeIndex(0); break;
    }
  },[time])

  return (
    <>
      <nav className={classNames(styles.nav, { [styles.hiddenNav]: !useSelector(selectShowNav) })}>
        <div className={styles.navContent}>
          {/* 主页 */}
          <div className={styles.homeBtn} onClick={() => navigate('/home')}>
            <HomeOutlined />
          </div>

          {/* 后台管理 */}
          <a className={styles.adminBtn} href='' target='_blank' rel='noreferrer'>
            <SettingOutlined />
          </a>

          {/* 黑暗模式切换 */}
          <div className={classNames(styles.modeBtn, {[styles.none]: !tswitch})} >
            <BgColorsOutlined />
            <div className={styles.modeOpions}>
              {modeOptions.map((backgroundColor, index) => (
                <div
                  key={index}
                  style={{ backgroundColor }}
                  className={classNames(styles.modeItem, styles[`modeItem${index}`])}
                  onClick={() => dispatch(setTime?.(index))}
                >
                  <CheckOutlined style={{ display: timeIndex === index ? 'block' : 'none' }} />
                </div>
              ))}
            </div>
          </div>

          <div className={classNames(styles.modeBG, {[styles.switchDown]: !tswitch})} onClick={changeBG}>
            <CloudSyncOutlined />
          </div>

          <div className={styles.modeSwitch}>
            <Switch checked={ tswitch } onChange={() => dispatch(getStatues(!tswitch))}/>
          </div>

          {/* 其他按钮 */}
          {navArr.map((item, index) => (
            <NavLink
              className={({ isActive }) => (isActive ? styles.navActive : styles.navBtn)}
              to={item.to}
              key={index}  
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
      <div className={styles.mobileNavBtn} onClick={() => setVisible(true)}>
        <MenuOutlined />
      </div>
      <Drawer
        placement='right'
        onClose={() => setVisible(false)}
        visible={visible}
        className='mobile-nav-box'
      >
        <div className={styles.mobileNavBox}>
          {mobileNavArr.map((item, index) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.mobileNavActive : styles.mobileNavItem
              }
              to={item.to}
              key={index}
            >
              {item.name}
            </NavLink>
          ))}
          {modeOptions.map((backgroundColor, index) => (
            <div
              key={index}
              style={{ backgroundColor }}
              className={classNames(styles.modeItem, styles[`modeItem${index}`])}
              onClick={() => dispatch(setTime?.(index))}
            >
              {useSelector(selectMode) === index && <CheckOutlined />}
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default Nav