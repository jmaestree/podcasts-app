import request from '../../fetcher';
import { PodcastDto } from '../dto';
import { Podcast } from '../types';

interface GetPodcast {
  resultCount: number;
  results: PodcastDto[];
}

function mapper(id: string, result?: GetPodcast): Podcast {
  if (!result || result?.resultCount === 0) {
    console.warn(`No podcasts found with ID ${id}`);
    return undefined as unknown as Podcast;
  }

  if (result?.resultCount > 1) {
    console.warn(`Found more than one podcast with ID ${id}, choosing the first one`);
  }

  return {
    id: result?.results?.[0]?.collectionId?.toString()!,
    artist: result?.results?.[0]?.artistName!,
    description: '',
    image: result?.results?.[0]?.artworkUrl100!,
    title: result?.results?.[0]?.collectionName!
  };
}

export async function getPodcast(id: string, options?: RequestInit): Promise<Podcast> {
  const result = await request<GetPodcast>(`https://itunes.apple.com/lookup?id=${id}`, {
    ...options
  });

  return mapper(id, result);
}
