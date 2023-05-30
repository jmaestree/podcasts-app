import React from 'react';
import { Link, LoaderFunction, defer } from 'react-router-dom';
import { Podcast as PodcastType, getAllPodcasts } from '../../api/podcasts';
import Podcast from '../../components/podcast';
import { useSearch } from '../../utils/hooks/use-search';

interface ListProps {
  podcasts: PodcastType[];
}

const List: React.FC<ListProps> = ({ podcasts }) => {
  const { results, matches, searchValue, onSearch } = useSearch(podcasts, 'title');

  return (
    <div className="flex flex-col gap-y-5 px-4 pb-10">
      <div className="flex justify-end items-center gap-x-3">
        <div className=" inline-flex gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-blue-900 ring-1 ring-inset ring-blue-200 bg-blue-50">
          {matches}
        </div>
        <input
          className="text-gray-900 text-base py-1 px-2 shadow-md rounded border border-gray-300 focus:border-gray-900 focus:accent-gray-900 focus:outline-none focus:ring-gray-900"
          type="text"
          onChange={(e) => onSearch(e?.target?.value)}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 gap-y-12">
        {results.map((item) => (
          <Link key={item.id} to={`podcast/${item.id}`} className="flex">
            <Podcast podcast={item} />
          </Link>
        ))}
        {matches === 0 && (
          <p className="font-bold text-orange-800 col-span-4">There's no results for the title: {searchValue}</p>
        )}
      </div>
    </div>
  );
};

export const loader: LoaderFunction = async ({ request }) => {
  return defer({ podcasts: getAllPodcasts({ method: 'GET', signal: request.signal }) });
};

export default List;
