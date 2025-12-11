-- DropForeignKey
ALTER TABLE "public"."countries" DROP CONSTRAINT "countries_currency_id_fkey";

-- AlterTable
ALTER TABLE "public"."countries" ALTER COLUMN "currency_id" DROP NOT NULL,
ALTER COLUMN "order" DROP NOT NULL,
ALTER COLUMN "requiresCookieConsent" SET DEFAULT false,
ALTER COLUMN "ticketEnabled" SET DEFAULT false,
ALTER COLUMN "topCountry" SET DEFAULT false,
ALTER COLUMN "urlCode" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."countries" ADD CONSTRAINT "countries_currency_id_fkey" FOREIGN KEY ("currency_id") REFERENCES "public"."currencies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
