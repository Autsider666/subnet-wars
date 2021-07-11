import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { File } from '@prisma/client';

const programs: { [id: string]: string } = {
  FileExplorer: 'File Explorer',
  Attacker: 'Attacker',
  NetworkScanner: 'Network Scanner',
};

const directories = ['/desktop/', '/startMenu/'];

const generateDefaultFiles = (systemIp: string = undefined): File[] => {
  const files: File[] = [];
  Object.keys(programs).forEach((program) => {
    directories.forEach((directory) => {
      files.push({
        path: directory + programs[program] + '.uri',
        content: program,
        systemIp,
      });
    });
  });
  return files;
};

const database = new PrismaClient();
database.$use(async (params, next) => {
  if (params.model === 'User' && (params.action === 'create' || params.action === 'update')) {
    params.args.data.password = await bcrypt.hash(params.args.data.password, 10);
  }

  if (params.model === 'System' && params.action === 'create') {
    params.args.data.files = { create: generateDefaultFiles() };
  }

  return next(params);
});

export default database;
