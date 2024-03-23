import { Route, Routes, useLocation, useNavigate } from "react-router";
import { AnimatePresence } from "framer-motion";
import { Suspense, useEffect } from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MobileMovie from "./pages/MobileMovie";
import { useState } from "react";
function App() {
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [found, setFound] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
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
    const location = useLocation();
    const navigate = useNavigate();
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
    const homePageMovie = {
        title: "title",
        label: "#1 in Movies Today",
        labelType: "Top 10",
        subdetails:
            "Thirty years of service leads Maverick to train a group of elite TOPGUN graduates to prepare for a high-profile mission while Maverick battles his past demons.",
        type: "u/a 16+",
        imdbId: "tt1745960",
        tmdbId: 361743,
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
            // console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    async function fetchRandomMovies(numberOfMovies) {
        try {
            setLoading(true);
            const response = await fetch(
                `${tmdbUrl}/discover/movie?sort_by=popularity.desc&api_key=${tmdbKey}`
            );
            const data = await response.json();
            const randomMovies = [];
            for (let i = 0; i < numberOfMovies; i++) {
                const randomIndex = Math.floor(
                    Math.random() * data.results.length
                );
                randomMovies.push(data.results[randomIndex]);
            }

            return randomMovies;
        } catch (error) {
            console.error("Error fetching random movies:", error);
            return [];
        } finally {
            setLoading(false);
        }
    }

    function justOpen() {
        setIsOpen(true);
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
            // console.log("fetching movie by id:", id);
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

    async function searchMovie(query) {
        // console.log("searching for:", query);
        setSearchQuery(query);
        const tmdbKey = "166f5207509e932ec03973d7747da952";
        const tmdbSearchUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${tmdbKey}`;
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
        searchMovie(searchQuery);
    }, [searchQuery]);

    return (
        <div className="no-scrollbar overflow-x-hidden">
            <AnimatePresence>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes location={location}>
                        <Route
                            path="/"
                            element={
                                <Home
                                    fetchRandomMovies={fetchRandomMovies}
                                    fetchMovieByOmdb={fetchMovieByOmdb}
                                    handleOpen={handleOpen}
                                    handleClose={handleClose}
                                    redirectToMobleMovie={redirectToMobleMovie}
                                    moveToTop={moveToTop}
                                    imgPath={imgPath}
                                    defaultMovie={defaultMovie}
                                    genres={genres}
                                    homePageMovie={homePageMovie}
                                    isOpen={isOpen}
                                    movie={movie}
                                    loading={loading}
                                    justOpen={justOpen}
                                />
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <div className="text-red">
                                    Not Found Err:404
                                </div>
                            }
                        />
                        <Route path="/mobile" element={<MobileMovie />} />
                        <Route
                            path="/search"
                            element={
                                <Search
                                    searchMovie={searchMovie}
                                    query={searchQuery}
                                    movies={movies}
                                    movie={movie}
                                    found={found}
                                    imgPath={imgPath}
                                    genres={genres}
                                    handleOpen={handleOpen}
                                    redirectToMobleMovie={redirectToMobleMovie}
                                    handleClose={handleClose}
                                    handleQuery={handleQuery}
                                    isOpen={isOpen}
                                />
                            }
                        />
                    </Routes>
                </Suspense>
            </AnimatePresence>
        </div>
    );
}

export default App;
