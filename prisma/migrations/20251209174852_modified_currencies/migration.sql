/*
  Warnings:

  - Added the required column `code` to the `currencies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exponent` to the `currencies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."currencies" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "exponent" INTEGER NOT NULL;
