import request from '../../fetcher';
import { FeedDto } from '../dto';
import { Podcast } from '../types';

interface GetAllPodcasts {
  feed: FeedDto;
}

function mapper(result?: GetAllPodcasts): Podcast[] {
  return (
    result?.feed?.entry?.map((item) => ({
      id: item?.id?.label,
      artist: item?.['im:artist']?.label,
      description: item?.summary.label,
      image: item?.['im:image']?.[0].label,
      title: item?.title.label
    })) ?? []
  );
}

export async function getAllPodcasts(options?: RequestInit): Promise<Podcast[]> {
  const result = await request<GetAllPodcasts>(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
    {
      ...options
    }
  );

  return mapper(result);
}
