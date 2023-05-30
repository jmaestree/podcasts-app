import { createBrowserRouter } from 'react-router-dom';
import PodcastList, { loader as loaderPodcastList } from './podcast-list/podcast-list';
import PodcastDetail, { loader as loaderPodcastDetail } from './podcast-detail/podcast-detail';
import Information from './podcast-detail/information';
import Episode from './podcast-detail/episode';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PodcastList />,
    loader: loaderPodcastList
  },
  {
    id: 'detail',
    path: '/podcast/:podcastId',
    element: <PodcastDetail />,
    loader: loaderPodcastDetail,
    children: [
      {
        path: '',
        element: <Information />
      },
      {
        path: 'episode/:episodeId',
        element: <Episode />
      }
    ]
  }
]);
