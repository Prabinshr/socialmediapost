-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_postsId_fkey";

-- DropForeignKey
ALTER TABLE "Likes" DROP CONSTRAINT "Likes_postsId_fkey";

-- AlterTable
ALTER TABLE "Posts" ADD COLUMN     "likes" INTEGER DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_postsId_fkey" FOREIGN KEY ("postsId") REFERENCES "Posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_postsId_fkey" FOREIGN KEY ("postsId") REFERENCES "Posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
