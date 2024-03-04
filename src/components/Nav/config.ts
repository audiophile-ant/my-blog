export const useLinkList = () => {
  const navArr = [
    { name: '文章', to: '/home/articles' },
    { name: '分类', to: '/home/classes' },
    { name: '留言', to: '/home/msg' },
    { name: '友链', to: '/home/link' },
    { name: '关于', to: '/home/about' }
  ];

  const mobileNavArr = [
    { name: '主页', to: '/home' },
    { name: '文章', to: '/home/articles' },
    { name: '分类', to: '/home/classes' },
    { name: '留言', to: '/home/msg' },
    { name: '友链', to: '/home/link' },
    { name: '关于', to: '/home/about' }
  ];

  return {
    navArr,
    mobileNavArr
  };
};
