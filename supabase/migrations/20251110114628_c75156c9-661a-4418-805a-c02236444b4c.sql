-- Create download_stats table
CREATE TABLE public.download_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  count integer NOT NULL DEFAULT 36,
  updated_at timestamptz DEFAULT now()
);

-- Insert initial row with count = 36
INSERT INTO public.download_stats (count) VALUES (36);

-- Enable Row Level Security
ALTER TABLE public.download_stats ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read the download count
CREATE POLICY "Allow public read access to download stats"
ON public.download_stats
FOR SELECT
TO public
USING (true);

-- Allow everyone to update the download count
CREATE POLICY "Allow public update access to download stats"
ON public.download_stats
FOR UPDATE
TO public
USING (true);

-- Enable realtime for download_stats table
ALTER TABLE public.download_stats REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.download_stats;