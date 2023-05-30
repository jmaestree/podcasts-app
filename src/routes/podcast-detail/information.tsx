import React from 'react';
import { Await, Link, useRouteLoaderData } from 'react-router-dom';
import { Podcast } from '../../api/podcasts';
import Card from '../../components/card';
import { humanize } from '../../utils/dates';

const Information: React.FC = () => {
  const { podcast } = useRouteLoaderData('detail') as { podcast: Podcast };

  return (
    <React.Suspense fallback={null}>
      <Await resolve={podcast} errorElement={<p>Error loading podcasts!</p>}>
        {(item: Podcast) => (
          <>
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
                      <tr key={episode.title} className="even:bg-gray-100">
                        <td className="p-2">
                          <Link to={`/podcast/${item.id}/episode/${episode.id}`}>{episode.title}</Link>
                        </td>
                        <td className="p-2">{humanize(episode.date)}</td>
                        <td className="p-2">{episode.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Card>
          </>
        )}
      </Await>
    </React.Suspense>
  );
};

export default Information;
