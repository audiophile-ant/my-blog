import { useSafeState } from 'ahooks';
import { PieChart } from 'echarts/charts';
import { LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectTimeOfDay } from '@/redux/selectors';

import { ClassType } from '../index';
import s from './index.scss';
import { useOption } from './useOption';

interface Props {
  classes?: ClassType[];
  artSum?: number;
  mode?: number;
}

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
]);

const Chart: React.FC<Props> = ({ classes, artSum }) => {

  const [timeIndex, setTimeIndex] = useSafeState(0)

  const time = useSelector(selectTimeOfDay)

  useEffect(() => {
    switch (time) {
      case 'am': setTimeIndex(0); break;
      case 'pm': setTimeIndex(1); break;
      case 'dark': setTimeIndex(2); break;
      default: setTimeIndex(0); break;
    }
  },[time])

  const option = useOption(classes!, artSum!, timeIndex);

  

  return (
    <div className={s.box}>
      <h3>📊文章分布</h3>
      <ReactEChartsCore
        style={{
          height: '400px'
        }}
        echarts={echarts}
        option={option}
        notMerge={true}
        lazyUpdate={true}
        theme='theme_name'
      />
    </div>
  );
};

export default Chart
