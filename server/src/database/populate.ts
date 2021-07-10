import { generateSystem } from './functions';
import database from './index';

export default async () => {
    let systemCount = await database.system.count();
    while (systemCount < 10) {
        await generateSystem();
        ++systemCount;
    }
}