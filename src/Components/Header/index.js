import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';

const Header = () => {
  return (
    <header>
      <div className="headerwrapper">
        <div className="top-strip bg-purple">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to some reason the <b>store is closed</b>
            </p>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="logowrapper col-sm-3">
              <Link to={'/'}><img src={logo} alt="Logo" /></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;