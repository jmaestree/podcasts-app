import { cache } from '../../../utils/cache';
import request from '../../fetcher';
import { PodcastDto, RSSDto } from '../dto';
import { Podcast } from '../types';

interface GetPodcast {
  resultCount: number;
  results: PodcastDto[];
}

interface GetEpisodes {
  rss: RSSDto;
}

function getFeedUrl(id: string, podcast?: GetPodcast) {
  if (!podcast || podcast?.resultCount === 0) {
    console.warn(`No podcasts found with ID ${id}`);
    return undefined;
  }

  if (podcast?.resultCount > 1) {
    console.warn(`Found more than one podcast with ID ${id}, choosing the first one`);
  }

  return podcast?.results?.[0].feedUrl;
}

function mapper(id: string, podcasts?: GetPodcast, feeds?: GetEpisodes): Podcast {
  const { collectionId, artistName, artworkUrl100, collectionName } = podcasts?.results?.[0] || {};
  const result: Podcast = {
    id: collectionId?.toString()!,
    artist: artistName!,
    description: '',
    image: artworkUrl100!,
    title: collectionName!,
    episodes: []
  };

  if (feeds !== undefined) {
    result.artist = feeds.rss.channel['itunes:author'];
    result.description = feeds.rss.channel.description;
    result.image = feeds.rss.channel['itunes:image'].$.href;
    result.title = feeds.rss.channel.title;
    result.episodes = feeds.rss.channel.item.map((item) => ({
      id: item.guid,
      date: item.pubDate,
      audio: {
        url: item.enclosure.$.url,
        type: item.enclosure.$.type
      },
      description: item.description,
      duration: item['itunes:duration'],
      title: item.title
    }));
  }

  return result;
}

export async function getPodcast(id: string, options?: RequestInit): Promise<Podcast> {
  const podcastsResult = await cache<GetPodcast | undefined>(`podcast-${id}`, () =>
    request<GetPodcast>(`https://itunes.apple.com/lookup?id=${id}`, {
      ...options
    })
  );

  const feedUrl = getFeedUrl(id, podcastsResult);
  let podcastEpisodes;

  if (feedUrl) {
    podcastEpisodes = await cache<GetEpisodes | undefined>(`podcast-episodes-${id}`, () =>
      request<GetEpisodes>(feedUrl, {
        ...options,
        headers: {
          'Content-Type': 'application/xml'
        }
      })
    );
  } else {
    console.warn('No episodes found for podcast', id);
  }

  return mapper(id, podcastsResult, podcastEpisodes);
}
