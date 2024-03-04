import { useMount } from 'ahooks';
import { useDispatch } from 'react-redux';

const useTop = (setNavShow?: Function) => {
  const dispatch = useDispatch()
  useMount(() => {
    window.scrollTo(0, 0);
    dispatch(setNavShow?.(true));
  });
};

export default useTop;