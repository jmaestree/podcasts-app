import { Outlet, LoaderFunction, useLoaderData } from 'react-router-dom';
import Navbar from '../components/navbar';
import { getAllPodcasts } from '../api/podcasts';

const Root: React.FC = () => {
  const data = useLoaderData();

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <Outlet />
        {JSON.stringify(data, null, 2)}
      </div>
    </>
  );
};

export const loader: LoaderFunction = async ({ request }) => {
  return getAllPodcasts({ method: 'GET', signal: request.signal });
};

export default Root;
