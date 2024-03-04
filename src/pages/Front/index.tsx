import { useMount, useSafeState, useTitle } from 'ahooks';
import React from 'react';

import PageTitle from '@/components/PageTitle';
import { changShow } from '@/redux/slices/showNav';
import { siteTitle } from '@/utils/constants';
import useTop from '@/utils/hooks/useTop';

import Aside from './Aside';
import styles from './index.scss';
import Section from './Section';


const getPoem = require('jinrishici');

const Front: React.FC = () => {
  useTitle(siteTitle);
  useTop(changShow);

  const [poem, setPoem] = useSafeState('');
  useMount(() => {
    getPoem.load(
      (res: {
        data: {
          content: string;
        };
      }) => setPoem(res.data.content)
    );
  });

  return (
    <>
      <PageTitle title={siteTitle} desc={poem || ''} className={styles.homeTitle} />
      <div className={styles.body}>
        <Section />
        <Aside />
      </div>
    </>
  );
};

export default Front