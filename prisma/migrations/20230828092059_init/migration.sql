-- CreateTable
CREATE TABLE "Posts" (
    "id" SERIAL NOT NULL,
    "caption" TEXT,
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Likes" (
    "id" SERIAL NOT NULL,
    "liked" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "comment" TEXT,
    "parent_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
