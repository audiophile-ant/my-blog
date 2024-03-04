import classNames from 'classnames';
import React from 'react';

import styles from './index.scss';

interface Props {
  title?: string;
  desc?: string;
  className?: string;
}

const PageTitle: React.FC<Props> = ({ title, desc, className, children }) => {
  return (
    <div className={classNames(styles.box, className)}>
      <div className={styles.title}>{title}</div>
      {desc && <div className={styles.desc}>{desc}</div>}
      {children}
    </div>
  );
};

export default PageTitle;
