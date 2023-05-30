import { createBrowserRouter } from 'react-router-dom';
import Root, { loader as loaderRoot } from './root/root';
import PodcastList from './root/podcast-list';

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
  }
]);
