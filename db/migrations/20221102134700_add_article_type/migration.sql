/*
  Warnings:

  - You are about to drop the column `type` on the `Article` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "type",
ADD COLUMN     "typeId" INTEGER;

-- CreateTable
CREATE TABLE "ArticleType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ArticleType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ArticleType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

INSERT INTO "ArticleType" (id, name) VALUES
  (0, 'OPEN'),
  (1, 'CLOSE');
