import type { HardhatPlugin } from 'hardhat/types/plugins';
import { task } from 'hardhat/config';


const hardhatPlugin: HardhatPlugin = {
    id: 'fundme-deploy',
    tasks: [
        task('fundme-deploy', 'Deploy contracts')
            .setAction(() => import('./fundMeDp-ethers-task.ts'))
            .build(),
    ],
    npmPackage: 'fundme-deploy',
};

export default hardhatPlugin;