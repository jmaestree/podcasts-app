import { Outlet, LoaderFunction } from 'react-router-dom';
import Navbar from '../../components/navbar';
import { getAllPodcasts } from '../../api/podcasts';

const Root: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col px-4">
        <Outlet />
      </div>
    </>
  );
};

export const loader: LoaderFunction = async ({ request }) => {
  return getAllPodcasts({ method: 'GET', signal: request.signal });
};

export default Root;
