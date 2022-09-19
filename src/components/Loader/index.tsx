import { memo } from 'react';

import Lottie from 'react-lottie';

import Loading from 'assets/animations/loading.json';

import { Container } from './styles';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Loading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Loader: React.FC = () => {
  return (
    <Container>
      <Lottie options={defaultOptions} height={300} width={300} />
    </Container>
  );
};

export default memo(Loader);
