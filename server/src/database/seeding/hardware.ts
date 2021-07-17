import { Hardware, HardwareType } from '@prisma/client';

export default (): Hardware[] => [
    {
        name: 'Polonium 500MHz',
        hardwareType: HardwareType.CPU,
        value: 50,
    },
    {
        name: 'Polonium 600MHz',
        hardwareType: HardwareType.CPU,
        value: 75,
    },
    {
        name: 'Polonium 800Mhz',
        hardwareType: HardwareType.CPU,
        value: 100,
    },
    {
        name: 'Polonium 1.4Ghz',
        hardwareType: HardwareType.CPU,
        value: 150,
    },
    {
        name: 'Polonium 2.2Ghz',
        hardwareType: HardwareType.CPU,
        value: 200,
    },
    {
        name: 'Polonium 3Ghz',
        hardwareType: HardwareType.CPU,
        value: 250,
    },
    {
        name: 'Polonium Dual 2.4 Ghz',
        hardwareType: HardwareType.CPU,
        value: 300,
    },
    {
        name: 'Ocean Gate 200MB',
        hardwareType: HardwareType.SSD,
        value: 15,
    },
    {
        name: 'Ocean Gate 250MB',
        hardwareType: HardwareType.SSD,
        value: 20,
    },
    {
        name: 'Ocean Gate 500MB',
        hardwareType: HardwareType.SSD,
        value: 30,
    },
    {
        name: 'Ocean Gate 1GB',
        hardwareType: HardwareType.SSD,
        value: 60,
    },
    {
        name: 'Ocean Gate 2GB',
        hardwareType: HardwareType.SSD,
        value: 90,
    },
    {
        name: 'Ocean Gate 4GB',
        hardwareType: HardwareType.SSD,
        value: 120,
    },
    {
        name: 'Kansas 32MB',
        hardwareType: HardwareType.MEMORY,
        value: 8,
    },
    {
        name: 'Kansas 64MB',
        hardwareType: HardwareType.MEMORY,
        value: 16,
    },
    {
        name: 'Kansas 128MB',
        hardwareType: HardwareType.MEMORY,
        value: 24,
    },
    {
        name: 'Kansas 256MB',
        hardwareType: HardwareType.MEMORY,
        value: 32,
    },
];