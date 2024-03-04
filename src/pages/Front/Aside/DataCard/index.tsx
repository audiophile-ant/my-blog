import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@/components/Card';
import { staleTime } from '@/utils/constants';

import styles from './index.scss';

interface Props {
  setArtSum?: Function;
}

const DataCard: React.FC<Props> = () => {
  const navigate = useNavigate();

  return (
    <Card className={styles.card} >
      <div className={styles.blogData} onClick={() => navigate('/articles')}>
        <div className={styles.name}>文章</div>
        <div className={styles.num}>{}</div>
      </div>
      <div className={styles.blogData} onClick={() => navigate('/classes')}>
        <div className={styles.name}>分类</div>
        <div className={styles.num}>{}</div>
      </div>
      <div className={styles.blogData} onClick={() => navigate('/tags')}>
        <div className={styles.name}>标签</div>
        <div className={styles.num}>{}</div>
      </div>
    </Card>
  );
};

export default DataCard
