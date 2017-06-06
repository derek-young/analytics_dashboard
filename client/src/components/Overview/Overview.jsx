import React from 'react';

import overviewStyles from './overviewStyles.css';

console.log(window.innerWidth/2071)

const Overview = () => (
  <div className={overviewStyles.main}>
    <h2 className={overviewStyles.header}>
      Retail Packet Sniffer Dashboard
    </h2>
  </div>
);

export default Overview;
