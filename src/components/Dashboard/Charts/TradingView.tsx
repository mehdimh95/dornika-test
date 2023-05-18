import dynamic from 'next/dynamic';
import React from 'react';

const AdvancedRealTimeChartNoSSR = dynamic(
  () =>
    import('react-ts-tradingview-widgets').then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const TradingView = () => {
  return (
    <AdvancedRealTimeChartNoSSR
      width='100%'
      theme='light'
      height={400}
      hide_side_toolbar
      hide_legend
      symbol='BTC'
      allow_symbol_change={false}
      locale='fa_IR'
    />
  );
};

export default React.memo(TradingView);
