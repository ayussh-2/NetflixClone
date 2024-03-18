import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
function Movie({ movie }) {
    return (
        <div>
            <div className="w-40 h-20 overflow-hidden hover:scale-150 duration-300 rounded-md cursor-pointer">
                <img
                    src="https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg"
                    alt=""
                />
            </div>
            <div className="bg-[#181818] ">
                <div className="w-56 h-20 overflow-hidden">
                    <img
                        src="https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <div className="flex items-center justify-between p-5">
                        <div className="flex items-center gap-2">
                            <div className="movie-card-btn">
                                <Play size={20} fill="#111" />
                            </div>
                            <div className="movie-card-btn">
                                <Plus size={20} />
                            </div>
                            <div className="movie-card-btn">
                                <ThumbsUp size={20} />
                            </div>
                        </div>

                        <div className="movie-card-btn">
                            <ChevronDown size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movie;
