import { MAX_HEX_COLOR_VALUE } from './constants/color';

export const randomColor = () => {
  const hex = Math.floor(Math.random() * MAX_HEX_COLOR_VALUE).toString(16);
  return `#${hex.padStart(6, '0')}`;
};
