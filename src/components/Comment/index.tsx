import { useRequest, useSafeState } from 'ahooks';
import React from 'react';

import { msgSize } from '@/utils/constants';

import MyPagination from '../MyPagination';
import Divider from './Divider';
// import EditBox from './EditBox';
import MsgList from './MsgList';
import Placehold from './Placehold';

interface Props {
  titleEng?: string;
  autoScroll?: boolean;
  scrollToTop?: number;
  title?: string;
}

export interface MsgType {
  avatar?: string;
  content?: string;
  date?: number;
  email?: string;
  link?: string;
  name?: string;
  replyId?: string;
  _id?: string;
}

const Comment: React.FC<Props> = ({
  titleEng = '',
  autoScroll = false,
  scrollToTop = 0,
  title
}) => {
  const [page, setPage] = useSafeState(1);

  // 评论
  const msgsData = {
    "msgs": {
      "data": [
        {
            "_id": "b751f28065d871760a2a5a1b3b9cac95",
            "avatar": "https://q1.qlogo.cn/g?b=qq&nk=2521929494&s=100",
            "content": "博主，你的背景是用什么画的，是AI吗",
            "date": 1708683637556,
            "email": "2521929494@qq.com",
            "link": "",
            "name": "QQ",
            "postTitle": "",
            "replyId": ""
        },
        {
            "_id": "a72823ff65ae3c62082cdb9308ab6132",
            "avatar": "https://img.lzxjack.top:99/202203302148480.webp",
            "content": "真不错🎉",
            "date": 1705917541469,
            "email": "480521572@qq.com",
            "link": "",
            "name": "羁绊",
            "postTitle": "",
            "replyId": ""
        },
        {
            "_id": "0b153f9a65ae39630810f46154f8553d",
            "avatar": "https://q1.qlogo.cn/g?b=qq&nk=480521572&s=100",
            "content": "每次评论都需要输入个人信息吗？",
            "date": 1705916774973,
            "email": "480521572@qq.com",
            "link": "",
            "name": "羁绊",
            "postTitle": "",
            "replyId": ""
        },
        {
            "_id": "7027b65465abedce07c8f99e5e55c408",
            "avatar": "https://q1.qlogo.cn/g?b=qq&nk=37026700&s=100",
            "content": "后端夜猫到此一游",
            "date": 1705766352978,
            "email": "37026700@qq.com",
            "link": "",
            "name": "夜猫",
            "postTitle": "",
            "replyId": ""
        }
      ]
    },
    "msgsSum": {
      "total": 3
    }
  }

  // 回复
  const replys = {
    "data": [
      {
          "_id": "f624ef40655afa370323fe2128446a1f",
          "_openid": "41fcc65978324a8db4048993dfc0a9df",
          "avatar": "https://img.lzxjack.top:99/202203302156259.webp",
          "content": "已更新～",
          "date": 1700461111679,
          "email": "965555169@qq.com",
          "link": "https://lzxjack.top",
          "name": "飞鸟",
          "postTitle": "",
          "replyId": "a5782af76559d7b002ffbc4476ece202"
      },
      {
          "_id": "0b153f9a655b3e3d000442ee514db858",
          "_openid": "41fcc65978324a8db4048993dfc0a9df",
          "avatar": "https://img.lzxjack.top:99/202203302156259.webp",
          "content": "每条回复附加了个相应留言id，与留言绑定。数据库中，留言和回复是同级的，前端这边整理成树结构",
          "date": 1700478525465,
          "email": "965555169@qq.com",
          "link": "https://lzxjack.top",
          "name": "飞鸟",
          "postTitle": "",
          "replyId": "def1da45655b01e00abec39f7d56af84"
      },
      {
          "_id": "b751f2806562e11e00fc3ac07a7caad0",
          "_openid": "41fcc65978324a8db4048993dfc0a9df",
          "avatar": "https://img.lzxjack.top:99/202203302156259.webp",
          "content": "是个小bug，🙄",
          "date": 1700978974040,
          "email": "965555169@qq.com",
          "link": "https://lzxjack.top",
          "name": "飞鸟",
          "postTitle": "",
          "replyId": "887cf2b5655eb5780012c5fe033faf85"
      },
      {
          "_id": "7027b654656332330102ef7f6e8d9d49",
          "avatar": "https://img.lzxjack.top:99/202203302148474.webp",
          "content": "红红火火恍恍惚惚😆",
          "date": 1700999729738,
          "email": "kangod@yeah.net",
          "link": "",
          "name": "茶汰",
          "postTitle": "",
          "replyId": "887cf2b5655eb5780012c5fe033faf85"
      }
    ]
  }
    
  const run = () => {

  }

  return (
    <div>
      <Divider />
      {/* <EditBox msgRun={run} title={title} /> */}
      <Placehold msgCount={msgsData?.msgsSum.total} isMsg={!titleEng} />
      <MsgList
        msgs={msgsData?.msgs.data}
        replys={replys?.data}
        loading={false}
        replyRun={run}
        title={title}
      />
      <MyPagination
        current={page}
        defaultPageSize={msgSize}
        total={msgsData?.msgsSum.total}
        setPage={setPage}
        autoScroll={autoScroll}
        scrollToTop={scrollToTop}
      />
    </div>
  );
};

export default Comment;
