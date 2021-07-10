const lon2ip = (lon: number): string => {
  return [lon >>> 24, (lon >> 16) & 255, (lon >> 8) & 255, lon & 255].join('.');
};

const ip2lon = (address: string): number => {
  let result = 0;

  address.split('.').forEach((octet) => {
    result <<= 8;
    result += parseInt(octet, 10);
  });

  return result >>> 0;
};

export const randomIp = (subnet: string, mask: number): string => {
  const randomIp = Math.floor(Math.random() * 2 ** (32 - mask)) + 1;

  return lon2ip(ip2lon(subnet) | randomIp);
};
