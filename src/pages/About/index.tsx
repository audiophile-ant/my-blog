import { useToggle } from 'ahooks';
import React from 'react';

import Layout from '@/components/Layout';

import { Title } from '../titleConfig';
import AboutMe from './AboutMe';
import AboutSite from './AboutSite';
import styles from './index.scss';
import Switch from './Switch';

const About: React.FC = () => {
  const [state, { toggle, setLeft, setRight }] = useToggle();

  const data = {
    "about": {
      data: [
        {
            "_id": "cd045e7561000c67004fcaa60b846f82",
            "_openid": "9bf44da2dbb8473da1fcf4f591cb82ff",
            "content": "### 🖥️关于本站\n\n本站是自己学习了**React**后，用**React**写的个人博客系统，包括**博客展示页面**和**后台管理页面**，现在看到的就是**博客展示页面**~\n\n主要整理、分享一些自己的学习笔记和心得，若有错误，欢迎大家指出、交流！\n\n✅目前**博客展示页面**已成功升级`2.0`版本，样式基本保持原样，主要是逻辑代码进行了重构，优化了整体的性能😎。\n\n❓**后台管理页面**也有重构计划，但接下来一段时间要忙起来了，**短期内**不会有大改动。\n\n\n\n🔖博客主要使用到的库如下：\n\n**前端**（博客展示页面）：\n\n- 主要技术栈为`react`+`hooks`+`TS`\n- 使用自建`webpack`脚手架<a href=\"https://github.com/lzxjack/my-react\" target=\"_blank\">my-react</a>开发\n- `react`相关库`React-Router`、`Redux`等\n- `AntD`组件库（自定义样式/按需导入）\n- `ahooks`库提供常用的`hooks`\n- `axios`网络请求库\n- `echarts`图标库绘制饼图\n- 时间格式化工具`dayjs`\n- `markdown`格式渲染工具`marked`\n- 代码高亮渲染工具`highlight.js`\n- 其他常用工具库等\n\n**后端**：\n\n后端使用腾讯云`CloudBase`云端一体化后端云服务，包括：\n\n- 用户管理：管理员登录、未登录访问\n- 数据库：存放管理员的博客数据\n- 网站托管：托管博客静态网页\n- 云函数：部署邮箱提醒`API`，有新评论/回复时触发，发送邮件提醒\n\n**其他**：\n\n- `eslint`规范代码风格\n- `commitlint`保证`git commit`提交规范\n\n\n\n\n### ✔️本站链接\n\n如果想和博主**交换友链**，可以在<a href=\"https://lzxjack.top/msg\" target=\"_self\">「留言板」</a>留言，欢迎各路大佬交流~\n\n我的链接：\n\n```\nname: 飞鸟\nlink: https://lzxjack.top/\navatar: https://img.lzxjack.top:99/202203302154224.webp\ndescr: 一只平凡的鸟罢了。\n```\n\n\n",
            "isMe": false
        },
        {
            "_id": "2d44d6c261000c620048885e52cb5c37",
            "_openid": "9bf44da2dbb8473da1fcf4f591cb82ff",
            "content": "### 👋 你好啊，我叫飞鸟！\n\n-   👀 2023年毕业，就职于**北京**某司\n-   💻 热爱**前端开发**\n-   👨‍🏭希望成为一名**优秀前端工程师**\n\n这是我自己写的**个人博客**，感谢你在茫茫互联网中找到了这里～\n\n请多多指教！😝😝😝\n\n\n\n📖**联系方式**\n\n- 🐧QQ：`965555169`\n- ✉️邮箱：`lzxjack1998@163.com`\n- 💻GitHub：https://github.com/lzxjack\n",
            "isMe": true
        }
    ]
    },
    "classestyles": {
      "data": [
        {
            "_id": "f7e3582e650e987900027382411acf79",
            "_openid": "41fcc65978324a8db4048993dfc0a9df",
            "class": "CSS",
            "count": 14,
            "date": 1695455354162
        },
        {
            "_id": "def1da45650e98d403c6224755d6a8ed",
            "_openid": "41fcc65978324a8db4048993dfc0a9df",
            "class": "杂七杂八",
            "count": 5,
            "date": 1695455445176
        },
        {
            "_id": "9e7190f1617d2aac02d570275acad8f7",
            "_openid": "dbee9976b3c14448a06f2006a4795cf2",
            "class": "JavaScript 常见问题",
            "count": 19,
            "date": 1681453458000
        }
      ]
    },
    "artSum": {
      "total": 3
    }
  }

  return (
    <Layout title={Title.About} loading={false}>
      <Switch state={state} toggle={toggle} setLeft={setLeft} setRight={setRight} />
      <AboutMe className={state ? '' : styles.hidden} content={data?.about.data[1].content} />
      <AboutSite
        className={state ? styles.hidden : ''}
        content={data?.about.data[0].content}
        classes={data?.classestyles.data}
        artSum={data?.artSum.total}
      />
    </Layout>
  );
};

export default About;
