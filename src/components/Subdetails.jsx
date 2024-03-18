import movieLogo from "../assets/movieLogo.png";
import { Play, Info, RotateCw, VolumeX } from "lucide-react";
function Subdetails({ title, label, labelType, subdetails, type }) {
    return (
        <div className="text-white z-10 top-52 absolute px-10 flex flex-col gap-5">
            <div>
                <img src={movieLogo} alt="movieLogo" className="h-20" />
            </div>
            <div>
                <div className="flex gap-2 items-center">
                    <div className="bg-red-600 text-white font-bold rounded-lg p-1 h-14 w-14 scale-75">
                        <p className="text-center text-base uppercase font-bold">
                            {labelType}
                        </p>
                    </div>
                    <div>
                        <p className="font-semibold text-2xl">{label}</p>
                    </div>
                </div>
                <div className="w-1/2 my-5">
                    <p className="text-lg">{subdetails}</p>
                </div>
                <div className="flex justify-between w-[94vw]">
                    <div className="flex items-center gap-5">
                        <button className="bg-white text-black px-10 py-2 rounded-md font-semibold hover:opacity-80">
                            <span className="flex flex-row items-center text-lg">
                                <Play size={20} fill="#111" className="mr-2" />
                                Play
                            </span>
                        </button>
                        <button className="bg-white bg-opacity-35 hover:bg-opacity-20 px-10 py-2 rounded-md font-semibold">
                            <span className="flex flex-row items-center text-lg">
                                <Info size={30} className="mr-2" />
                                More Info
                            </span>
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-30 w-30 rounded-full border-[2px] p-2 border-opacity-0 cursor-pointer hover:bg-white hover:bg-opacity-15">
                            {/* <RotateCw size={20} className="text-white" /> */}
                            <VolumeX size={20} className="text-white" />
                        </div>
                        <div className="flex items-center">
                            <div className="bg-white w-[2px] h-10"></div>
                            <p className="uppercase bg-gray-800 bg-opacity-50 px-10 py-2 rounded-sm">
                                {type}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subdetails;
