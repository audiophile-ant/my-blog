import useUrlState from '@ahooksjs/use-url-state';
import { useSafeState } from 'ahooks';
import dayjs from 'dayjs';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import DisplayBar from '@/components/DisplayBar';
import Layout from '@/components/Layout';
import MyPagination from '@/components/MyPagination';
import { detailPostSize } from '@/utils/constants';

import { ArticleType } from '../constant';

const ArtDetail: React.FC = () => {
  const [query] = useUrlState();
  const navigate = useNavigate();

  const [page, setPage] = useSafeState(1);


  const data = {
    "sum": {
      "total": 4
    },
    "articles": {
      "data": [
        {
            "_id": "fc8e64656423139706756e8103700698",
            "_openid": "dbee9976b3c14448a06f2006a4795cf2",
            "classes": "HTTP 学习记录",
            "content": "# 1. HTTP-1.0\n\n**无状态**，**无连接**的应用层协议\n\n- 无法复用连接\n\n  每次发送请求，都要重新建立连接。\n\n- 队头阻塞\n\n  下个请求必须在上个请求响应到达后发送。如果上个请求响应丢失，则后面请求被**阻塞**。\n\n# 2. HTTP-1.1\n\nHTTP1.1 继承了 HTTP1.0 的简单，克服了 HTTP1.0 性能上的问题。\n\n- 长连接\n\n  新增`Connection: keep-alive`保持**长连接**。\n\n- 管道化\n\n  支持管道化请求，请求可以**并行传输**，但**响应顺序应与请求顺序相同**。实际场景中，浏览器采用建立多个TCP会话的方式，实现真正的并行，通过域名限制大会话数量。\n\n- 缓存处理\n\n  新增`Cache-control`，支持**强缓存**和**协商缓存**。\n\n- 断点续传\n\n- 主机头\n\n  新增`Host`字段，使得一个服务器创建多个站点。\n\n# 3. HTTP-2.0\n\nHTTP2.0进一步改善了传输性能。\n\n- 二进制分帧\n\n  在应用层和传输层间增加**二进制分帧层**。\n\n- 多路复用\n\n  建立双向字节流，帧头部包含所属流 ID，帧可以乱序发送，数据流可设优先级和依赖。从而实现一个 TCP 会话上进行任意数量的HTTP请求，真正的并行传输。\n\n- 头部压缩\n\n  压缩算法编码原来纯文本发送的请求头，通讯双方各自缓存一份头部元数据表，避免传输重复头。\n\n- 服务器推送\n\n  服务端可**主动向客户端推送资源**，无需客户端请求。\n\n# 4. HTTP-3.0\n\n当一个 TCP 会丢包时，整个会话都要等待重传，后面数据都被阻塞。这是由于 TCP 本身的局限性导致的。HTTP3.0 基于 UDP 协议，解决 TCP 的局限性。\n\n- 0-RTT\n\n  **缓存**当前会话上下文，下次恢复会话时，只需要将之前缓存传递给服务器，验证通过，即可传输数据。\n\n- 多路复用\n\n  一个会话的多个流间**不存在依赖**，丢包只需要重发包，**不需要重传整个连接**。\n\n- 更好的移动端表现\n\n  移动端 IP 经常变化，影响 TCP 传输，HTTP3.0 通过 ID 识别连接，只要 ID 不变，就能快速连接。\n\n- 加密认证的根文\n\n  TCP 协议头没有加密和认证，HTTP3.0 的包中几乎所有报文都要经过认证，主体经过加密，有效防窃听，注入和篡改。\n\n- 向前纠错机制\n\n  每个包还包含其他数据包的数据，少量丢包可通过**其他包的冗余数据直接组装**而无需重传。数据发送上限降低，但有效减少了丢包重传所需时间。\n\n\n\n***\n\n> 参考：\n>\n> <a href=\"https://leetcode-cn.com/leetbook/detail/networks-interview-highlights/\" target=\"_blank\">《LeetBook》</a>",
            "date": 1632359236000,
            "post": true,
            "tags": [
                "网络基础"
            ],
            "title": "HTTP各版本的特点（1.0/1.1/2.0/3.0）",
            "titleEng": "http-version",
            "url": "https://lzxjack.top/post?title=http-version"
        },
        {
            "_id": "0122a5876423139a0680b14862045a5e",
            "_openid": "dbee9976b3c14448a06f2006a4795cf2",
            "classes": "HTTP 学习记录",
            "content": "# 1. 什么是HTTPS\n\nHTTPS （`Hyper Text Transfer Protocol over SecureSocket Layer`），基于安全套接字协议 SSL，是以安全为目标的 HTTP 通道，在 HTTP 的基础上通过**传输加密**和**身份认证**保证了传输过程的**安全性**。 \n\n**HTTP2.0**和**HTTP3.0**都只用于HTTPS。\n\n# 2. HTTPS建立SSL连接\n\n![](https://img.lzxjack.top:99/20210916095657.png)\n\n① `Client Hello`：客户端将支持 SSL 版本、加密算法、密钥交换算法等发送服务端\n\n② `Server Hello`：服务端确定 SSL 版本、算法、会话 ID 发给客户端\n\n③ `Certificate`：服务端将携带公钥的数字证书发给客户端\n\n④ `Server Hello Done`：通知客户端版本和加密套件发完，准备交换密钥\n\n⑤ `Client Key Exchange`：客户端验证证书合法性，随机生成`premaster secret`用公钥加密发给服务端\n\n⑥ `Change Cipher Spec`：通知服务端后续报文采用协商好的密钥和加密套件\n\n⑦ `Finished`：**客户端**用密钥和加密套件计算已交互消息的`Hash`值发给**服务端**。**服务端**进行同样计算，与收到的**客户端**消息解密比较，相同则协商成功\n\n⑧ `Change Cipher Spec`：通知客户端后续报文采用协商好的密钥和加密套件\n\n⑨ `Finished`：**服务端**用密钥和加密套件计算已交互消息的`Hash`值发给**客户端**。**客户端**进行同样计算，与收到的**服务端**消息解密比较，相同则协商成功\n\n# 3. HTTPS和HTTP的区别\n\n- HTTP 协议以**明文方式**发送内容，数据都是未加密的，**安全性较差**。HTTPS 数据传输过程是加密的，**安全性较好**。\n- HTTP 和 HTTPS 使用的是完全不同的连接方式，用的端口也不一样，前者是 80 端口，后者是 443 端口。\n- HTTPS 协议需要到数字认证机构（Certificate Authority, CA）申请证书，一般需要一定的费用。\n- HTTP 页面响应比 HTTPS 快，主要因为 HTTP 使用 3 次握手建立连接，客户端和服务器需要握手 3 次，而 HTTPS 除了 TCP 的 3 次握手，还需要经历一个 SSL 协商过程。\n\n\n\n***\n\n> 参考：\n>\n> <a href=\"https://leetcode-cn.com/leetbook/detail/networks-interview-highlights/\" target=\"_blank\">《LeetBook》</a>",
            "date": 1632357363000,
            "post": true,
            "tags": [
                "网络基础"
            ],
            "title": "什么是HTTPS，与HTTP的区别？",
            "titleEng": "https",
            "url": "https://lzxjack.top/post?title=https"
        },
        {
            "_id": "2d44d6c26142d0fc0ceb2cc0659b9a4c",
            "_openid": "dbee9976b3c14448a06f2006a4795cf2",
            "classes": "HTTP 学习记录",
            "content": "## 1. TCP是基于连接的协议\n\n传输控制协议（TCP，Transmission Control Protocol）是一种**面向连接**的、可靠的、基于字节流的传输层通信协议。所谓面向连接，是指通信双方在进行通信之前，事先在双方之间建立起一个完整的、可以彼此沟通的通道，这个通道就是连接。\n\nTCP是基于连接的协议，也就是说，在正式收发数据之前，必须和对方建立可靠的连接。一个TCP连接的建立要经过**三次握手**，释放连接一般需要**四次挥手**。\n\n## 2. 连接的建立\n\n**建立**连接的过程一般需要**三次握手**，如下图所示：\n\n![](https://img.lzxjack.top:99/20210916131039.jpg)\n\n在握手之前，主动打开连接的客户端结束`CLOSE`阶段，被动打开的服务器也结束`CLOSE`阶段，并进入`LISTEN`阶段。随后进入三次握手阶段：\n\n（1）首先客户端向服务器发送一个`SYN`包，并等待服务器确认\n\n- 标志位为`SYN`，表示请求建立连接\n- 序号为`Seq = x`（`x`一般为`1`）\n- 随后客户端进入`SYN-SENT`阶段\n\n（2）服务器接收到客户端发来的`SYN`包后，对该包进行确认后结束`LISTEN`阶段，并返回一段`TCP`报文\n\n- 标志位为`SYN`和`ACK`，表示确认客户端的报文`Seq`序号有效，服务器能正常接收客户端发送的数据，并同意创建新连接\n- 序号为`Seq = y`\n- 确认号为`Ack = x + 1`，表示收到客户端的序号`Seq`并将其值加`1`作为自己确认号`Ack`的值，随后服务器端进入`SYN-RECV`阶段\n\n（3）客户端接收到发送的`SYN + ACK`包后，明确了从客户端到服务器的数据传输是正常的，从而结束`SYN-SENT`阶段。并返回最后一段报文\n\n- 标志位为`ACK`，表示确认收到服务器端同意连接的信号\n- 序号为`Seq = x + 1`，表示收到服务器端的确认号`Ack`，并将其值作为自己的序号值\n- 确认号为`Ack= y + 1`，表示收到服务器端序号`seq`，并将其值加`1`作为自己的确认号`Ack`的值\n- 随后客户端进入`ESTABLISHED`\n\n当服务器端收到来自客户端确认收到服务器数据的报文后，得知从服务器到客户端的数据传输是正常的，从而结束`SYN-RECV`阶段，进入`ESTABLISHED`阶段，从而完成**三次握手**。\n\n> 为什么是「三」次握手？\n>\n> 因为**三**次是保证`client`和`server`端**均**让对方知道自己具备**发送**和**接收**能力的**最小次数**：\n>\n> - **client > server**：**client**具备**发送**能力\n> - **server > client**：**server**具备**接收**和**发送**能力\n> - **client > server**：**client**具备**接收**能力\n\n## 2. 连接的释放\n\n**释放**连接的过程一般需要**四次挥手**，如下图所示：\n\n![](https://img.lzxjack.top:99/20210916131013.png)\n\n这里假设客户端主动释放连接。在挥手之前主动释放连接的客户端结束`ESTABLISHED`阶段，随后开始四次挥手：\n\n（1）首先客户端向服务器发送一段`TCP`报文表明其想要释放`TCP`连接\n\n- 标记位为`FIN`，表示**请求释放连接**\n- 序号为`Seq = u`\n- 随后客户端进入`FIN-WAIT-1`阶段，即**半关闭阶段**，并且停止向服务端发送通信数据\n\n（2）服务器接收到客户端请求断开连接的`FIN`报文后，结束`ESTABLISHED`阶段，进入`CLOSE-WAIT`阶段并返回一段`TCP`报文\n\n- 标记位为`ACK`，表示**接收到客户端释放连接的请求**\n- 序号为`Seq = v`\n- 确认号为`Ack = u + 1`，表示是在收到客户端报文的基础上，将其序号值加`1`作为本段报文确认号`Ack`的值\n- 随后服务器开始准备释放服务器端到客户端方向上的连接\n\n客户端收到服务器发送过来的`TCP`报文后，确认服务器已经收到了客户端连接释放的请求，随后客户端进入`FIN-WAIT-2`阶段。\n\n（3）服务器端在发出`ACK`确认报文后，服务器端会将遗留的待传数据传送给客户端，待传输完成后即经过`CLOSE-WAIT`阶段，便做好了释放服务器端到客户端的连接准备，再次向客户端发出一段`TCP`报文\n\n- 标记位为`FIN`和`ACK`，表示**已经准备好释放连接了**\n- 序号为`Seq = w`\n- 确认号`Ack = u + 1`，表示是在收到客户端报文的基础上，将其序号`Seq`的值加`1`作为本段报文确认号`Ack`的值\n\n随后服务器端结束`CLOSE-WAIT`阶段，进入`LAST-ACK`阶段，并且**停止向客户端发送数据**。\n\n（4）客户端收到从服务器发来的`TCP`报文，确认了服务器已经做好释放连接的准备，于是进入`TIME-WAIT`阶段，并向服务器发送一段报文\n\n- 标记位为`ACK`，表示接收到服务器准备好释放连接的信号\n\n- 序号为`Seq= u + 1`，表示是在已收到服务器报文的基础上，将其确认号`Ack`值作为本段序号的值\n\n- 确认号为`Ack= w + 1`，表示是在收到了服务器报文的基础上，将其序号`Seq`的值作为本段报文确认号的值\n\n\n随后客户端开始在`TIME-WAIT`阶段等待`2 MSL`。服务器端收到从客户端发出的`TCP`报文之后进入`CLOSED`阶段，由此正式确认管关闭服务器端到客户端方向上的连接。客户端等待完`2 MSL`之后，进入`CLOSED`阶段，由此完成**四次挥手**。\n\n>为什么是「四」次挥手？\n>\n>因为`TCP`是一个**全双工协议**，必须单独拆除每一条信道，两个方向的**接收**、**发送**都需要单独关闭。\n\n\n\n***\n\n> 参考：\n>\n> <a href=\"https://leetcode-cn.com/leetbook/detail/networks-interview-highlights/\" target=\"_blank\">《LeetBook》</a>",
            "date": 1631768616000,
            "post": true,
            "tags": [
                "网络基础"
            ],
            "title": "TCP连接的建立和释放过程",
            "titleEng": "tcp-connect-break",
            "url": "https://lzxjack.top/post?title=tcp-connect-break"
        },
        {
            "_id": "1ac910326423139c001aa157545ed4b6",
            "_openid": "dbee9976b3c14448a06f2006a4795cf2",
            "classes": "HTTP 学习记录",
            "content": "# 1. 状态码分类\n\n| 状态码 |                    说明                    |\n| :----: | :----------------------------------------: |\n|  1xx   |      指示信息 —— 请求已接收，继续处理      |\n|  2xx   |          成功 —— 请求已被成功接收          |\n|  3xx   | 重定向 —— 要完成请求必须进行更进一步的操作 |\n|  4xx   | 客户端错误 —— 请求有语法错误或请求无法实现 |\n|  5xx   |   服务端错误 —— 服务器未能实现合法的请求   |\n\n# 2. 常见状态码\n\n## 1. 1xx\n\n- 100 `Continue`\n\n  已收到请求，客户端应继续\n\n- 102 `Processing`\n\n  服务端正在处理请求，无响应可用\n\n## 2. 2xx\n\n- 200 `OK`\n\n  请求成功\n\n- 201 `Created`\n\n  请求成功，新资源已创建\n\n- 202 `Accepted`\n\n  请求已收到，但未响应\n\n## 3. 3xx\n\n- 300 `Multiple Choice`\n\n  提供一系列地址供客户端选择重定向\n\n- 301 `Moved Permanently`\n\n  **永久重定向**，默认可缓存，搜索引擎应更新链接\n\n- 302 `Found`\n\n  **临时重定向**，默认不缓存，除非显示指定\n\n- 303 `See Other`\n\n  临时重定向，必须GET请求\n\n## 4. 4xx\n\n- 400 `Bad Request`\n\n  请求语义或参数有误，不应重复请求\n\n- 401 `Unauthorized`\n\n  请求需身份验证或验证失败\n\n- 403  `Forbidden`\n\n  对被请求的页面访问被禁止\n\n- 404 `Not Found`\n\n  请求资源不存在\n\n- 405 `Method Not Allowed`\n\n  不允许的请求方法，并返回Allow允许的请求方法列表\n\n- 408 `Request Timeout`\n\n   请求超时\n\n- 410 `Gone`\n\n  资源已被永久移除\n\n## 5. 5xx\n\n- 500 `Internal Server Error`\n\n  服务端报错，通常是脚本错误\n\n- 501 `Not Implemented`\n\n  请求方法不被服务器支持\n\n- 502 `Bad Gateway`\n\n  网关无响应，通常是服务端环境配置错误\n\n- 503 `Service Unavailable`\n\n  请求未完成，服务器临时过载或宕机，一段时间后可能恢复正常\n\n- 505 `HTTP Version Not Supported`\n\n  请求的 HTTP 协议版本不被支持",
            "date": 1631674758000,
            "post": true,
            "tags": [
                "网络基础"
            ],
            "title": "HTTP 常见的状态码",
            "titleEng": "http-code",
            "url": "https://lzxjack.top/post?title=http-code"
        }
      ]
    }
  }

  return (
    <Layout title={query.tag || query.class}>
      {data?.articles.data.map((item: ArticleType) => (
        <DisplayBar
          key={item._id}
          content={item.title}
          right={dayjs(item.date).format('YYYY-MM-DD')}
          loading={false}
          onClick={() => navigate(`/home/post?title=${encodeURIComponent(item.titleEng)}`)}
        />
      ))}
      <MyPagination
        current={page}
        defaultPageSize={detailPostSize}
        total={data?.sum.total}
        setPage={setPage}
        autoScroll={true}
        scrollToTop={440}
      />
    </Layout>
  );
};

export default ArtDetail;
