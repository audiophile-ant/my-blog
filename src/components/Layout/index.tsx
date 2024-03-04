import { useTitle } from 'ahooks';
import classNames from 'classnames';
import dayjs from 'dayjs';
import React from 'react';

import { changShow } from '@/redux/slices/showNav';
import { siteTitle } from '@/utils/constants';
import useTop from '@/utils/hooks/useTop';

import Card from '../Card';
import LayoutLoading from '../LayoutLoading';
import PageTitle from '../PageTitle';
import s from './index.scss';

interface Props {
  title?: string;
  className?: string;
  loading?: boolean;
  isPost?: boolean;
  classes?: string;
  date?: number;
  rows?: number;
}

const Layout: React.FC<Props> = ({
  title,
  className,
  loading,
  children,
  classes,
  date,
  isPost = false,
  rows
}) => {
  useTitle(`${siteTitle} | ${title || ''}`);
  useTop(changShow);

  return (
    <>
      <PageTitle title={title} className={classNames({ [s.postTitle]: isPost })}>
        {isPost && (
          <div>
            <span className={s.articleClass}>{classes}</span>
            <span className={s.articleDate}>
              {dayjs(date).format('YYYY-MM-DD HH:mm:ss')}
            </span>
          </div>
        )}
      </PageTitle>
      <Card isStatic={true} className={classNames(s.layoutCard, className)}>
        {loading ? <LayoutLoading rows={rows} /> : children}
      </Card>
    </>
  );
};

export default Layout;
