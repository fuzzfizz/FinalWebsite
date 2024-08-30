"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import BootstrapClient from './BootstrapClient';
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    // Redirect to the home page
    router.push('/signin');
  };

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      router.push('/signin');
    }

    // Add event listener for storage changes
    const handleStorageChange = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [router]);

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
              <Link className="nav-link text-light" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link text-light" href="/aboutPage">
                About
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link text-light" href="/servicePage">
                Service
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link text-light" href="/contractPage">
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            {isLoggedIn ? (
              <button type="button" className="btn btn-outline-danger me-2" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <>
                <Link href="/signup">
                  <button type="button" className="btn btn-outline-success me-2">
                    Sign Up
                  </button>
                </Link>
                <Link href="/signin">
                  <button type="button" className="btn btn-outline-success">
                    Sign In
                  </button>
                </Link>
              </>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;