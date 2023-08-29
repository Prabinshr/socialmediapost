-- AlterTable
ALTER TABLE "Comments" ADD COLUMN     "postsId" INTEGER;

-- AlterTable
ALTER TABLE "Likes" ADD COLUMN     "postsId" INTEGER;

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_postsId_fkey" FOREIGN KEY ("postsId") REFERENCES "Posts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_postsId_fkey" FOREIGN KEY ("postsId") REFERENCES "Posts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
