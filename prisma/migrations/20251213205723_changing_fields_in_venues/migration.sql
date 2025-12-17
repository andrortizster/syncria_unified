/*
  Warnings:

  - You are about to drop the column `logoUrl` on the `venues` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."venues" DROP COLUMN "logoUrl",
ADD COLUMN     "logo_url" TEXT;
