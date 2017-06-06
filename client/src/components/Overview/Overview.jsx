import React from 'react';

import overviewStyles from './overviewStyles.css';

import Controls from './Analytics/Controls/Controls';
import AnalyticsView from './Analytics/AnalyticsView/AnalyticsView';
import ChartsView from './Analytics/Charts/ChartsView';

const Overview = () => (
  <div className={overviewStyles.main}>
    <h2 className={overviewStyles.header}>
      Retail Packet Sniffer Dashboard
    </h2>
    <Controls />
    <AnalyticsView />
    <ChartsView />
  </div>
);

export default Overview;
