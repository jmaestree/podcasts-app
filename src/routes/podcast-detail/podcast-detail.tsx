import { LoaderFunction, useLoaderData } from 'react-router-dom';
import Navbar from '../../components/navbar';
import { Podcast, getPodcast } from '../../api/podcasts';

const PodcastDetail: React.FC = () => {
  const data = useLoaderData() as Podcast;

  return (
    <>
      <Navbar />
      <div className="flex flex-col px-4">WIP, Detail of the podcast: {JSON.stringify(data)}</div>
    </>
  );
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const { podcastId } = params;

  if (!podcastId) {
    return undefined;
  }

  return getPodcast(podcastId, { method: 'GET', signal: request.signal });
};

export default PodcastDetail;
