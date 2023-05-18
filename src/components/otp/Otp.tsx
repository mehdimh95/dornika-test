import React, { FC, useEffect, useRef, useState } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  count?: number;
}

let currentOTPIndex: number = 0;

const OtpReact: FC<Props> = ({ count = 4, ...inputProps }) => {
  const [otp, setOtp] = useState<string[]>(
    inputProps.value
      ? inputProps.value.toString().split('')
      : new Array(count).fill('')
  );
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const newOTP: string[] = [...otp];
    newOTP[currentOTPIndex] = value.substring(value.length - 1);

    if (!value) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);
    // @ts-ignore: Unreachable code error
    inputProps.onChange(newOTP.join(''));
    setOtp(newOTP);
  };
  const handleOnKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOTPIndex = index;
    if (key === 'backspace') setActiveOTPIndex(index - 1);
    console.log(key);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  return (
    <div className='flex justify-center items-center gap-[10px]' dir='ltr'>
      {otp.map((_, index) => {
        return (
          <div key={index}>
            <input
              ref={index === activeOTPIndex ? inputRef : null}
              type='number'
              className='w-[60px] h-[60px] border-2 border-fade-gray rounded-2xl bg-white text-center text-black spine-button-none'
              onChange={handleOnChange}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
              value={otp[index]}
            />
            {index === otp.length - 1 ? null : (
              <span className='w-2 py-1 bg-orange-500'></span>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default OtpReact;
