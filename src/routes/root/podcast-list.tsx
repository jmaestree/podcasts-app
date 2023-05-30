import { useLoaderData } from 'react-router-dom';
import { Podcast as PodcastType } from '../../api/podcasts';
import Podcast from '../../components/podcast';

const PodcastList: React.FC = () => {
  const data = useLoaderData() as PodcastType[];

  return (
    <div className="row row-cols-4 g-4">
      {data.map((item) => (
        <div key={item.id} className="col">
          <Podcast podcast={item} />
        </div>
      ))}
    </div>
  );
};

export default PodcastList;
