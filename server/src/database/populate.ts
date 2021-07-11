import { createUser, generateSystem } from './functions';
import database from './index';

export default async (): Promise<void> => {
  let systemCount = await database.system.count();
  while (systemCount < 10) {
    await generateSystem();
    ++systemCount;
  }

  if ((await database.user.count()) < 1) {
    await createUser('yorick', 'test');
  }
};
