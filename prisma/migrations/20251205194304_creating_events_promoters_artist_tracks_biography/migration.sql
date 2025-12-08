/*
  Warnings:

  - Added the required column `currency_id` to the `countries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `countries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requiresCookieConsent` to the `countries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticketEnabled` to the `countries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topCountry` to the `countries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlCode` to the `countries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."countries" ADD COLUMN     "currency_id" INTEGER NOT NULL,
ADD COLUMN     "order" INTEGER NOT NULL,
ADD COLUMN     "requiresCookieConsent" BOOLEAN NOT NULL,
ADD COLUMN     "ticketEnabled" BOOLEAN NOT NULL,
ADD COLUMN     "topCountry" BOOLEAN NOT NULL,
ADD COLUMN     "urlCode" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."currencies" (
    "id" SERIAL NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "currencies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."biography" (
    "id" INTEGER NOT NULL,
    "blurb" TEXT,
    "content" TEXT,
    "discography" TEXT,

    CONSTRAINT "biography_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."artists" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "image" TEXT,
    "image_url" TEXT,
    "description" TEXT,
    "url" TEXT,
    "url_safe_name" TEXT,
    "booking_details" TEXT,
    "aliases" TEXT,
    "pronouns" TEXT,
    "facebook" TEXT,
    "instagram" TEXT,
    "twitter" TEXT,
    "soundcloud" TEXT,
    "discogs" TEXT,
    "bandcamp" TEXT,
    "website" TEXT,
    "status" TEXT,
    "listing_item_id" INTEGER,
    "index" TEXT,
    "cover_image" TEXT,
    "content_url" TEXT,
    "follower_count" INTEGER,
    "isFollowing" BOOLEAN NOT NULL,
    "upcoming_events_count" INTEGER,
    "view_count" INTEGER,
    "biography_id" INTEGER,

    CONSTRAINT "artists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."events" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "venue_id" INTEGER NOT NULL,
    "price" TEXT,
    "link" TEXT,
    "image" TEXT,
    "tag" TEXT,
    "description" TEXT,
    "currency_id" INTEGER DEFAULT 5,
    "live" BOOLEAN NOT NULL DEFAULT true,
    "capacity" TEXT NOT NULL,
    "address" TEXT,
    "phone" TEXT,
    "ra_says" BOOLEAN NOT NULL DEFAULT false,
    "tba" BOOLEAN NOT NULL DEFAULT false,
    "is_closed" BOOLEAN NOT NULL DEFAULT false,
    "website" TEXT,
    "photo" TEXT,
    "content_url" TEXT,
    "logo_url" TEXT,
    "is_following" BOOLEAN NOT NULL DEFAULT false,
    "follower_count" INTEGER,
    "event_count_this_year" INTEGER,
    "title" TEXT,
    "start_time" TEXT,
    "end_time" TEXT,
    "time" TEXT,
    "cost" TEXT,
    "is_festival" BOOLEAN NOT NULL,
    "date_updated" TIMESTAMP(3),
    "content" TEXT,
    "minimum_age" INTEGER,
    "is_ticketed" BOOLEAN NOT NULL DEFAULT false,
    "hide_from_listings" BOOLEAN NOT NULL DEFAULT false,
    "index" TEXT,
    "new_event_form" BOOLEAN NOT NULL DEFAULT false,
    "date_posted" TIMESTAMP(3),
    "date_created" TIMESTAMP(3),
    "submission_source" TEXT,
    "ticket_fee_type" TEXT,
    "approval_status" TEXT,
    "visibility" TEXT,
    "ticketing_system" TEXT,
    "flyer_front" TEXT,
    "flyer_back" TEXT,
    "embargo_date" TIMESTAMP(3),
    "listing_item_id" INTEGER,
    "auto_approved" BOOLEAN NOT NULL DEFAULT false,
    "promoter_id" INTEGER,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."event_artists" (
    "artist_id" INTEGER NOT NULL,
    "event_id" INTEGER NOT NULL,

    CONSTRAINT "event_artists_pkey" PRIMARY KEY ("artist_id","event_id")
);

-- CreateTable
CREATE TABLE "public"."tracks" (
    "id" SERIAL NOT NULL,
    "image_url" TEXT,
    "title" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "bpm" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "released" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "tracks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."artists_tracks" (
    "artist_id" INTEGER NOT NULL,
    "track_id" INTEGER NOT NULL,

    CONSTRAINT "artists_tracks_pkey" PRIMARY KEY ("artist_id","track_id")
);

-- CreateTable
CREATE TABLE "public"."promoters" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "blurb" TEXT,
    "is_festival" BOOLEAN NOT NULL DEFAULT false,
    "live" BOOLEAN NOT NULL DEFAULT false,
    "hasCover" BOOLEAN NOT NULL DEFAULT false,
    "has_ticket_access" BOOLEAN NOT NULL DEFAULT false,
    "venue_id" INTEGER,
    "website" TEXT,
    "facebook" TEXT,
    "instagram" TEXT,
    "twitter" TEXT,
    "terms_agreement" BOOLEAN NOT NULL DEFAULT false,
    "listing_item_id" INTEGER,
    "index" TEXT,
    "email" TEXT,
    "cover_url" TEXT,
    "logo_url" TEXT,
    "content_url" TEXT,
    "follower_count" INTEGER,
    "upcoming_events_count" INTEGER,
    "is_following" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "promoters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."countries" ADD CONSTRAINT "countries_currency_id_fkey" FOREIGN KEY ("currency_id") REFERENCES "public"."currencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."artists" ADD CONSTRAINT "artists_biography_id_fkey" FOREIGN KEY ("biography_id") REFERENCES "public"."biography"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."events" ADD CONSTRAINT "events_venue_id_fkey" FOREIGN KEY ("venue_id") REFERENCES "public"."venues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."events" ADD CONSTRAINT "events_currency_id_fkey" FOREIGN KEY ("currency_id") REFERENCES "public"."currencies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."events" ADD CONSTRAINT "events_promoter_id_fkey" FOREIGN KEY ("promoter_id") REFERENCES "public"."promoters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."event_artists" ADD CONSTRAINT "event_artists_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "public"."artists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."event_artists" ADD CONSTRAINT "event_artists_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."artists_tracks" ADD CONSTRAINT "artists_tracks_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "public"."artists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."artists_tracks" ADD CONSTRAINT "artists_tracks_track_id_fkey" FOREIGN KEY ("track_id") REFERENCES "public"."tracks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."promoters" ADD CONSTRAINT "promoters_venue_id_fkey" FOREIGN KEY ("venue_id") REFERENCES "public"."venues"("id") ON DELETE SET NULL ON UPDATE CASCADE;
