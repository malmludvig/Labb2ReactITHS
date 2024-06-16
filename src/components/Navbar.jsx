import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbarDiv">

            <table width="100%">
            <tr>
                <td>            <Link to='/'>Home </Link>  
                </td>
                <td>            <Link to='/data'>Data </Link> 
                </td>
                <td>             <Link to='/newhooks'>NewHooks</Link>
                </td>
            </tr>
        </table>

        </div>
    )
};

export default Navbar