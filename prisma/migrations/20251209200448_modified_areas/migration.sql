/*
  Warnings:

  - A unique constraint covering the columns `[url_name]` on the table `areas` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `url_name` to the `areas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."areas" ADD COLUMN     "blurb" TEXT,
ADD COLUMN     "events_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "guide_image_url" TEXT,
ADD COLUMN     "iana_time_zone" TEXT,
ADD COLUMN     "isCountry" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "population" INTEGER,
ADD COLUMN     "url_name" TEXT NOT NULL,
ADD COLUMN     "venues_count" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "areas_url_name_key" ON "public"."areas"("url_name");
