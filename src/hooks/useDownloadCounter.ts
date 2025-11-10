import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useDownloadCounter = () => {
  const [downloadCount, setDownloadCount] = useState<number>(36);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch initial count and subscribe to real-time updates
  useEffect(() => {
    // Fetch initial count
    const fetchCount = async () => {
      const { data, error } = await supabase
        .from('download_stats')
        .select('count')
        .single();

      if (data && !error) {
        setDownloadCount(data.count);
      }
      setIsLoading(false);
    };

    fetchCount();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('download-stats-changes')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'download_stats',
        },
        (payload) => {
          if (payload.new && typeof payload.new.count === 'number') {
            setDownloadCount(payload.new.count);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Increment download count
  const incrementDownload = async () => {
    try {
      // Optimistic update
      setDownloadCount((prev) => prev + 1);

      // Get current count
      const { data: currentData } = await supabase
        .from('download_stats')
        .select('id, count')
        .single();

      if (currentData) {
        // Update in database
        await supabase
          .from('download_stats')
          .update({ 
            count: currentData.count + 1,
            updated_at: new Date().toISOString()
          })
          .eq('id', currentData.id);
      }
    } catch (error) {
      console.error('Error incrementing download count:', error);
    }
  };

  return { downloadCount, incrementDownload, isLoading };
};
