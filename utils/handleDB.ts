import { createClient } from '@supabase/supabase-js';

export const getArticleProps = async (path: string) => {
  'use server'

  const supabase = createClient(
    'https://figlhrkwzemlzzgeowfk.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpZ2xocmt3emVtbHp6Z2Vvd2ZrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDQ3MjQ5NiwiZXhwIjoyMDE2MDQ4NDk2fQ.YIu671OTAePrUQCVXVCazr_RkbXdsjjYEito0kHtxD0'
  );

  const { data, error } = await supabase
    .from('article')
    .select('content')
    .eq('path', path)
    .single();

  if (error || !data) {
    console.log(error);
    return {
      notFound: true,
    };
  }

  return {
    props: data,
  };
};
