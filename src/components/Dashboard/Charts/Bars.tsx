import ReactApexChart from 'react-apexcharts';

const Bars = () => {
  return (
    <ReactApexChart
      height={200}
      options={{
        chart: {
          type: 'bar',
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['transparent'],
        },
        xaxis: {
          labels: {
            show: false,
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            type: 'vertical',
            gradientToColors: ['#00E396', 'transparent'],
            stops: [0, 100],
          },
        },
      }}
      series={[
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
      ]}
      type='bar'
    />
  );
};

export default Bars;
