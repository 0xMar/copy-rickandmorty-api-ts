import { css, keyframes, SimpleInterpolation } from 'styled-components';

interface AnimationProps {
  timeRotate?: string;
  timeDeg?: string;
  type?: string;
}

const rotateKeyFrame = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const degRotateFrame = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const animation = ({
  timeRotate = '1s',
  timeDeg = '2s',
  type = 'linear infinite',
}: AnimationProps): SimpleInterpolation =>
  css`
    animation: ${rotateKeyFrame} ${timeRotate},
      ${degRotateFrame} ${timeDeg} ${type};
  `;
