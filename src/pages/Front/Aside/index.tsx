import React from 'react';

import AccountCard from './AccountCard';
import BlogCard from './BlogCard';
import ClockCard from './ClockCard';
import DataCard from './DataCard';
import styles from './index.scss';
import SiteCard from './SiteCard';

const Aside: React.FC = () => {
  return (
    <aside className={styles.aside}>
      <BlogCard />
      <AccountCard />
      <DataCard />
      <ClockCard />
      <div className={styles.cardSticky}>
        <SiteCard />
      </div>
    </aside>
  );
};

export default Aside;
