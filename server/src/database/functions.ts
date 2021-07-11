import { System } from '@prisma/client';
import database from './index';
import { randomIp } from '../helpers/ipv4Generator';

export const generateSystem = async (subnet = '192.168.0.0', mask = 16): Promise<System> => {
  let system: System = null;
  while (system === null) {
    const ip = randomIp(subnet, mask);
    if (!(await database.system.findFirst({ where: { ip } }))) {
      system = await database.system.create({ data: { ip } });
      break;
    }
  }
  return system;
};

export const createUser = async (username: string, password: string): Promise<void> => {
  const system = await generateSystem();
  await database.user.create({ data: { username, password, systemIp: system.ip } });
};
