import ReactApexChart from 'react-apexcharts';

const CircleChart = () => {
  return (
    <ReactApexChart
      options={{
        stroke: {
          width: 8,
        },
        chart: {
          width: 380,
          type: 'pie',
        },
        colors: ['#7EB6F7', '#F7931A', '#2E2E2E'],
        labels: ['TRON', 'ETH', 'BTC'],
        plotOptions: {
          pie: {
            expandOnClick: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
      }}
      series={[42, 31, 27]}
      type='pie'
    />
  );
};

export default CircleChart;
