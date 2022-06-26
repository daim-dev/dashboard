-- Deploy daim-dashboard:persons to pg

BEGIN;

CREATE TABLE "persons" (
    "id" UUID NOT NULL DEFAULT extensions.uuid_generate_v1(),
    "givenName" TEXT NOT NULL,
    "familyName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "persons_pkey" PRIMARY KEY ("id")
);

COMMIT;
