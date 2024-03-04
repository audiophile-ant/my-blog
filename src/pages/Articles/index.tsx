import { useRequest, useSafeState } from 'ahooks';
import React from 'react';

import Layout from '@/components/Layout';
import MyPagination from '@/components/MyPagination';
import { detailPostSize, staleTime } from '@/utils/constants';

import { Title } from '../titleConfig';
import ArtList from './ArtList';
import Search from './Search';

const Articles: React.FC = () => {
  const [page, setPage] = useSafeState(1);

  const [where, setWhere] = useSafeState(() => ({}));

  const data = {
      "sum": {
          "total": 3
      },
      "list": [
          {
              "_id": "63605076623d4a0301963437303413bd",
              "classes": "杂七杂八",
              "content": "## 问题\n\n最近在重构博客时，遇到了一个问题。在生产模式下，使用的`MiniCssExtractPlugin.loader`代替`style-loader`，但图片、字体等资源文件输出路径设置不正确，webpack 配置如下：\n\n```javascript\nmodule.exports = merge(common, {\n  target: 'browserslist',\n  mode: 'production',\n  devtool: false,\n  output: {\n    path: path.resolve(ROOT_PATH, './build'),\n    publicPath: './',\n    filename: 'js/[name].[contenthash:8].js',\n    chunkFilename: 'js/[name].[contenthash:8].js',\n    // 资源\n    assetModuleFilename: 'assets/[name].[contenthash:8].[ext]'\n  },\n  plugins: [\n    // 生产模式使用了MiniCssExtractPlugin.loader，则需要使用MiniCssExtractPlugin\n    new MiniCssExtractPlugin({\n      filename: 'css/[name].[contenthash:8].css',\n      chunkFilename: 'css/[name].[contenthash:8].chunk.css'\n    })\n  // ...\n  ],\n  \n  // ...\n}\n```\n\n设置了`output.assetModuleFilename`在`assets`目录下，然而线上的路径却为：\n\n![](https://img.lzxjack.top:99/202203251231114.png)\n\n可以看到，线上的图片引入路径多了一个`css`目录，而打包出来的文件结构如下，图片资源确实是在`assets`目录下的：\n\n![](https://img.lzxjack.top:99/202203251232025.png)\n\n引入的路径应该往上跳出一层目录，才能正确地访问到图片。\n\n## 解决\n\n后来找到了解决办法，在 webpack 配置文件中，使用`MiniCssExtractPlugin.loader`时，配置一个`publicPath`，让其向上跳出一层目录：\n\n```javascript\n{ loader: MiniCssExtractPlugin.loader, options: { publicPath: '../' } }\n```\n\n打包后的文件结构没有变化，线上的引入路径变为如下：\n\n![](https://img.lzxjack.top:99/202203251242487.png)\n\n与打包的文件结构相符，正确引入了图片。\n\n## 参考\n\n> <a href=\"https://github.com/webpack-contrib/mini-css-extract-plugin\" target=\"_blank\">mini-css-extract-plugin</a>",
              "date": 1648183717000,
              "post": true,
              "title": "解决webpack5打包CSS图片路径不正确问题",
              "titleEng": "webpack-img-err",
              "url": "https://lzxjack.top/post?title=webpack-img-err"
          },
          {
              "_id": "9e7190f161693376002a46615b8daace",
              "classes": "CSS",
              "content": "## 1. px\n\n`px`是像素单位。它是代表显示器上每一个显示的像素点，根据用户屏幕显示器的分辨率决定。\n\n## 2. em\n\n`em`为相对单位，相对于当前元素内文本的字体尺寸。如果当前元素没有指定字体尺寸，那么以浏览器默认的字体尺寸为准。\n\n例如，当前元素设置了字体尺寸为`24px`，那么`2em`就代表`48px`。\n\n## 3. rem\n\n`rem`为相对单位，相对于`<HTML>`元素文本的字体尺寸。如果`<HTML>`元素没有指定字体尺寸，那么以浏览器默认的字体尺寸为准。\n\n例如，`<HTML>`元素设置了字体尺寸为`24px`，那么`2rem`就代表`48px`。\n\n## 4. vw和vh\n\n`vw`和`vh`是相对单位，相对于**当前视口**。\n\n例如，`10vw`代表当前视口**宽度**的`10%`，`20vh`代表当前视口**高度**的`20%`。\n\n## 5. 百分号\n\n`%`是相对单位，相对于**父元素**的相关尺寸。\n\n例如，父元素设置了`height: 100px`，那么它的子元素`height: 50%`就代表`50px`。",
              "date": 1634284391000,
              "post": true,
              "title": "CSS尺寸单位px、em、rem、vw、vh以及%的区别",
              "titleEng": "css-size",
              "url": "https://lzxjack.top/post?title=css-size"
          },
          {
              "_id": "6360507662415a3e0219226f19ff5623",
              "classes": "CSS",
              "content": "## 1. 单行文字溢出省略\n\n只需添加三行代码即可：\n\n```css\noverflow: hidden; /* 超出的文本隐藏 */\ntext-overflow: ellipsis; /* 显示省略符号来代表被修剪的文本。 */\nwhite-space: nowrap; /* 文本不换行 */\n```\n\n举例：\n\n![](https://img.lzxjack.top:99/20210719132004.png)\n\n`CSS`：\n\n```css\n.demo {\n    width: 200px;\n    height: 20px;\n    border: 2px solid #000;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n```\n\n## 2. 多行文字溢出省略\n\n需要添加`4`行`CSS`代码：\n\n```css\ndisplay: -webkit-box; /* 将对象作为弹性伸缩盒子模型显示 */\n-webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */\n-webkit-line-clamp: 3; /* 表示显示的行数，不是CSS规范属性 */\noverflow: hidden; /* 超出的文本隐藏 */\n```\n\n举例：\n\n![](https://img.lzxjack.top:99/20210719131949.png)\n\n`CSS`：\n\n```css\n.demo {\n    width: 200px;\n    height: 64px;\n    border: 2px solid #000;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 3;\n    overflow: hidden;\n}\n```\n\n\n",
              "date": 1626672366000,
              "post": true,
              "title": "CSS 文字溢出部分用省略号代替",
              "titleEng": "text-ellipsis",
              "url": "https://lzxjack.top/post?title=text-ellipsis"
          }
      ]
  }

  const run = () => {

  }

  return (
    <Layout title={Title.Articles}>
      <Search page={page} setPage={setPage} where={where} setWhere={setWhere} run={run} />
      <ArtList articles={data?.list} loading={false} />
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

export default Articles;
