import Navbar from "../components/Navbar";
import MovieNotFound from "../components/MovieNotFound";
import Movie from "../components/Movie";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import MovieModal from "../components/MovieModal";

function Search({
    handleQuery,
    searchMovie,
    query,
    movies,
    movie,
    handleOpen,
    handleClose,
    redirectToMobleMovie,
    found,
    isOpen,
    genres,
    imgPath,
}) {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const q = urlParams.get("q");
        handleQuery(q);
        console.log("query:", q);
        searchMovie(q);
    }, []);
    return (
        <>
            <Navbar query={query} handleQuery={handleQuery} />

            <div className="bg-[#141414] md:screen min-h-lvh text-white flex items-center justify-center">
                {found ? (
                    <div className="px-2">
                        <p className="md:hidden text-[#999999] text-xl mt-10 font-bold">
                            {" "}
                            Results for: {query}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 gap-y-2 md:gap-y-16 md:mt-24 mt-5">
                            {movies.map(
                                (movie) =>
                                    movie.backdrop_path !== null && (
                                        <Movie
                                            key={movie.id}
                                            movie={movie}
                                            imgPath={imgPath}
                                            genre={genres}
                                            handleOpen={handleOpen}
                                            redirectToMobleMovie={
                                                redirectToMobleMovie
                                            }
                                        />
                                    )
                            )}
                        </div>
                    </div>
                ) : query !== "" ? (
                    <MovieNotFound searchTitle={query} />
                ) : null}

                <AnimatePresence>
                    {isOpen && (
                        <MovieModal
                            title={movie.title}
                            director={movie.director}
                            writer={movie.writer}
                            year={movie.year}
                            genre={movie.genre}
                            rating={movie.rating}
                            synopsis={movie.synopsis}
                            duration={movie.duration}
                            cast={movie.cast}
                            movies={movies}
                            handleClose={handleClose}
                            backdrop={movie.backdrop}
                        />
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}

export default Search;
