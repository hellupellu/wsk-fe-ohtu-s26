import {Link, Outlet} from 'react-router';

const Layout = () => {
  return (
    <>
      <header>
        <h1>My super media app</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; teacher 2026</p>
      </footer>
    </>
  );
};

export default Layout;
