-- AlterTable
ALTER TABLE "public"."events" ADD COLUMN     "area_id" INTEGER;

-- AddForeignKey
ALTER TABLE "public"."events" ADD CONSTRAINT "events_area_id_fkey" FOREIGN KEY ("area_id") REFERENCES "public"."areas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
