import classNames from 'classnames';
import Image, { ImageProps } from 'next/image';
import React from 'react';

const BlurImage = ({ src, ...props }: ImageProps) => {
  const [isLoading, setLoading] = React.useState(true);

  return (
    <Image
      {...props}
      src={src}
      objectFit='cover'
      className={classNames(
        'duration-700 ease-in-out',
        isLoading
          ? 'grayscale blur-2xl scale-110'
          : 'grayscale-0 blur-0 scale-100'
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};

export default BlurImage;
