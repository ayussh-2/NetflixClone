import Movie from "./Movie";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
function Movies({ movies, stripTitle, imgPath, genre, handleOpen }) {
    const containerRef = useRef(null);

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
        <div className="text-white  z-10 my-5">
            <p className="capitalize font-medium text-2xl mb-4 px-10 ">
                <p className="flex items-center">
                    {stripTitle}
                    <div className="hidden text-sm text-blue-300">
                        <span>Explore More</span>
                        <span>
                            <ChevronRight size={20} />
                        </span>
                    </div>
                </p>
            </p>

            <div className="relative">
                <button
                    className="absolute left-0 text-white top-0 bottom-0 bg-gradient-to-r from-black to-transparent *:hover:scale-125 px-5 *:duration-200"
                    onClick={scrollLeft}
                >
                    <ChevronLeft size={30} />
                </button>
                <div
                    className="overflow-hidden rounded-md flex gap-2"
                    ref={containerRef}
                >
                    {movies.map((movie, index) => {
                        return (
                            <Movie
                                key={index}
                                movie={movie}
                                imgPath={imgPath}
                                genre={genre}
                                handleOpen={handleOpen}
                            />
                        );
                    })}
                </div>
                <button
                    className="absolute right-0 top-0 bottom-0 px-5 bg-gradient-to-r from-transparent to-black *:hover:scale-125 *:duration-200"
                    onClick={scrollRight}
                >
                    <ChevronRight size={30} />
                </button>
            </div>
        </div>
    );
}

export default Movies;
