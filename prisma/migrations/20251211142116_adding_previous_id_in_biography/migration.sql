/*
  Warnings:

  - A unique constraint covering the columns `[previous_id]` on the table `biography` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."biography" ADD COLUMN     "previous_id" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "biography_previous_id_key" ON "public"."biography"("previous_id");
