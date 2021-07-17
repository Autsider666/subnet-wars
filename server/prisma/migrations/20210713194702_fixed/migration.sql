/*
  Warnings:

  - You are about to drop the column `walletkCurrency` on the `System` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ScriptType" AS ENUM ('ATTACK', 'BANKING', 'FTP', 'HTTP');

-- AlterTable
ALTER TABLE "File" ADD COLUMN     "id" SERIAL NOT NULL,
ADD PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "System" DROP COLUMN "walletkCurrency",
ADD COLUMN     "walletCurrency" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Port" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "systemIp" TEXT NOT NULL,
    "scriptId" INTEGER,
    "health" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Script" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "baseCpu" INTEGER NOT NULL,
    "scriptType" "ScriptType" NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Port.systemIp_number_unique" ON "Port"("systemIp", "number");

-- AddForeignKey
ALTER TABLE "Port" ADD FOREIGN KEY ("systemIp") REFERENCES "System"("ip") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Port" ADD FOREIGN KEY ("scriptId") REFERENCES "Script"("id") ON DELETE SET NULL ON UPDATE CASCADE;
