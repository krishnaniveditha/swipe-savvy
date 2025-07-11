/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Account` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");
