import dynamic from 'next/dynamic';
import React from 'react';

const SliderItem = dynamic(() => import('../slider/SliderItem'), {
  ssr: false,
});

const AreaChart = ({
  isNavOpen,
  setIsNavOpen,
}: {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className='hidden md:flex flex-row gap-x-4 whitespace-nowrap'>
      <SliderItem
        {...{
          options: {
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: 'smooth',
              colors: ['#2AC479'],
            },
            chart: {
              events: {
                mounted: (chart) => {
                  chart.windowResizeHandler();
                },
              },
              toolbar: {
                show: false,
              },
              zoom: {
                enabled: false,
              },
            },
            grid: {
              show: false,
            },
            fill: {
              type: 'gradient',
              colors: ['#2AC479'],
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.4,
                stops: [20],
              },
            },
            xaxis: {
              labels: {
                show: false,
              },
            },
            yaxis: {
              show: false,
            },
          },
          series: [
            {
              name: 'series1',
              data: [10, 20, 30, 40, 50, 60, 70],
            },
          ],
        }}
      />
      <SliderItem
        {...{
          options: {
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: 'smooth',
              colors: ['#219ebc'],
            },
            chart: {
              redrawOnParentResize: isNavOpen,
              toolbar: {
                show: false,
              },
              zoom: {
                enabled: false,
              },
            },
            grid: {
              show: false,
            },
            fill: {
              type: 'gradient',
              colors: ['#219ebc'],
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.4,
                stops: [20],
              },
            },
            xaxis: {
              labels: {
                show: false,
              },
            },
            yaxis: {
              show: false,
            },
          },
          series: [
            {
              name: 'series1',
              data: [80, 40, 60, 10, 40, 50, 60],
            },
          ],
        }}
      />
      <SliderItem
        {...{
          options: {
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: 'smooth',
              colors: ['#f782c2'],
            },
            chart: {
              redrawOnParentResize: isNavOpen,
              toolbar: {
                show: false,
              },
              zoom: {
                enabled: false,
              },
            },
            grid: {
              show: false,
            },
            fill: {
              type: 'gradient',
              colors: ['#f782c2'],
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.4,
                stops: [20],
              },
            },
            xaxis: {
              labels: {
                show: false,
              },
            },
            yaxis: {
              show: false,
            },
          },
          series: [
            {
              name: 'series1',
              data: [14, 40, 60, 32, 40, 90, 80],
            },
          ],
        }}
      />
      <SliderItem
        {...{
          options: {
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: 'smooth',
              colors: ['#f56038'],
            },
            chart: {
              redrawOnParentResize: isNavOpen,
              toolbar: {
                show: false,
              },
              zoom: {
                enabled: false,
              },
            },
            grid: {
              show: false,
            },
            fill: {
              type: 'gradient',
              colors: ['#f56038'],
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.4,
                stops: [20],
              },
            },
            xaxis: {
              labels: {
                show: false,
              },
            },
            yaxis: {
              show: false,
            },
          },
          series: [
            {
              name: 'series1',
              data: [50, 40, 60, 50, 40, 50, 60],
            },
          ],
        }}
      />
    </div>
  );
};

export default AreaChart;
