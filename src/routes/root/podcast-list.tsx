import { Link, useLoaderData } from 'react-router-dom';
import { Podcast as PodcastType } from '../../api/podcasts';
import Podcast from '../../components/podcast';

const PodcastList: React.FC = () => {
  const data = useLoaderData() as PodcastType[];

  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-12">
      {data.map((item) => (
        <Link key={item.id} to={`podcast/${item.id}`} className="flex">
          <Podcast podcast={item} />
        </Link>
      ))}
    </div>
  );
};

export default PodcastList;
