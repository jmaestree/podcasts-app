import { createBrowserRouter } from 'react-router-dom';
import Root, { loader as loaderRoot } from './root/root';
import PodcastList from './root/podcast-list';
import PodcastDetail, { loader as loaderPodcastDetail } from './podcast-detail/podcast-detail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <PodcastList />,
        loader: loaderRoot
      }
    ]
  },
  {
    path: '/podcast/:podcastId',
    element: <PodcastDetail />,
    loader: loaderPodcastDetail
  }
]);
