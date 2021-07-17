/*
  Warnings:

  - You are about to drop the `SystemWithHardware` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SystemWithHardware" DROP CONSTRAINT "SystemWithHardware_hardwareName_fkey";

-- DropForeignKey
ALTER TABLE "SystemWithHardware" DROP CONSTRAINT "SystemWithHardware_systemIp_fkey";

-- DropTable
DROP TABLE "SystemWithHardware";

-- CreateTable
CREATE TABLE "_HardwareToSystem" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_HardwareToSystem_AB_unique" ON "_HardwareToSystem"("A", "B");

-- CreateIndex
CREATE INDEX "_HardwareToSystem_B_index" ON "_HardwareToSystem"("B");

-- AddForeignKey
ALTER TABLE "_HardwareToSystem" ADD FOREIGN KEY ("A") REFERENCES "Hardware"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HardwareToSystem" ADD FOREIGN KEY ("B") REFERENCES "System"("ip") ON DELETE CASCADE ON UPDATE CASCADE;
