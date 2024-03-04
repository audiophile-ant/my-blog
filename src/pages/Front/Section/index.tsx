import {  useSafeState } from 'ahooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import MyPagination from '@/components/MyPagination';
// import { storeState } from '@/redux/interface';
import { homeSize, staleTime } from '@/utils/constants';

import styles from './index.scss';
import PostCard from './PostCard';

interface theAtc {
  classes: string;
  content: string;
  date: number;
  tags: string[];
  title: string;
  titleEng: string;
  url: string;
  _id: string;
  _openid: string;
}

interface Props {
  artSum?: number;
}

const Section: React.FC<Props> = ({ artSum }) => {
  const navigate = useNavigate();
  const [page, setPage] = useSafeState(1);

  return (
    <section className={styles.section}>
      {[].map(({ _id, title, content, date, tags, titleEng }: theAtc) => (
        <PostCard
          key={_id}
          title={title}
          content={content}
          date={date}
          tags={tags}
          onClick={() => navigate(`/home/post?title=${encodeURIComponent(titleEng)}`)}
        />
      ))}
      <MyPagination
        current={page}
        defaultPageSize={homeSize}
        total={artSum}
        setPage={setPage}
        autoScroll={true}
        scrollToTop={document.body.clientHeight - 80}
      />
    </section>
  );
};

export default Section;
