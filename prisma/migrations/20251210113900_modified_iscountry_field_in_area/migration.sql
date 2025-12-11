/*
  Warnings:

  - You are about to drop the column `isCountry` on the `areas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."areas" DROP COLUMN "isCountry",
ADD COLUMN     "is_country" BOOLEAN NOT NULL DEFAULT true;
