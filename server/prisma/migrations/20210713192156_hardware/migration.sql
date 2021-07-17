-- CreateEnum
CREATE TYPE "HardwareType" AS ENUM ('CPU', 'SSD', 'MEMORY');

-- AlterTable
ALTER TABLE "System" ADD COLUMN     "walletkCurrency" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bankCurrency" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Hardware" (
    "name" TEXT NOT NULL,
    "hardwareType" "HardwareType" NOT NULL,
    "value" INTEGER NOT NULL,

    PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "SystemWithHardware" (
    "hardwareName" TEXT NOT NULL,
    "systemIp" TEXT NOT NULL,

    PRIMARY KEY ("hardwareName","systemIp")
);

-- AddForeignKey
ALTER TABLE "SystemWithHardware" ADD FOREIGN KEY ("hardwareName") REFERENCES "Hardware"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SystemWithHardware" ADD FOREIGN KEY ("systemIp") REFERENCES "System"("ip") ON DELETE CASCADE ON UPDATE CASCADE;
