import Navbar from "../components/Navbar";
import MovieNotFound from "../components/MovieNotFound";
import Movie from "../components/Movie";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import MovieModal from "../components/MovieModal";
import { useNavigate } from "react-router-dom";
function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [found, setFound] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const [movie, setMovie] = useState({
        title: "",
        director: "",
        writer: "",
        year: "",
        genre: "",
        rating: "",
        synopsis: "",
        duration: "",
        backdrop: "",
        cast: [],
    });
    const defaultMovie = {
        title: "Default Title",
        director: "Default Director",
        writer: "Default Writer",
        year: "2020",
        genre: "Default Genre",
        rating: "5.0",
        synopsis: "Default Synopsis",
        duration: "120 min",
        cast: "Actor 1" + "," + "Actor 2",
        backdrop:
            "https://image.tmdb.org/t/p/w500/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg",
    };
    const genres = [
        { id: 28, name: "Action" },
        { id: 12, name: "Adventure" },
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 18, name: "Drama" },
        { id: 10751, name: "Family" },
        { id: 14, name: "Fantasy" },
        { id: 36, name: "History" },
        { id: 27, name: "Horror" },
        { id: 10402, name: "Music" },
        { id: 9648, name: "Mystery" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Science Fiction" },
        { id: 10770, name: "TV Movie" },
        { id: 53, name: "Thriller" },
        { id: 10752, name: "War" },
        { id: 37, name: "Western" },
    ];
    const omdbApiKey = "43a26222";

    const tmdbKey = "166f5207509e932ec03973d7747da952";
    const tmdbUrl = "https://api.themoviedb.org/3";

    const imgPath = "https://image.tmdb.org/t/p/w500/";

    function moveToTop() {
        window.scrollTo(0, 0);
    }
    async function fetchTmdbData(id) {
        try {
            // setLoading(true);
            const response = await fetch(
                `${tmdbUrl}/movie/${id}?api_key=${tmdbKey}`
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching movie by id:", error);
            return {};
        }
    }
    async function fetchMovieByOmdb(imdbId) {
        const omdbUrl = `https://www.omdbapi.com/?apikey=${omdbApiKey}`;
        try {
            const response = await fetch(`${omdbUrl}&i=${imdbId}`);
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    function handleClose() {
        setIsOpen(false);
    }
    function handleQuery(query) {
        setSearchQuery(query);
    }
    async function redirectToMobleMovie(id) {
        const tmdbData = await fetchTmdbData(id);
        const imdbId = tmdbData.imdb_id;
        navigate(`/mobile?id=${imdbId}`);
    }
    function handleOpen(id) {
        async function fetchMovie() {
            const tmdbData = await fetchTmdbData(id);
            const imdbId = tmdbData.imdb_id;
            const backdrop = imgPath + tmdbData.backdrop_path;
            const movie = await fetchMovieByOmdb(imdbId);

            setMovie({
                title: movie.Title || defaultMovie.title,
                director: movie.Director || defaultMovie.director,
                writer: movie.Writer || defaultMovie.writer,
                year: movie.Year || defaultMovie.year,
                genre: movie.Genre || defaultMovie.genre,
                rating: movie.Rated || defaultMovie.rating,
                synopsis: movie.Plot || defaultMovie.synopsis,
                duration: movie.Runtime || defaultMovie.duration,
                cast: movie.Actors || defaultMovie.cast,
                backdrop,
            });

            setIsOpen(true);
            moveToTop();
        }
        fetchMovie();
    }
    async function searchMovie(q) {
        // console.log(searchQuery);
        const tmdbKey = "166f5207509e932ec03973d7747da952";
        const tmdbSearchUrl = `https://api.themoviedb.org/3/search/movie?query=${
            q ? q : searchQuery
        }&api_key=${tmdbKey}`;
        try {
            const res = await fetch(tmdbSearchUrl);
            const data = await res.json();
            setMovies(data.results);
            if (data.results.length > 0) {
                setFound(true);
            } else {
                setFound(false);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        searchMovie();
    }, [searchQuery]);
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get("q");
        setSearchQuery(query);
        searchMovie(query);
        console.log(query);
    }, []);
    return (
        <>
            <Navbar query={searchQuery} handleQuery={handleQuery} />

            <div className="bg-[#141414] md:screen min-h-lvh text-white flex items-center justify-center">
                {found ? (
                    <div className="px-2">
                        <p className="md:hidden text-[#999999] text-xl mt-10 font-bold">
                            {" "}
                            Results for: {searchQuery}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 gap-y-2 md:gap-y-16 md:mt-24 mt-5">
                            {movies.map(
                                (movie) =>
                                    movie.backdrop_path !== null && (
                                        <Movie
                                            movie={movie}
                                            imgPath={imgPath}
                                            genre={genres}
                                            handleOpen={handleOpen}
                                            key={movie.id}
                                            redirectToMobleMovie={
                                                redirectToMobleMovie
                                            }
                                        />
                                    )
                            )}
                        </div>
                    </div>
                ) : searchQuery !== "" ? (
                    <MovieNotFound searchTitle={searchQuery} />
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
// imgPath, genre, handleOpen;
