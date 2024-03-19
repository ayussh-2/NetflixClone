import { Plus, Play } from "lucide-react";
function MovieCard({ duration, year, synopsis }) {
    const src =
        "https://www.tallengestore.com/cdn/shop/products/Oppenheimer-CillianMurphy-ChristopherNolan-HollywoodMoviePoster_1_grande.jpg?v=1647416509";
    return (
        <div className="bg-[#2f2f2fd2] flex flex-col w-60 rounded-md text-[#bcbcbc]">
            <div className="w-60 h-32 overflow-hidden relative rounded-md">
                <img src={src} alt="movieLogo" className="rounded-md" />
                <div className="absolute inset-0 flex justify-center items-center">
                    <button className="movie-card-btn z-10">
                        <Play fill={"#fff"} />
                    </button>
                </div>
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[rgba(0,0,0,0.4)] via-transparent to-transparent z-1"></div>
                <div className="absolute top-2 right-0">
                    <span className="text-white text-sm px-3 tracking-wider">
                        {duration}
                    </span>
                </div>
            </div>
            <div className="px-5 pb-10">
                <div className="flex items-center justify-between my-5">
                    <div className="flex flex-col items-start">
                        <div className="flex gap-2 items-center">
                            <p className="text-gray-400 text-xs border-[1px] px-1 border-gray-400 font-medium">
                                U/A 16+
                            </p>
                            <p className="text-gray-400 border-[1px] border-gray-400 text-[10px] px-1">
                                HD
                            </p>
                        </div>
                        <div>
                            <p className="text-lg">{year}</p>
                        </div>
                    </div>
                    <div>
                        <button className="movie-card-btn">
                            <Plus size={20} />
                        </button>
                    </div>
                </div>
                <div className="text-sm">
                    <p>{synopsis}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
