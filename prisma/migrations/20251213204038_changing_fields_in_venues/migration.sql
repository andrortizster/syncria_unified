/*
  Warnings:

  - You are about to drop the column `contentUrl` on the `venues` table. All the data in the column will be lost.
  - You are about to drop the column `eventCountThisYear` on the `venues` table. All the data in the column will be lost.
  - You are about to drop the column `followerCount` on the `venues` table. All the data in the column will be lost.
  - You are about to drop the column `isClosed` on the `venues` table. All the data in the column will be lost.
  - You are about to drop the column `isFollowing` on the `venues` table. All the data in the column will be lost.
  - You are about to drop the column `raSays` on the `venues` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."venues" DROP COLUMN "contentUrl",
DROP COLUMN "eventCountThisYear",
DROP COLUMN "followerCount",
DROP COLUMN "isClosed",
DROP COLUMN "isFollowing",
DROP COLUMN "raSays",
ADD COLUMN     "content_url" TEXT,
ADD COLUMN     "event_count_this_year" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "follower_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "is_closed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_following" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "ra_says" BOOLEAN NOT NULL DEFAULT false;
