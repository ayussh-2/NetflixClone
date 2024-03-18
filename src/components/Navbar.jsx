import logo from "../assets/logo.svg";
import { Search, Bell, User, ChevronDown } from "lucide-react";
function Navbar() {
    return (
        <div className="flex items-center justify-between text-white font-poppins px-10 py-5">
            <div className="flex items-center gap-8 text-sm  font-light ">
                <div>
                    <div>
                        <img src={logo} alt="" className="w-auto h-20" />
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <p className="nav-link opacity-100">Home</p>
                    <p className="nav-link opacity-85">Tv Shows</p>
                    <p className="nav-link opacity-85">Movies</p>
                    <p className="nav-link opacity-85">New & Popular</p>
                    <p className="nav-link opacity-85">Browse by languages</p>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <Search />
                <p className="text-sm">Children</p>
                <Bell />
                <div className="flex items-center ">
                    <User />
                    <ChevronDown size={15} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
