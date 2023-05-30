import React from 'react';
import { Await, Link, LoaderFunction, defer, useLoaderData } from 'react-router-dom';
import { Podcast as PodcastType, getAllPodcasts } from '../../api/podcasts';
import Podcast from '../../components/podcast';
import Navbar from '../../components/navbar';

const PodcastList: React.FC = () => {
  const { podcasts } = useLoaderData() as { podcasts: PodcastType[] };

  return (
    <>
      <Navbar>
        <React.Suspense fallback={<Navbar.Loader />}>
          <Await resolve={podcasts} errorElement={<p>Error loading podcasts!</p>}>
            <Navbar.Loaded />
          </Await>
        </React.Suspense>
      </Navbar>
      <div className="grid grid-cols-4 gap-x-4 gap-y-12">
        <React.Suspense fallback={null}>
          <Await resolve={podcasts} errorElement={<p>Error loading podcasts!</p>}>
            {(podcasts: PodcastType[]) =>
              podcasts.map((item) => (
                <Link key={item.id} to={`podcast/${item.id}`} className="flex">
                  <Podcast podcast={item} />
                </Link>
              ))
            }
          </Await>
        </React.Suspense>
      </div>
    </>
  );
};

export const loader: LoaderFunction = async ({ request }) => {
  return defer({ podcasts: getAllPodcasts({ method: 'GET', signal: request.signal }) });
};

export default PodcastList;
