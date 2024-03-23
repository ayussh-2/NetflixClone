import logo from "../assets/logo.svg";
import { Search, Bell, Menu, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
function Navbar({ handleQuery, query, handleSearch }) {
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [page, setPage] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
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
    function handleToggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="relative">
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
                            className="bg-black outline-none border-[1px] border-gray-300 px-2 py-1 text-white text-sm tracking-wide"
                            placeholder="Titles,People,Genres"
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

            <div className="absolute md:hidden items-center justify-between text-whote font-poppins  z-40 w-full ">
                <div className="flex px-5 bg-black items-center justify-between ">
                    <div className="flex items-center gap-3">
                        <div>
                            <Menu
                                color="#ffffff"
                                size={25}
                                onClick={() => {
                                    handleToggleMenu();
                                }}
                            />
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

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.2 }}
                            key={1}
                            className="flex text-[#808080] w-full h-full bg-opacity-50"
                        >
                            <div className="w-2/3 px-5 flex bg-black flex-col">
                                <div
                                    id="upper"
                                    className="text-sm font-semibold mt-3"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="overflow-hidden">
                                            <img
                                                src="https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556778.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710806400&semt=ais"
                                                className="w-10 h-10"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex flex-col items-start">
                                            <p className="font-bold ">HOME</p>
                                            <p className="font-light">
                                                Switch Profiles
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex mt-2 flex-col items-start">
                                        <p>Account</p>
                                        <p>Help Center</p>
                                        <p>Sign out of Netflix</p>
                                    </div>
                                </div>
                                <hr className=" my-5" />
                                <div className="flex flex-col items-start font-semibold">
                                    <p>Home</p>
                                    <p>My List</p>
                                    <p>Thrillers</p>
                                    <p>Hindi Movies & Tv</p>
                                    <p>Children & Family</p>
                                    <p>International</p>
                                    <p>BollyWood</p>
                                    <p>Comedies</p>
                                    <p>Horror</p>
                                    <p>Popular on Netflix</p>
                                    <p>Recently Added</p>
                                    <p>TV Shows</p>
                                    <p>Action</p>
                                    <p>Sci-Fi & Fantasy</p>
                                    <p>Classic</p>
                                    <p>Reality Shows</p>
                                    <p>Documentaries</p>
                                    <p>Music & Musicals</p>
                                    <p>Teen</p>
                                    <p>Japanese</p>
                                    <p>Indian</p>
                                    <p>Spanish</p>
                                    <p>French</p>
                                    <p>German</p>
                                    <p>Italian</p>
                                    <p>More</p>
                                </div>
                            </div>
                            <div className="w-1/3 bg-black bg-opacity-55"></div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Navbar;
