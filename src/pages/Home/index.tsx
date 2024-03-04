import { useLocalStorageState, useMount, useTitle } from 'ahooks';
import classNames from 'classnames';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BackToTop from '@/components/BackToTop'
import Footer from '@/components/Footer'
import Main from '@/components/Main'
import Nav from '@/components/Nav'
import { selectMode, selectTimeOfDay } from '@/redux/selectors';
import { changeMode } from '@/redux/slices/mode';
import { modeMap, modeMapArr } from '@/utils/timeMap';

import styles from './index.scss'


const Home: React.FC = () => {
  useTitle('Home');

  const bodyStyle = window.document.getElementsByTagName('body')[0].style;
  const dispatch = useDispatch()

  const [localMode] = useLocalStorageState('localMode');
  const mode = useSelector(selectMode)
  const time = useSelector(selectTimeOfDay)
  const bgName = `bg${mode}${time}`

  useMount(() => {
    if (localMode !== undefined) {
      dispatch(changeMode?.(localMode));
    }
  })

  useEffect(() => {
    let timeIndex = 0
    switch (time) {
      case 'am': timeIndex = 0; break;
      case 'pm': timeIndex = 1; break;
      case 'dark': timeIndex = 2; break;
      default: timeIndex = 0; break;
    }
    for (const type of modeMapArr) {
      bodyStyle.setProperty(type, modeMap[type as keyof typeof modeMap][timeIndex!]);
    }

  },[time])

  return (
    <div className={classNames(styles.AppBox, styles[bgName])}>    
      <Nav />
      <Main />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
