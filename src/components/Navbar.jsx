import logo from "../assets/logo.svg";
import { Search, Bell, Menu, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
function Navbar({ handleQuery, query }) {
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [page, setPage] = useState("home");
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/search") {
            setShowSearch(true);
            setPage("search");
        }
    }, []);
    useEffect(() => {
        if (page === "search") {
            handleQuery(searchQuery);
            query = searchQuery;
        }
    }, [page, searchQuery]);
    function handleSearch() {
        setShowSearch(!showSearch);
    }
    function handleEnter(e) {
        if (e.key === "Enter") {
            navigate(`/search?q=${searchQuery}`);
        }
    }
    return (
        <>
            <div className="md:flex hidden items-center justify-between text-white font-poppins px-10 py-5 absolute w-full z-10">
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
                        <p className="nav-link opacity-85">
                            Browse by languages
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-5 *:hover:cursor-pointer">
                    {showSearch ? (
                        <input
                            type="text"
                            className="bg-black outline-none border-2 border-gray-300 py-1 text-white"
                            onChange={(e) => setSearchQuery(e.target.value)}
                            value={searchQuery}
                            onKeyPress={(e) => handleEnter(e)}
                        />
                    ) : (
                        <Search onClick={() => handleSearch()} />
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
            <div className="flex md:hidden items-center justify-between text-whote font-poppins px-5 absolute z-10 w-full bg-black">
                <div className="flex items-center gap-3">
                    <div>
                        <Menu color="#ffffff" size={25} />
                    </div>
                    <div>
                        <Link to={"/"}>
                            <img
                                src={logo}
                                alt=""
                                className="w-auto h-16 scale-125"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <input
                        type="text"
                        className="bg-[#1b1b1b] font-sans pl-2 outline-none w-32 border-gray-300 py-1 text-white border-[1px]"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery}
                        onKeyPress={(e) => handleEnter(e)}
                        placeholder="Search"
                    />
                </div>
            </div>
        </>
    );
}

export default Navbar;
