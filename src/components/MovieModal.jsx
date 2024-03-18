import { Play, Plus, ThumbsUp, VolumeX } from "lucide-react";
function MovieModal({
    title,
    director,
    year,
    genre,
    rating,
    synopsis,
    duration,
}) {
    return (
        <div className="absolute z-20 flex items-center justify-center bg-black bg-opacity-60 h-full text-white w-full">
            <div className="bg-[#181818] flex flex-col">
                <div className=" rounded-md relative">
                    <div className="relative overflow-hidden h-[400px] w-[700px] rounded-md">
                        <img
                            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className="flex items-center justify-between absolute bottom-4 left-4 z-10 mb-10 w-[650px] px-5">
                            <div className="flex items-center gap-5">
                                <button className="bg-white text-black px-10 py-2 rounded-md font-semibold hover:opacity-80 ">
                                    <span className="flex flex-row items-center text-lg">
                                        <Play
                                            size={20}
                                            fill="#111"
                                            className="mr-2"
                                        />
                                        Play
                                    </span>
                                </button>
                                <button className="movie-card-btn">
                                    <Plus size={20} />
                                </button>
                                <button className="movie-card-btn">
                                    <ThumbsUp size={20} />
                                </button>
                            </div>
                            <div>
                                <button className="h-30 w-30 rounded-full border-[2px] p-2 border-opacity-0 cursor-pointer hover:bg-white hover:bg-opacity-40">
                                    {/* <RotateCw size={20} className="text-white" /> */}
                                    <VolumeX size={20} className="text-white" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-[600px] bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.7)] z-1"></div>
                </div>
                <div>
                    <div>
                        <div className="flex items-center gap-2">
                            <p className="text-green-500 text-sm">62% Match</p>
                            <p className="text-gray-400 text-sm">{year}</p>
                            <p className="text-gray-400 text-sm">{duration}</p>
                            <p className="text-gray-400 border-[1px] border-gray-400 text-sm px-1">
                                HD
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieModal;
