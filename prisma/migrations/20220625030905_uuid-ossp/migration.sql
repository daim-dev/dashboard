-- Create extensions schema if not exists
CREATE SCHEMA IF NOT EXISTS extensions;

-- enable the "uuid-ossp" extension 
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA extensions;
