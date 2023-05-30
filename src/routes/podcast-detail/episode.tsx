import React from 'react';
import { Await, useParams, useRouteLoaderData } from 'react-router-dom';
import { Podcast } from '../../api/podcasts';
import Card from '../../components/card';

const Episode: React.FC = () => {
  const { episodeId } = useParams();
  const { podcast } = useRouteLoaderData('detail') as { podcast: Podcast };
  const episodeIdRaw = decodeURIComponent(episodeId || '');

  return (
    <React.Suspense fallback={null}>
      <Await resolve={podcast} errorElement={<p>Error loading podcasts!</p>}>
        {(item: Podcast) => {
          const episode = item?.episodes?.find((item) => item.id === episodeIdRaw);
          const { title, description, audio } = episode ?? item.episodes?.[0] ?? {};

          return (
            <>
              {!episode && (
                <p className="text-orange-600">
                  Unable to find the episode with ID: {episodeIdRaw}, showing the first one of the podcast
                </p>
              )}
              <Card className="py-3 flex-col gap-y-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="italic" dangerouslySetInnerHTML={{ __html: description || '' }} />
                <hr className="border-t border-gray-300" />
                <audio controls className="w-full">
                  <source src={audio?.url} type={audio?.type} />
                  Your browser does not support the audio element.
                </audio>
              </Card>
            </>
          );
        }}
      </Await>
    </React.Suspense>
  );
};

export default Episode;
