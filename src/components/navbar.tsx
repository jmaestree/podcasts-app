import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-col p-4 mb-3 bg-white border-b shadow">
      <Link to="/" className="font-bold">
        Podcaster
      </Link>
    </div>
  );
};

export default Navbar;
