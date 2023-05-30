export interface Podcast {
  id: string;
  title: string;
  description: string;
  artist: string;
  image: string;
  episodes?: Episode[];
}

export interface Episode {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  audio: {
    type: string;
    url: string;
  };
}
