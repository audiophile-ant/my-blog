import './pagination.custom.scss';

import { Pagination } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

import { changShow } from '@/redux/slices/showNav';

import s from './index.scss';

interface Props {
  current?: number;
  defaultPageSize?: number;
  total?: number;
  setPage?: Function;
  scrollToTop?: number;
  autoScroll?: boolean;
}

const MyPagination: React.FC<Props> = ({
  current,
  defaultPageSize = 8,
  total = 0,
  setPage,
  scrollToTop = 0,
  autoScroll = false
}) => {
  const dispatch = useDispatch()
  return (
    <>
      {total < defaultPageSize ? (
        <div id='myPagination' className={s.pageBox}>
          <Pagination
            current={current}
            total={total}
            defaultPageSize={defaultPageSize}
            showSizeChanger={false}
            showTitle={false}
            onChange={(page: number) => {
              setPage?.(page);
              dispatch(changShow?.(false));
              autoScroll && window.scrollTo(0, scrollToTop);
            }}
          />
        </div>
      ) : null}
    </>
  );
};

export default MyPagination;
