import { Play, Plus, ThumbsUp, VolumeX, X } from "lucide-react";
import MovieCard from "./MovieCard";
import { AnimatePresence, motion } from "framer-motion";
function MovieModal({
    title,
    director,
    writer,
    year,
    genre,
    rating,
    synopsis,
    duration,
    cast,
    movies,
    handleClose,
    backdrop,
}) {
    function genRandomNumber(upperLimit, lowerLimit) {
        return Math.floor(Math.random() * upperLimit) + lowerLimit;
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="absolute z-20  flex items-center overflow-hidden justify-center bg-[#181818] bg-opacity-80 h-screen text-white w-full"
        >
            <div className=" w-[65%]  overflow-y-scroll h-screen py-10 rounded-lg flex flex-col">
                <div className=" rounded-md relative">
                    <div className="relative overflow-hidden h-[400px]  rounded-md">
                        <img
                            src={backdrop}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-0 right-0 p-5 z-10">
                            <button
                                className="bg-[#181818] rounded-full p-2"
                                onClick={() => handleClose()}
                            >
                                <X />
                            </button>
                        </div>
                        <div className="flex items-center justify-between absolute bottom-4 left-4 z-10 mb-10 w-full px-5">
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
                            <div className="mx-5">
                                <button className="h-30 w-30 rounded-full border-[2px] p-2 border-opacity-0 cursor-pointer hover:bg-white hover:bg-opacity-40">
                                    {/* <RotateCw size={20} className="text-white" /> */}
                                    <VolumeX size={20} className="text-white" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-[600px] bg-gradient-to-b from-transparent via-transparent to-[#181818] z-1"></div>
                </div>
                <div className="bg-[#181818] pb-20">
                    <div className="px-10 flex">
                        <div className="flex flex-col w-3/4">
                            <div className="flex items-center gap-2">
                                <p className="text-green-500 text-[15px] font-semibold">
                                    {Math.floor(Math.random() * 50) + 50}% Match
                                </p>
                                <p className="text-gray-400 text-[15px]">
                                    {year}
                                </p>
                                <p className="text-gray-400 text-[15px]">
                                    {duration}
                                </p>
                                <p className="text-gray-400 border-[1px] border-gray-400 text-[15px] px-1">
                                    HD
                                </p>
                            </div>
                            <div className="flex gap-2 items-center my-2">
                                <p className="text-gray-400 text-xs border-[1px] px-1 border-gray-400 font-medium">
                                    {rating}
                                </p>
                                <p className="text-sm">{genre}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="bg-red-600 text-white font-bold rounded-lg p-1 h-14 w-14 scale-[0.6]">
                                    <p className="text-center text-base uppercase font-bold">
                                        TOP 10
                                    </p>
                                </div>
                                <p className="font-semibold text-xl">
                                    #{Math.floor(Math.random() * 10)} in Movies
                                    Today
                                </p>
                            </div>
                            <div className="text-[16px] mt-5">{synopsis}</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex  text-[14px] gap-2">
                                <span className="text-[#777777]">Cast:</span>
                                <span className="capitalize">{cast}</span>
                            </div>
                            <div className="flex my-5 text-[14px] gap-2">
                                <span className="text-[#777777]">Genres:</span>
                                <span className="capitalize">{genre}</span>
                            </div>
                            <div className="flex  text-[14px] gap-2">
                                <span className="text-[#777777]">
                                    Director:
                                </span>
                                <span className="capitalize">{director}</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 px-10">
                        <p className="font-semibold text-2xl my-5">
                            More Like This
                        </p>
                        <div className="grid grid-cols-3 gap-16">
                            {movies.map((movie, index) => {
                                if (movie.backdrop_path !== null) {
                                    return (
                                        <MovieCard
                                            key={index}
                                            duration={
                                                movie.runtime ||
                                                genRandomNumber(120, 60)
                                            }
                                            year={movie.year}
                                            synopsis={movie.overview}
                                            backdrop={movie.backdrop_path}
                                        />
                                    );
                                }
                            })}
                        </div>
                    </div>
                    <div className="mt-20 px-10">
                        <p className="font-semibold text-2xl my-5">
                            Trailers & More
                        </p>
                        <div className="grid grid-cols-3">
                            <div>
                                <div className="w-60 h-32  overflow-hidden rounded-md relative">
                                    <img
                                        src={backdrop}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex justify-center items-center">
                                        <button className="movie-card-btn ">
                                            <Play fill={"#fff"} />
                                        </button>
                                    </div>
                                </div>
                                <div className=" ml-5 mt-5">
                                    <p className="flex items-center text-[1.1rem]">
                                        Teaser:&nbsp;<p>{title}</p>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="w-60 h-32 overflow-hidden rounded-md relative">
                                    <img
                                        src={backdrop}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex justify-center items-center">
                                        <button className="movie-card-btn ">
                                            <Play fill={"#fff"} />
                                        </button>
                                    </div>
                                </div>
                                <div className=" ml-5 mt-5">
                                    <p className="flex items-center text-[1.1rem]">
                                        Trailer:&nbsp;<p>{title}</p>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="w-60 h-32 overflow-hidden rounded-md relative">
                                    <img
                                        src={backdrop}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex justify-center items-center">
                                        <button className="movie-card-btn ">
                                            <Play fill={"#fff"} />
                                        </button>
                                    </div>
                                </div>
                                <div className=" ml-5 mt-5">
                                    <p className="flex items-center text-[1.1rem]">
                                        Teaser:&nbsp;<p>{title}</p>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="w-60 h-32 my-5 overflow-hidden rounded-md relative">
                                    <img
                                        src={backdrop}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex justify-center items-center">
                                        <button className="movie-card-btn ">
                                            <Play fill={"#fff"} />
                                        </button>
                                    </div>
                                </div>
                                <div className=" ml-5 mt-5">
                                    <p className="flex items-center text-[1.1rem]">
                                        Teaser:&nbsp;<p>{title}</p>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="w-60 h-32 my-5 overflow-hidden rounded-md relative">
                                    <img
                                        src={backdrop}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex justify-center items-center">
                                        <button className="movie-card-btn ">
                                            <Play fill={"#fff"} />
                                        </button>
                                    </div>
                                </div>
                                <div className=" ml-5 mt-5">
                                    <p className="flex items-center text-[1.1rem]">
                                        Teaser:&nbsp;<p>{title}</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 px-20">
                        <p className=" text-2xl my-5">
                            <span className="font-light"> About </span>
                            <span className="font-semibold">{title}</span>
                        </p>
                        <div className="flex flex-col gap-2">
                            <p className="flex items-center text-[14px] gap-1">
                                <span className="text-[#777777]">
                                    Director:
                                </span>
                                <span>{director}</span>
                            </p>
                            <p className="flex items-center text-[14px] gap-1">
                                <span className="text-[#777777]">Writer:</span>
                                <span>{writer}</span>
                            </p>
                            <p className="flex items-center text-[14px] gap-1">
                                <span className="text-[#777777]">Cast:</span>
                                <span>{cast}</span>
                            </p>
                            <p className="flex items-center text-[14px] gap-1">
                                <span className="text-[#777777]">Genres:</span>
                                <span>{genre}</span>
                            </p>
                            <p className="flex items-center text-[14px] gap-1">
                                <span className="text-[#777777]">Rating:</span>
                                <span>{rating}</span>
                            </p>
                            <p className="flex items-center text-[14px] gap-1">
                                <span className="text-[#777777]">
                                    Duration:
                                </span>
                                <span>{duration}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default MovieModal;
