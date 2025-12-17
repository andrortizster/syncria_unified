-- DropForeignKey
ALTER TABLE "public"."cities" DROP CONSTRAINT "cities_country_id_fkey";

-- AlterTable
ALTER TABLE "public"."cities" ALTER COLUMN "country_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."cities" ADD CONSTRAINT "cities_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "public"."countries"("id") ON DELETE SET NULL ON UPDATE CASCADE;
