import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import Modal from '../components/Modal.js'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" href="/">
          Animal Planet
        </Link>
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
            <li className="nav-item me-2">
              <Link class="nav-link text-light" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link class="nav-link text-light" href="/aboutPage">
                About
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link class="nav-link text-light" href="/servicePage">
                Service
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link class="nav-link text-light" href="/contractPage">
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex ">
            <Modal />
          </form>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
