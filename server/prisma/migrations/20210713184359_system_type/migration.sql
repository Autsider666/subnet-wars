-- CreateEnum
CREATE TYPE "SystemType" AS ENUM ('NPC', 'PLAYER');

-- AlterTable
ALTER TABLE "System" ADD COLUMN     "systemType" "SystemType" NOT NULL DEFAULT E'NPC';
