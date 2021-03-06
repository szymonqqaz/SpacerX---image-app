import { css } from 'styled-components';

export const sizes = {
  fullHd: 1500,
  desktop: 950,
  tablet: 720,
  phone: 400,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc
}, {});