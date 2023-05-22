import classNames from 'classnames';
import React from 'react';
export interface IStep {
  id: number;
  label: string;
}

interface IStepsProps {
  steps: IStep[];
  currentStepId: number;
}

const Steps: React.FC<IStepsProps> = ({ steps, currentStepId }) => {
  return (
    <div className='lg:flex flex-col h-screen items-start relative w-full pr-8 pt-[90px]'>
      {steps.map(({ id, label }, index) => (
        <div
          className='flex flex-col items-start justify-center gap-3 py-2 text-white'
          key={id}
        >
          <div>
            <span
              className={classNames(' rounded-full px-3 border-4', {
                'bg-light-blue  border-white': currentStepId === id,
                'bg-light-blue  border-light-blue ': currentStepId < id,
                'bg-white border-white ': currentStepId > id,
              })}
            ></span>
            <span
              className={classNames(
                'pr-4 text-[10px] md:text-xs lg:text-base whitespace-nowrap',
                {
                  'opacity-40': currentStepId < id,
                }
              )}
            >
              {label}
            </span>
          </div>
          {index + 1 !== steps.length && (
            <span className='border border-white px-0 py-4 mr-4' />
          )}
        </div>
      ))}
      {/* <span
        className={classNames('border border-white px-0 py-8  mr-4')}
      ></span> */}
    </div>
  );
};
export default Steps;
