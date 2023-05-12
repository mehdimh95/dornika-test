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
    <div className='flex flex-col h-screen items-start relative'>
      {steps.map(({ id, label }) => (
        <div className='flex items-center justify-center gap-6 py-2 text-white'>
          <span
            className={classNames(' rounded-full p-3  border-4', {
              'bg-light-blue  border-white': currentStepId === id,
              'bg-light-blue  border-light-blue ': currentStepId < id,
              'bg-white border-white ': currentStepId > id,
            })}
          ></span>
          <span
            className={classNames({
              'opacity-40': currentStepId < id,
            })}
          >
            {label}
          </span>
        </div>
      ))}

      <span className='border border-white px-0 py-8  mr-4'></span>
    </div>
  );
};
export default Steps;
