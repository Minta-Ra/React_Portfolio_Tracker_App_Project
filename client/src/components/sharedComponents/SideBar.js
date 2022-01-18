import "./NavBar.css"
import {BsFillCollectionFill} from 'react-icons/bs'
import {AiOutlineStock, AiOutlineHistory} from 'react-icons/ai'
import { Link } from 'react-router-dom';



const SideBar = () => {
    return ( 

        <>
            <div className="sidebar">
                <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <BsFillCollectionFill />
                            <Link to="/">My Portfolio</Link>
                        </li>
                        <li className="sidebarListItem">
                            <AiOutlineStock />
                            <Link to="/stockmarket">Discover</Link>
                        </li>
                        <li className="sidebarListItem">
                            <AiOutlineHistory />
                             History
                        </li>
                    </ul>
                </div>
            </div>
         </div>

        </>
     );
}
 
export default SideBar;