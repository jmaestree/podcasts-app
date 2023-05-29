import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';

const Root: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
