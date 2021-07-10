import { PrismaClient, System } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { File } from '@prisma/client';

const generateDefaultFiles = (system: System): File[] => [
  {
    path: '/desktop/Network Scanner.uri',
    content: 'NetworkScanner',
    systemIp: system.ip,
  },
  {
    path: '/startMenu/Network Scanner.uri',
    content: 'NetworkScanner',
    systemIp: system.ip,
  },
];

const database = new PrismaClient();
database.$use(async (params, next) => {
  if (params.model === 'User' && (params.action === 'create' || params.action === 'update')) {
    params.args.data.password = await bcrypt.hash(params.args.data.password, 10);
  }

  if (params.model === 'System' && params.action === 'create') {
    params.args.data.files = { create: generateDefaultFiles(params.args.data.ip) };
  }

  return next(params);
});

export default database;
