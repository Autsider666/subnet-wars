import { System } from '@prisma/client';
import database from './index';
import { randomIp } from '../helpers/ipv4Generator';

export const generateSystem = async (subnet = '192.168.0.0', mask = 16): Promise<System> =>
  await database.system.create({ data: { ip: randomIp(subnet, mask) } });
