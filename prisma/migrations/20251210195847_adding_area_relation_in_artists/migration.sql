-- AlterTable
ALTER TABLE "public"."artists" ADD COLUMN     "area_id" INTEGER;

-- AddForeignKey
ALTER TABLE "public"."artists" ADD CONSTRAINT "artists_area_id_fkey" FOREIGN KEY ("area_id") REFERENCES "public"."areas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
