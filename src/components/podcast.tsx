import { Podcast as PodcastType } from '../api/podcasts';
import Card from './card';

interface PodcastProps {
  podcast: PodcastType;
}

const Podcast: React.FC<PodcastProps> = ({ podcast }) => {
  const { title, artist, image } = podcast || {};

  return (
    <Card className="relative flex-col items-center mt-10 text-center">
      <img src={image} className="w-2/3 aspect-square rounded-full shadow-xl -mt-10" alt={title} />
      <h5 className="uppercase break-words line-clamp-2">{title}</h5>
      <p className="text-sm text-slate-500">Author: {artist}</p>
    </Card>
  );
};

export default Podcast;
