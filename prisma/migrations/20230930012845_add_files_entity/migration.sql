-- CreateEnum
CREATE TYPE "FileTypeEnum" AS ENUM ('PLAIN_TEXT');

-- AlterTable
ALTER TABLE "folders" ADD COLUMN     "path" TEXT;

-- CreateTable
CREATE TABLE "files" (
    "id" TEXT NOT NULL,
    "type" "FileTypeEnum" NOT NULL,
    "title" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "folderId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_file_created_by_id" ON "files"("createdById");

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "folders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
