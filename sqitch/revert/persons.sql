-- Revert daim-dashboard:persons from pg

BEGIN;

DROP TABLE IF EXISTS "persons";

COMMIT;
