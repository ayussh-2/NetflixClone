import { Play, Plus, ThumbsUp, ChevronDown, Dot } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Movie({ movie, imgPath, genre, handleOpen }) {
    const [view, setView] = useState(false);
    async function handleClick() {
        await handleOpen(movie.id);
        setView(false);
    }
    console.log(movie);
    return (
        <div className="">
            <AnimatePresence>
                {view && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`bg-[#181818] cursor-pointer z-50 absolute  drop-shadow-2xl shadow-2xl rounded-md`}
                        onMouseLeave={() => setView(false)}
                        onClick={() => handleClick()}
                        style={
                            {
                                // left: `${currentPos}px`,
                                // transform: `translateX(${currentPos}px)`,
                            }
                        }
                    >
                        <div className="w-80 h-40 overflow-hidden rounded-md">
                            <img
                                src={imgPath + `${movie.backdrop_path}`}
                                alt=""
                            />
                        </div>
                        <div className="px-5 py-5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <button className="bg-white rounded-full p-2 hover:opacity-90">
                                        <Play size={20} fill="#111" />
                                    </button>
                                    <button className="movie-card-btn">
                                        <Plus size={20} />
                                    </button>
                                    <button className="movie-card-btn">
                                        <ThumbsUp size={20} />
                                    </button>
                                </div>

                                <button className="movie-card-btn">
                                    <ChevronDown size={20} />
                                </button>
                            </div>
                            <div className="flex items-center justify-start gap-2 text-sm my-5">
                                <p className="text-green-400 font-medium">
                                    98% Match
                                </p>
                                <p className="text-gray-400 text-xs border-[1px] px-1 border-gray-400 font-medium">
                                    U/A 16+
                                </p>
                                <p className="text-gray-400 text-xs">
                                    1h 30min
                                </p>
                                <p className="text-gray-400 border-[1px] border-gray-400 text-xs px-1">
                                    HD
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                {/* <p>Suspence</p>
                                <p>Dark</p>
                                <p>Thriller</p> */}
                                <p className="flex items-center">
                                    {movie.genre_ids.map((id, index) => {
                                        const currentGenre = genre.find(
                                            (g) => g.id === id
                                        );

                                        return (
                                            <span
                                                key={index}
                                                className="flex items-center"
                                            >
                                                {currentGenre.name}
                                                {index !==
                                                    movie.genre_ids.length -
                                                        1 && (
                                                    <Dot
                                                        size={17}
                                                        fill="#fff"
                                                    />
                                                )}
                                            </span>
                                        );
                                    })}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div
                className={`md:w-52 w-42 md:h-28 h-36 overflow-hidden rounded-sm cursor-pointer `}
                onMouseEnter={() => setView(true)}
                onMouseMove={() => setView(true)}
            >
                <img src={imgPath + `${movie.backdrop_path}`} alt="" />
            </div>
        </div>
    );
}

export default Movie;
