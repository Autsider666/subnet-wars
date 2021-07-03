export const pxToNum = (value: string | number = 0): number => {
  if (typeof value !== 'string') return value;
  const matchedValue = value.match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/);
  return matchedValue ? parseFloat(value) : Number(value);
};
