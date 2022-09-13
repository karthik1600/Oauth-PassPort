 import React from 'react'
 import { Link } from "react-router-dom";
  
const Navbar = () => {
    const user = null;
    return (
       <div className="navbar">
           <span className="logo" >
               <Link className="link" to ="/">
               Oauth Test App
               </Link>
           </span>
            
                {user ? (
            <ul className="list">
                <li className="listItem">
                   <img src="https://assets.leetcode.com/users/user3508e/avatar_1620286014.png" alt="" className='avatar' />
               </li>
               <li className="listItem">
                   John Doe
               </li>
               <li className="listItem">
                   Log out
                </li>
            </ul>) : (<Link className = "link" to="/login">Login</Link>)}
       </div>
   )
 }
 
export default Navbar;