import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";




const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul className="flex space-x-3 text-green-600 font-medium text-md px-5">
            {/* Home */}
            <button className="p-1 border-solid border-4 border-green-300 rounded-full py-2 px-3 bg-green-300">
            <li>
                <Link to={'/'} className="font-new1 text-xl text-black">Home</Link>
            </li>
            </button>

            {/* All Product */}
            <button className="p-1 border-solid border-4 border-green-300 bg-green-300 rounded-full py-2 px-4 ">
            <li>
                <Link to={'/allproduct'} className="font-new1 text-xl text-black">Products</Link>
            </li>
            </button>

            
            {/* Signup */}
            {!user ? <li>
                <button className="p-1 border-solid border-4 border-green-300 bg-green-300 rounded-full py-2 px-4">
                <Link to={'/signup'} className="font-figtree text-black">Signup</Link>
            </button>
            </li> : ""}

            
            {/* Signup */}
            {!user ? <li>
                <button className="p-1 border-solid border-4 border-green-300 bg-green-300 rounded-full py-2 px-4">
                <Link to={'/login'} className="font-new1 text-xl text-black">Login</Link>
                </button>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li>
                <button className="p-1 border-solid border-4 border-green-300 bg-green-300 rounded-full py-2 px-4">
                <Link to={'/user-dashboard'} className="font-new1 text-xl text-black">User</Link>
                </button>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li>
            <button className="p-1 border-solid border-4 border-green-300 bg-green-300 rounded-full py-2 px-4">
                <Link to={'/admin-dashboard'} className="font-new1 text-xl text-black">Admin</Link>
                </button> 
            </li>}

            {/* logout */}
            {user && <button className="p-1 border-solid border-4 border-green-300 bg-green-300 rounded-full py-2 px-4 font-new1 text-xl text-black" onClick={logout}>
                logout
            </button>}

            {/* Cart */}
            <li>
            <button className="p-1 border-solid border-4 border-green-300 bg-green-300 rounded-full py-2 px-4">
                <Link to={'/cart'} className="font-new1 text-xl text-black">
                    Cart({cartItems.length})
                </Link>
            </button>
            </li>
        </ul>
    )
    return (
        <nav className=" bg-primary sticky top-0 rounded-br-2xl rounded-bl-2xl" >
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
           <div className="lg:flex lg:justify-between">
            <div>
            <img src="https://i.pinimg.com/originals/e8/88/d4/e888d4feff8fd5ff63a965471a94b874.gif" class="h-11" alt="GardenGrown Logo" />
            </div>
            <div>
                     <h2 className=" text-green-600 font-bold text-3xl">GardenGrown</h2>
                     </div>
                     </div>
                {/* left  */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>

                    </Link>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                {/* Search Bar  */}
                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;
