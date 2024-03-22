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
                <div
                    className="absolute left-0 text-white top-0 bottom-0 bg-gradient-to-r from-black to-transparent"
                    onClick={scrollLeft}
                >
                    <span className="hover:scale-125 duration-200">
                        <ChevronLeft size={30} />
                    </span>
                </div>
                <div
                    className="flex gap-2 overflow-x-hidden"
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
                <div
                    className="absolute right-0 top-0 text-white bottom-0 px-3 bg-gradient-to-r from-transparent to-black"
                    onClick={scrollRight}
                >
                    <span className="hover:scale-125 duration-200">
                        <ChevronRight size={30} />
                    </span>
                </div>
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
