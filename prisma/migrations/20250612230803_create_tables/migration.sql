-- CreateTable
CREATE TABLE "cadastroDev" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "techs" TEXT[],
    "github_url" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cadastroDev_pkey" PRIMARY KEY ("id")
);
