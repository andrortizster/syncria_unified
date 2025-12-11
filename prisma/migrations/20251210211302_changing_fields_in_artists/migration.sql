/*
  Warnings:

  - You are about to drop the column `firstName` on the `artists` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `artists` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."artists" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "first_name" TEXT,
ADD COLUMN     "last_name" TEXT;
