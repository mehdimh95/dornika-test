import Button from '@/components/Button/Button';
import { ArrowLeft } from '@/components/icons/arrowleft';
import classNames from 'classnames';
import Link from 'next/link';

export default function Footer({
  isPrevDisabled,
  isNextDisabled,
  nextButtonTable = 'مرحله بعد',
  prevHref,
}: {
  isPrevDisabled?: boolean;
  isNextDisabled?: boolean;
  nextButtonTable?: string;
  prevHref?: string;
}) {
  return (
    <div className='flex flex-row justify-between self-stretch items-end pt-8 bg-white border-t border-b-fade-gray rounded-bl-2xl'>
      {!!prevHref || !isPrevDisabled ? (
        <Link href={prevHref || ''}>
          <Button
            className={classNames(
              ' text-warm-blue w-44 bg-white py-3 px-6 rounded-xl flex flex-row items-center justify-center gap-5',
              { invisible: isPrevDisabled }
            )}
          >
            <span className='font-bold leading-6'>مرحله قبل</span>
          </Button>
        </Link>
      ) : (
        <div />
      )}

      <Button
        form='step1'
        disabled={isNextDisabled}
        className={
          ' bg-warm-blue w-44 text-white py-3 px-6 rounded-xl flex flex-row items-center justify-center gap-5'
        }
      >
        <span className='font-bold leading-6'>{nextButtonTable}</span>
        <ArrowLeft />
      </Button>
    </div>
  );
}
