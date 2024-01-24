import React from 'react';
import { InfinitySpin } from 'react-loader-spinner'

import s from './index.scss'

const Loading: React.FC = () => {
  return (
    <div className={s.loadingBox}>
      <InfinitySpin
        width="200"
        color="#36a9b4"
      />
    </div>
  )
}

export default Loading