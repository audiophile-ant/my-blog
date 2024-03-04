import React from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '@/components/Layout';

import { Title } from '../titleConfig';
import ClassBar from './ClassBar';
import styles from './index.scss';

interface ClassType {
  _id: string;
  class: string;
  count: number;
}

const Classes: React.FC = () => {
  const navigate = useNavigate();

  const data = {
    "list": [
      {
          "_id": "14139e12611f4df90612449803ee2e96",
          "_openid": "9bf44da2dbb8473da1fcf4f591cb82ff",
          "class": "Hexo 博客相关",
          "count": 3,
          "date": 1681453420000
      },
      {
          "_id": "2d44d6c2612af63807a541282b9fa55c",
          "_openid": "9bf44da2dbb8473da1fcf4f591cb82ff",
          "class": "LeetCode 题解",
          "count": 18,
          "date": 1681453443000
      },
      {
          "_id": "9e7190f1617d2aac02d570275acad8f7",
          "_openid": "dbee9976b3c14448a06f2006a4795cf2",
          "class": "JavaScript 常见问题",
          "count": 19,
          "date": 1681453458000
      },
      {
          "_id": "14139e12613ff5a10c0dab2e0ceb5c40",
          "_openid": "dbee9976b3c14448a06f2006a4795cf2",
          "class": "HTTP 学习记录",
          "count": 7,
          "date": 1681453476000
      },
      {
          "_id": "8937eaa9611f68fc0587166d7a111aa9",
          "_openid": "9bf44da2dbb8473da1fcf4f591cb82ff",
          "class": "Demo",
          "count": 5,
          "date": 1681453490000
      }
    ]
  }

  return (
    <Layout title={Title.Classes} loading={false} className={styles.classBox} rows={8}>
      {data?.list.map((item: ClassType) => (
        <ClassBar
          className={styles.classItem}
          key={item._id}
          content={item.class}
          num={item.count}
          onClick={() => navigate(`/home/artDetail?class=${encodeURIComponent(item.class)}`)}
        />
      ))}
    </Layout>
  );
};

export default Classes;
