-- AlterTable
ALTER TABLE "public"."events" ADD COLUMN     "accesibility" TEXT,
ADD COLUMN     "age_requirements" TEXT,
ADD COLUMN     "date_range" TEXT,
ADD COLUMN     "discount_label" TEXT,
ADD COLUMN     "discounted_price" TEXT,
ADD COLUMN     "duration" TEXT,
ADD COLUMN     "event_url" TEXT,
ADD COLUMN     "image_url" TEXT,
ADD COLUMN     "original_price" TEXT,
ADD COLUMN     "rating" DOUBLE PRECISION,
ADD COLUMN     "reviews_count" INTEGER;
