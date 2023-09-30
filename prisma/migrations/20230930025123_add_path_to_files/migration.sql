/*
  Warnings:

  - You are about to drop the column `path` on the `folders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "files" ADD COLUMN     "path" TEXT;

-- AlterTable
ALTER TABLE "folders" DROP COLUMN "path";
