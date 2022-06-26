do $$
begin
  create function auth.uid()
  returns uuid
  language sql stable
  as 'select extensions.uuid_generate_v1()::uuid';

  exception
    when duplicate_function then
    null;
end $$;


ALTER TABLE persons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile."
  ON persons for SELECT
  USING ( auth.uid() = id );

CREATE POLICY "Users can insert their own profile."
  ON persons for INSERT
  WITH CHECK ( auth.uid() = id );

CREATE POLICY "Users can update own profile."
  ON persons for UPDATE
  USING ( auth.uid() = id );