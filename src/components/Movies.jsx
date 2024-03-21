import Movie from "./Movie";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
function Movies({
    movies,
    stripTitle,
    imgPath,
    genre,
    handleOpen,
    redirectToMobleMovie,
}) {
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
        <div className="text-[#999999] md:text-white my-5">
            <p className="capitalize font-medium text-2xl mb-4 px-5 sm:px-10">
                <span className="flex items-center">
                    {stripTitle}
                    <span className="hidden sm:flex text-sm text-blue-300 ml-2">
                        Explore More
                        <ChevronRight size={20} />
                    </span>
                </span>
            </p>

            <div className="hidden  relative">
                <button
                    className="absolute left-0 text-white top-0 bottom-0 bg-gradient-to-r from-black to-transparent hover:scale-125 duration-200 px-3 sm:px-5"
                    onClick={scrollLeft}
                >
                    <ChevronLeft size={30} />
                </button>
                <div className="overflow-x-auto overflow-y-hidden rounded-md flex gap-2 px-3 sm:px-0">
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
                    className="absolute right-0 top-0 bottom-0 px-3 bg-gradient-to-r from-transparent to-black hover:scale-125 duration-200"
                    onClick={scrollRight}
                >
                    <ChevronRight size={30} />
                </button>
            </div>
            <div
                className="flex gap-2 overflow-x-auto"
                style={{ maxWidth: "calc(100vw)" }}
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
            </div>
        </div>
    );
}

export default Movies;
