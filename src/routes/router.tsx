import { createBrowserRouter } from 'react-router-dom';
import Root, { loader as loaderRoot } from './root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: loaderRoot,
    children: [
      {
        path: '',
        element: 'To be developed: Main page'
      }
    ]
  }
]);
