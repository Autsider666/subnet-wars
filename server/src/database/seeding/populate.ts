import { Hardware } from '@prisma/client';
import getHardware from './hardware';
import { createUser, generateSystem } from '../functions';
import database from '../index';

export default async (): Promise<void> => {
    let systemCount = await database.system.count();
    while (systemCount < 10) {
        await generateSystem();
        ++systemCount;
    }

    if ((await database.user.count()) < 1) {
        await createUser('yorick', 'test');
    }

    const hardware: Hardware[] = getHardware();
    let hardwareCount = await database.hardware.count();
    if (hardwareCount < hardware.length) {
        await database.hardware.createMany({
            data: hardware.slice(hardwareCount)
        })
    }

};
