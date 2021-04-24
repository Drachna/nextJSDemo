import '../styles/Main.scss'
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link href="/home"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
          <Link href="/about"><a className="nav-link">About</a></Link>
          </li>      
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;