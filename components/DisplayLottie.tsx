import LottieAnimation from 'lottie-animation';
import React, {  } from 'react';

type Props = {
  animationPath: string;
};


const DisplayLottie = ({ animationPath }: Props) => {
  return (
    <LottieAnimation
      animationPath={animationPath}
      loop={true}
      autoplay={true}
    />
  );
};

export default DisplayLottie;
