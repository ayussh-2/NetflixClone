import Movie from "./Movie";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
function Movies({
    movies,
    stripTitle,
    imgPath,
    genre,
    handleOpen,
    redirectToMobleMovie,
}) {
    const containerRef = useRef(null);
    const [showExplore, setShowExplore] = useState(false);
    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -500,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: 500,
                behavior: "smooth",
            });
        }
    };
    return (
        <div className="text-[#999999] md:text-white my-5">
            <p className="capitalize font-medium text-2xl mb-4 px-5 cursor-pointer sm:px-10">
                <span
                    className="flex items-center"
                    onMouseEnter={() => setShowExplore(true)}
                    onMouseLeave={() => setShowExplore(false)}
                >
                    {stripTitle}
                    <AnimatePresence>
                        {showExplore && (
                            <motion.span
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.2 }}
                                className="hidden sm:flex text-sm text-blue-300 ml-2"
                            >
                                Explore More
                                <ChevronRight size={20} />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </span>
            </p>

            <div className="relative flex items-center">
                <button
                    className="absolute md:opacity-0 hover:opacity-100 duration-200 left-0 md:h-28 h-[90px] md:w-40 top-0 bottom-0 text-white bg-gradient-to-r from-black to-transparent"
                    onClick={scrollLeft}
                >
                    <span className="">
                        <ChevronLeft size={30} />
                    </span>
                </button>
                <div
                    className="flex gap-2 overflow-x-hidden items-center"
                    ref={containerRef}
                >
                    {movies.map((movie, index) => (
                        <Movie
                            key={index}
                            movie={movie}
                            imgPath={imgPath}
                            genre={genre}
                            handleOpen={handleOpen}
                            redirectToMobleMovie={redirectToMobleMovie}
                        />
                    ))}
                </div>

                <button
                    className="absolute md:opacity-0 hover:opacity-100 duration-200 right-0 md:h-28  md:w-20 top-0 bottom-0 h-[90px] text-white bg-gradient-to-l from-black to-transparent"
                    onClick={scrollRight}
                >
                    <span className="">
                        <ChevronRight size={30} />
                    </span>
                </button>
            </div>
            {/* <div
                className="flex gap-2 overflow-x-auto"
                style={{
                    maxWidth: "100vw",
                }}
            >
                {movies.map((movie, index) => (
                    <Movie
                        movie={movie}
                        imgPath={imgPath}
                        genre={genre}
                        handleOpen={handleOpen}
                        redirectToMobleMovie={redirectToMobleMovie}
                    />
                ))}
            </div> */}
        </div>
    );
}

export default Movies;
