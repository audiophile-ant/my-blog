import React from 'react';

import Card from '@/components/Card';

import IcoBtn from './IcoBtn';
import styles from './index.scss';
import { useAccount } from './useAccount';

const AccountCard: React.FC = () => {
  const accounts = useAccount();

  return (
    <Card className={styles.card}>
      {accounts.map(({ isLink, link, ico, content }, index) => (
        <IcoBtn isLink={isLink} link={link} content={content} key={index}>
          {ico}
        </IcoBtn>
      ))}
    </Card>
  );
};

export default AccountCard;
