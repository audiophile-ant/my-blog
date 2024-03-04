import useUrlState from '@ahooksjs/use-url-state';
import React from 'react';

import Comment from '@/components/Comment';
import Layout from '@/components/Layout';
import MarkDown from '@/components/MarkDown';

import CopyRight from './CopyRight';
import styles from './index.scss';
import Navbar from './Navbar';
import PostTags from './PostTags';

const Post: React.FC = () => {
  const [search] = useUrlState();

  const data = {
    "data":  [
      {
          "_id": "d4107ab16253d33a06664d9a7137c70f",
          "_openid": "dbee9976b3c14448a06f2006a4795cf2",
          "classes": "前端基础",
          "content": "使用Web Worker可以在后台线程中运行 JavaScript，线程可以执行任务而不会干扰用户界面。\n\n## 使用规则\n\n- `worker`是使用`Worker()`构造出的实例对象，在后台线程中运行一个命名的 JavaScript 脚本。\n- `worker`实例对象可以通过将信息发送到创建它的 JavaScript 代码。\n- `worker`运行在另一个全局上下文中，而非`window`对象。\n- `worker`中不能直接操作 DOM 节点，也不能使用`window`对象的默认方法和属性。\n- `worker`和主线程之间，通过`postMessage()`方法发送各自的数据，使用`onmessage`事件处理函数来响应数据，数据在`message`事件的`data`属性中。\n- `worker`和主线程之间传递的数据是**另外复制**的数据。\n- 主线程可以使用实例对象上的`terminate()`方法立刻终止该`worker`。\n- `worker`线程内部可以使用`close()`关闭自身。\n- `worker`的一个优势在于能够执行处理器密集型的运算而不会阻塞 UI 线程。\n\n## 应用举例\n\n如下代码所示，在主线程中首先进行了兼容性检验，创建了一个由`worker.js`执行的`Worker`。通过`myWorker.postMessage()`发送消息。通过`myWorker.onmessage`响应`Worker`返回的消息。\n\n```javascript\nconst a = 1;\nconst b = 2;\n\nif (window.Worker) {\n  const myWorker = new Worker('./worker.js');\n  myWorker.postMessage({ a, b });\n\n  myWorker.onmessage = e => {\n    console.log('收到worker的信息...');\n    console.log(e.data);\n  };\n}\n```\n\n在`Worker`中，通过`onmessage`响应主线程发送的消息，经过一些处理后，通过`postMessage`返回消息到主线程。\n\n```javascript\n// worker.js\nonmessage = e => {\n  console.log('收到主线程的信息...');\n  const { a, b } = e.data;\n  const sum = a + b;\n  postMessage(sum);\n};\n```\n\n从这里我们可以看到，主线程中，`onmessage`和`postMessage()`必须挂在`worker`对象上。而在`worker`内部，不必这样做，因为`worker`有自己的作用域。\n\n如下代码所示，在`worker`的`onmessage`中打印`this`：\n\n```javascript\nonmessage = e => {\n  console.log(this);\n};\n```\n\n![image-20220411142557425](https://img.lzxjack.top:99/202204111425460.png)\n\n## 终止 worker\n\n在上述代码中，若在主线程中调用`myWorker.terminate()`，则不会收到任何消息，因为`worker`线程刚创建完毕就被终止。\n\n```javascript\nconst a = 1;\nconst b = 2;\n\nif (window.Worker) {\n  const myWorker = new Worker('./worker.js');\n  myWorker.postMessage({ a, b });\n  // 终止myWorker\n  myWorker.terminate();\n\n  myWorker.onmessage = e => {\n    console.log('收到worker的信息...');\n    console.log(e.data);\n  };\n}\n```\n\n同样，在`worker`线程中调用`close()`，主线程也不会有任何响应，因为线程刚启动就被关闭。\n\n```javascript\nclose();\n\nonmessage = e => {\n  console.log('收到主线程的信息...');\n  const { a, b } = e.data;\n  const sum = a + b;\n  postMessage(sum);\n};\n```\n\n## 共享 worker\n\n主线程：\n\n```javascript\nconst a = 1;\nconst b = 2;\n\nif (window.Worker) {\n  const myWorker = new SharedWorker('./worker.js');\n  myWorker.port.postMessage({ a, b });\n\n  myWorker.port.onmessage = e => {\n    console.log('收到worker的信息...');\n    console.log(e.data);\n  };\n}\n```\n\n`worker`线程：\n\n```javascript\nonconnect = e => {\n  const port = e.ports[0];\n\n  port.onmessage = e => {\n    const { a, b } = e.data;\n    const sum = a + b;\n    port.postMessage(sum);\n  };\n};\n```\n\n\n\n***\n\n> 参考：\n>\n> - <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers\" target=\"_blank\">Using Web Workers</a>",
          "date": 1649660525000,
          "post": true,
          "tags": [
              "JavaScript",
              "HTML"
          ],
          "title": "Web Workers：在后台线程执行指定脚本",
          "titleEng": "web-worker",
          "url": "https://lzxjack.top/post?title=web-worker"
      }
  ]
  }

  return (
    <Layout
      title={data?.data[0].title}
      loading={false}
      classes={data?.data[0].classes}
      date={data?.data[0].date}
      isPost={true}
      rows={14}
    >
      <MarkDown content={data?.data[0].content} className={styles.mb} />
      <PostTags tags={data?.data[0].tags} />
      <CopyRight title={data?.data[0].title} titleEng={data?.data[0].titleEng} />
      <Comment titleEng={search.title} title={data?.data[0].title} />
      <Navbar content={data?.data[0].content} />
    </Layout>
  );
};

export default Post;
