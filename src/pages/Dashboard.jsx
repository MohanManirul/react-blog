
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <p>Welcome to dashboard</p>
            <nav>
                <li > <NavLink to={'/'}>Home</NavLink></li> 
                <Link to="profile">Profile</Link> |
                <Link to="settings">Settings</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default Dashboard;