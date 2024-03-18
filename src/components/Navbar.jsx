import logo from "../assets/logo.svg";
import { Search, Bell, User, ChevronDown } from "lucide-react";
function Navbar() {
    return (
        <div className="flex items-center justify-between text-white px-10 py-5">
            <div
                className="flex items-center gap-8 text-sm"
                style={{ fontFamily: "nlight" }}
            >
                <div>
                    <div>
                        <img src={logo} alt="" className="w-auto h-20" />
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <p>Home</p>
                    <p>Tv Shows</p>
                    <p>Movies</p>
                    <p>New & Popular</p>
                    <p>Browse by languages</p>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <Search />
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
