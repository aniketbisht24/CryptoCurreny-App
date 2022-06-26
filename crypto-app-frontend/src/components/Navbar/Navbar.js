import { Link } from 'react-router-dom';
import profileImage from '../Image/2.jpg'
import './Navbar.css'

export const Navbar = () => {
  const user = false;

  return (
  
  <div className="navbar">
      <div className="navLeft">
        <i className="navTopIcon fa-brands fa-searchengin"></i>
      </div>

      <div className="navCenter">
        <ul className="navList">
          <li className='navListItems'> 
            <Link className = "link" to ="/"> Home </Link>
          </li>

          <li className='navListItems'> 
            <Link className = "link" to ="/"> About </Link>
          </li>
          
          <li className='navListItems'>
            <Link className = "link" to ="/"> Contact </Link>
          </li>
          
          <li className='navListItems'>
            <Link className = "link" to ="/write"> Write </Link>
          </li>
          
          <li className='navListItems'>
            {user && 
            <Link className = "link" to ="/"> Log Out </Link>
            }
          </li>
        </ul>
      </div>

      <div className="navRight">
        {user ? <img className = "navImage" src={profileImage} alt = "profile"/>
          : (
            <ul className="navList">
              <li className="navListItems">
                <Link className = "link" to ="/log-in"> Login </Link>
              </li>
              <li className="navListItems">
                <Link className = "link" to ="/register"> Register </Link>
              </li>
            </ul>
          ) 
        }
      </div>

    </div>
  );
};


