import React from 'react';
import { Await, LoaderFunction, defer, useLoaderData } from 'react-router-dom';
import Navbar from '../../components/navbar';
import { Podcast, getPodcast } from '../../api/podcasts';
import Card from '../../components/card';
import { humanize } from '../../utils/dates';

const PodcastDetail: React.FC = () => {
  const { podcast } = useLoaderData() as { podcast: Podcast };

  return (
    <>
      <Navbar>
        <React.Suspense fallback={<Navbar.Loader />}>
          <Await resolve={podcast} errorElement={<p>Error loading podcasts!</p>}>
            <Navbar.Loaded />
          </Await>
        </React.Suspense>
      </Navbar>
      <React.Suspense fallback={null}>
        <Await resolve={podcast} errorElement={<p>Error loading podcasts!</p>}>
          {(item: Podcast) => (
            <div className="flex px-4 flex-1 gap-x-3">
              <div className="flex w-3/12">
                <Card className="flex-col divide-y divide-slate-300 gap-y-3">
                  <img src={item.image} className="w-4/5 aspect-square rounded-md my-3 mx-auto" alt={item.title} />
                  <div className="flex flex-col pt-3">
                    <h1 className="font-bold font-xl">{item.title}</h1>
                    <p className="italic">by {item.artist}</p>
                  </div>
                  <div className="flex flex-col pt-3">
                    <p className="font-bold">Description:</p>
                    <p className="italic" dangerouslySetInnerHTML={{ __html: item.description }} />
                  </div>
                </Card>
              </div>
              <div className="flex flex-col w-9/12 gap-y-3">
                <Card className="py-3">
                  <p className="text-xl font-bold">Episodes: {item.episodes?.length}</p>
                </Card>
                <Card className="overflow-hidden py-3">
                  {item.episodes?.length === 0 ? (
                    `There's no episodes available for this podcast`
                  ) : (
                    <table className="w-full divide-y divide-gray-300">
                      <thead className="text-left">
                        <tr>
                          <th scope="col" className="p-3">
                            Title
                          </th>
                          <th scope="col" className="p-3">
                            Date
                          </th>
                          <th scope="col" className="p-3">
                            Duration
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.episodes?.map((episode) => (
                          <tr key={episode.id} className="even:bg-gray-100">
                            <td className="p-2">{episode.title}</td>
                            <td className="p-2">{humanize(episode.date)}</td>
                            <td className="p-2">{episode.duration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </Card>
              </div>
            </div>
          )}
        </Await>
      </React.Suspense>
    </>
  );
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const { podcastId } = params;

  return defer({ podcast: podcastId ? getPodcast(podcastId, { method: 'GET', signal: request.signal }) : undefined });
};

export default PodcastDetail;
