import { Link } from 'react-router-dom';

const NavBar = () => {
    
    return (
        <nav className="navbar navbar-dark bg-dark">
            {/* <Link to="/">Dashboard</Link> If added, must amend route for Discover*/}
            <Link to="/">Portfolio</Link>
            <Link to="/stockmarket">Discover</Link>
            {/* <Link to="/activity">Activity</Link> */}
            {/* <Link to="/account">Account Settings</Link> */}
        </nav>
    )
}

export default NavBar;