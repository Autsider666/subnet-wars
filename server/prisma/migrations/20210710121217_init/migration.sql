-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "systemIp" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "System" (
    "ip" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fileSystem" JSONB NOT NULL DEFAULT E'{}',

    PRIMARY KEY ("ip")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.username_unique" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_systemIp_unique" ON "User"("systemIp");

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("systemIp") REFERENCES "System"("ip") ON DELETE CASCADE ON UPDATE CASCADE;
