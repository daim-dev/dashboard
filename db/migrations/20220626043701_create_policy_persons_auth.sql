-- migrate:up
ALTER TABLE persons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile."
  ON persons FOR SELECT
  USING ( auth.uid() = id );

CREATE POLICY "Users can insert their own profile."
  ON persons FOR INSERT
  WITH CHECK ( auth.uid() = id );

CREATE POLICY "Users can update own profile."
  ON persons FOR UPDATE
  USING ( auth.uid() = id );

-- migrate:down
