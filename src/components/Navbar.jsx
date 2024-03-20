import logo from "../assets/logo.svg";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar({ handleQuery, query }) {
    const [showSearch, setShowSearch] = useState(false);
    function handleSearch() {
        setShowSearch(!showSearch);
    }
    return (
        <div className="flex items-center justify-between text-white font-poppins px-10 py-5 absolute w-full z-10">
            <div className="flex items-center gap-8 text-sm  font-light ">
                <div>
                    <div>
                        <img src={logo} alt="" className="w-auto h-20" />
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <Link to={"/"}>
                        <p className="nav-link opacity-100">Home</p>
                    </Link>
                    <p className="nav-link opacity-85">Tv Shows</p>
                    <p className="nav-link opacity-85">Movies</p>
                    <p className="nav-link opacity-85">New & Popular</p>
                    <p className="nav-link opacity-85">Browse by languages</p>
                </div>
            </div>
            <div className="flex items-center gap-5 *:hover:cursor-pointer">
                {showSearch ? (
                    <input
                        type="text"
                        className="bg-black outline-none border-2 border-gray-300 py-1 text-white"
                        onChange={(e) => handleQuery(e.target.value)}
                        value={query}
                    />
                ) : (
                    <Link to={"/search"}>
                        <Search onClick={() => handleSearch()} />
                    </Link>
                )}
                <p className="text-sm">Children</p>
                <Bell />
                <div className="flex items-center ">
                    <div className="rounded-sm overflow-hidden">
                        <img
                            src="https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556778.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710806400&semt=ais"
                            className="w-8 h-8"
                            alt=""
                        />
                    </div>
                    <ChevronDown fill={"#fff"} size={15} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
