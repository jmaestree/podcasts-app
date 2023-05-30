import { Podcast as PodcastType } from '../api/podcasts';

interface PodcastProps {
  podcast: PodcastType;
}

const Podcast: React.FC<PodcastProps> = ({ podcast }) => {
  const { title, description, artist, image } = podcast || {};

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-truncate d-inline-block" style={{ maxHeight: '3rem' }}>
          {description}
        </p>
        <p className="card-text">{artist}</p>
      </div>
    </div>
  );
};

export default Podcast;
