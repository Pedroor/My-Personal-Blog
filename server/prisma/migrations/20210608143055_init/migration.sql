/*
  Warnings:

  - You are about to drop the column `publised` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "publised",
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false;
