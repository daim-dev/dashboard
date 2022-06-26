-- migrate:up
CREATE TABLE "projects" (
    "id" UUID NOT NULL DEFAULT extensions.uuid_generate_v1(),
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "organizationId" UUID NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- migrate:down
DROP TABLE "projects";