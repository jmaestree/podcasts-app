import { createBrowserRouter } from 'react-router-dom';
import PodcastList, { loader as loaderPodcastList } from './podcast-list/podcast-list';
import PodcastDetail, { loader as loaderPodcastDetail } from './podcast-detail/podcast-detail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PodcastList />,
    loader: loaderPodcastList
  },
  {
    path: '/podcast/:podcastId',
    element: <PodcastDetail />,
    loader: loaderPodcastDetail
  }
]);
