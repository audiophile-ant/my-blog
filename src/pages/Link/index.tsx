import { useRequest } from 'ahooks';
import React from 'react';

import Layout from '@/components/Layout';
import { shuffleArray } from '@/utils/function';

import { Title } from '../titleConfig';
import styles from './index.scss';
import LinkItem from './LinkItem';

interface linkType {
  _id: string;
  link: string;
  avatar: string;
  name: string;
  descr: string;
}

const Link: React.FC = () => {
  const data = {
    "data": [
      {
          "_id": "058dfefe629ef59007a8b1ee77d519a7",
          "_openid": "dbee9976b3c14448a06f2006a4795cf2",
          "avatar": "https://img.lzxjack.top:99/202206071938647.webp",
          "date": 1680708792000,
          "descr": "一个社恐的前端开发从业者",
          "link": "https://han96.com",
          "name": "花贝"
      },
      {
          "_id": "14139e12611f408e060fb88e4ef5efc2",
          "_openid": "9bf44da2dbb8473da1fcf4f591cb82ff",
          "avatar": "https://img.lzxjack.top:99/202203311701157.webp",
          "date": 1680708803000,
          "descr": "爱折腾的设计师",
          "link": "https://blog.zhheo.com/",
          "name": "Heo"
      },
      {
          "_id": "17e3426e61eb914008c719ce6a1a552e",
          "_openid": "dbee9976b3c14448a06f2006a4795cf2",
          "avatar": "https://img.lzxjack.top:99/202203311718522.webp",
          "date": 1680708820000,
          "descr": "但行好事，莫问前程！",
          "link": "https://zengyq.cn/",
          "name": "如此肤浅"
      },
      {
          "_id": "2d44d6c2611f409606176c9d34e509da",
          "_openid": "9bf44da2dbb8473da1fcf4f591cb82ff",
          "avatar": "https://img.lzxjack.top:99/202203311702542.webp",
          "date": 1680708840000,
          "descr": "走出自己的傲慢，承认自己的局限。",
          "link": "https://zkpeace.com/",
          "name": "途中的树"
      }
    ]
  }

  return (
    <Layout title={Title.Link} loading={false} className={styles.box}>
      {shuffleArray(data?.data).map((item: linkType) => (
        <LinkItem
          key={item._id}
          link={item.link}
          avatar={item.avatar}
          name={item.name}
          descr={item.descr}
        />
      ))}
    </Layout>
  );
};

export default Link;
