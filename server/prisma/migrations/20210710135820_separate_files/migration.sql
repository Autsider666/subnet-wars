/*
  Warnings:

  - You are about to drop the column `fileSystem` on the `System` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "System" DROP COLUMN "fileSystem";

-- CreateTable
CREATE TABLE "File" (
    "systemIp" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "content" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "File.systemIp_path_unique" ON "File"("systemIp", "path");

-- AddForeignKey
ALTER TABLE "File" ADD FOREIGN KEY ("systemIp") REFERENCES "System"("ip") ON DELETE CASCADE ON UPDATE CASCADE;
