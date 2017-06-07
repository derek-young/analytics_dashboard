import React from 'react';

import appStyles from '../appStyles.css';
import overviewStyles from './overviewStyles.css';

import Controls from './Controls/Controls';
import AnalyticsView from './AnalyticsView/AnalyticsView';
import ChartsView from './Charts/ChartsView';

const Overview = () => (
  <div className={appStyles.content + ' ' + overviewStyles.main}>
    <h2 className={overviewStyles.header}>
      Retail Packet Sniffer Dashboard
    </h2>
    <Controls />
    <AnalyticsView />
    <ChartsView />
  </div>
);

export default Overview;
