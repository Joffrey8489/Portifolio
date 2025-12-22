import { Link } from 'react-router-dom';
import './navbar.css';


export default function Navlinks() {
  return (
    <>
    <div className='logo'>
         <p>$ewaneDeV</p>
    </div>
    <ul className="links">
       <Link to="/Home">   <li >Home</li> </Link>
       <Link to="/About">   <li  >About me</li></Link>
       <Link to="/CV">     <li>CV </li></Link>
       <Link to="/Works">   <li>( Works )</li></Link>
       <Link to="/Contact">    <li><i className="fa-solid fa-phone"></i> Contacts</li></Link>
      </ul><div className="nav-right">
  
          </div></>
  );

}
