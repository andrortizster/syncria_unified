/*
  Warnings:

  - You are about to drop the column `isFollowing` on the `artists` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."artists" DROP COLUMN "isFollowing",
ADD COLUMN     "is_following" BOOLEAN NOT NULL DEFAULT false;
