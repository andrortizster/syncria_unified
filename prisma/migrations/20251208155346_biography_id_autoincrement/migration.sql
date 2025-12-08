-- AlterTable
CREATE SEQUENCE "public".biography_id_seq;
ALTER TABLE "public"."biography" ALTER COLUMN "id" SET DEFAULT nextval('"public".biography_id_seq');
ALTER SEQUENCE "public".biography_id_seq OWNED BY "public"."biography"."id";
