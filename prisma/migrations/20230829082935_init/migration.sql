/*
  Warnings:

  - Made the column `postsId` on table `Likes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Likes" ALTER COLUMN "postsId" SET NOT NULL;
