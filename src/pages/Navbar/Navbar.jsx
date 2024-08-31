import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaBars } from "react-icons/fa";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    // const [logoutSuccess, setLogoutSuccess] = useState(null)
    // const [logoutError, setLogoutError] = useState('')



    const handleLogout = () => {
        logOut()
            .then(() => {
                toast('Log Out Successfully')
            })
            .catch(() => {
                toast('Log Out Failed')
            })
    }


    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/donation'>Donation</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/registration'>Registration</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FaBars className="h-6 w-6"></FaBars>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <h3 className="text-xl">Doctor Center</h3>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <p className="mr-4 font-semibold">{user?.displayName}</p>
                <div className="mr-4">
                    <img src={user?.photoURL} className="rounded-full w-12" />
                </div>
                {
                    user ?
                        <button onClick={handleLogout} className=" bg-gradient-to-r from-purple-500 to-pink-500 py-3 px-8 rounded-md text-white font-semibold">LogOut</button >
                        :
                        <Link to='/login'>
                            <button className=" bg-gradient-to-r from-purple-500 to-pink-500 py-3 px-8 rounded-md text-white font-semibold">Login</button >
                        </Link>
                }

            </div>

        </div>
    );
};

export default Navbar;