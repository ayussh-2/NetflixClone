import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MovieModal from "./MovieModal";
function Movie({ movie }) {
    const [view, setView] = useState(false);
    return (
        <div className="">
            {/* <MovieModal /> */}
            <AnimatePresence>
                {view && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`bg-[#181818] z-50 absolute  drop-shadow-2xl shadow-2xl rounded-md`}
                    >
                        <div className="w-80 h-40 overflow-hidden rounded-md">
                            <img
                                src="https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg"
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
                                <p>Suspence</p>
                                <p>Dark</p>
                                <p>Thriller</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div
                className={`w-52 h-28 overflow-hidden rounded-sm cursor-pointer `}
                onMouseEnter={() => setView(true)}
                onMouseLeave={() => setView(false)}
                onMouseMove={() => setView(true)}
            >
                <img
                    src="https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Movie;
