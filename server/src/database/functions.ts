import database from './index';
import { randomIp } from '../helpers/ipv4Generator';

export const generateSystem = async (subnet: string = '192.168.0.0', mask: number = 16) =>
    await database.system.create({data: {ip: randomIp(subnet, mask)}})