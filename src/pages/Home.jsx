import Navbar from "../components/Navbar";
import bg from "../assets/bg.mp4";
import Subdetails from "../components/Subdetails";
import Movies from "../components/Movies";
import Footer from "../components/Footer";
import MovieModal from "../components/MovieModal";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const [movieList, setMovieList] = useState({
        bestBets: [],
        continueWatching: [],
        tvShowsBasedOnBooks: [],
        criticallyAcclaimedTvShows: [],
        hindiLanguageTvShows: [],
        newOnNetflix: [],
        forMovieModal: [],
    });
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
    const [loading, setLoading] = useState(true);
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

    const homePageMovie = {
        title: "title",
        label: "#1 in Movies Today",
        labelType: "Top 10",
        subdetails:
            "Thirty years of service leads Maverick to train a group of elite TOPGUN graduates to prepare for a high-profile mission while Maverick battles his past demons.",
        type: "u/a 16+",
        imdbId: "tt1745960",
    };

    const apiKey = "166f5207509e932ec03973d7747da952";

    const apiUrl = "https://api.themoviedb.org/3";
    const imgPath = "https://image.tmdb.org/t/p/w500/";

    const omdbApiKey = "43a26222";
    const omdbUrl = `https://www.omdbapi.com/?apikey=${omdbApiKey}`;

    async function fetchRandomMovies(numberOfMovies) {
        try {
            setLoading(true);
            const response = await fetch(
                `${apiUrl}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`
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
    async function fetchTmdbData(id) {
        try {
            // setLoading(true);
            const response = await fetch(
                `${apiUrl}/movie/${id}?api_key=${apiKey}`
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching movie by id:", error);
            return {};
        }
    }
    async function fetchMovieByOmdb(imdbId) {
        try {
            const response = await fetch(`${omdbUrl}&i=${imdbId}`);
            const data = await response.json();
            // console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    function handleClose() {
        setIsOpen(false);
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
    function homeMovie() {
        async function fetchMovie() {
            const imdbId = homePageMovie.imdbId;
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
                backdrop:
                    "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
            });

            setIsOpen(true);
            moveToTop();
        }
        fetchMovie();
    }
    useEffect(() => {
        async function insertMovies() {
            const movies = await fetchRandomMovies(60);
            // console.log(movies);
            const bestBets = movies.slice(0, 10);
            const continueWatching = movies.slice(10, 20);
            const tvShowsBasedOnBooks = movies.slice(20, 30);
            const criticallyAcclaimedTvShows = movies.slice(30, 40);
            const hindiLanguageTvShows = movies.slice(40, 50);
            const newOnNetflix = movies.slice(50, 60);
            const forMovieModal = movies.slice(21, 26);
            setMovieList((prevMovieList) => ({
                ...prevMovieList,
                bestBets,
                continueWatching,
                tvShowsBasedOnBooks,
                criticallyAcclaimedTvShows,
                hindiLanguageTvShows,
                newOnNetflix,
                forMovieModal,
            }));
        }
        insertMovies();
    }, []);
    function moveToTop() {
        window.scrollTo(0, 0);
    }
    async function redirectToMobleMovie(id) {
        const tmdbData = await fetchTmdbData(id);
        const imdbId = tmdbData.imdb_id;

        navigate(`/mobile?id=${imdbId}`);
    }
    return !loading ? (
        <div className="font-poppins bg-[#141414]">
            <Navbar />
            <section id="home" className="relative hidden md:block">
                <Subdetails
                    title={homePageMovie.title}
                    label={homePageMovie.label}
                    labelType={homePageMovie.labelType}
                    subdetails={homePageMovie.subdetails}
                    type={homePageMovie.type}
                    handleClick={homeMovie}
                />
                <div className="absolute w-full z-20 bottom-0">
                    <Movies
                        movies={movieList.bestBets}
                        imgPath={imgPath}
                        genre={genres}
                        stripTitle={"your best bets"}
                        handleOpen={handleOpen}
                    />
                </div>
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
                            movies={movieList.forMovieModal}
                            handleClose={handleClose}
                            backdrop={movie.backdrop}
                        />
                    )}
                </AnimatePresence>

                <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[rgba(0,0,0,0.9)] via-transparent to-transparent z-1"></div>
                <div className="absolute bottom-0 left-0 w-full h-[600px] bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.7)] z-1"></div>
                <video
                    src={bg}
                    autoPlay
                    loop
                    muted
                    className="w-full h-screen object-cover -z-10 top-0 left-0"
                ></video>
            </section>
            <section className="pt-20 ">
                <div className="flex absolute z-30 w-full flex-col md:gap-5 bg-[#141414]">
                    <Movies
                        movies={movieList.continueWatching}
                        imgPath={imgPath}
                        genre={genres}
                        stripTitle={"Continue Watching"}
                        handleOpen={handleOpen}
                        redirectToMobleMovie={redirectToMobleMovie}
                    />
                    <Movies
                        movies={movieList.tvShowsBasedOnBooks}
                        imgPath={imgPath}
                        genre={genres}
                        stripTitle={"Tv Shows based on books"}
                        handleOpen={handleOpen}
                        redirectToMobleMovie={redirectToMobleMovie}
                    />
                    <Movies
                        movies={movieList.criticallyAcclaimedTvShows}
                        imgPath={imgPath}
                        genre={genres}
                        stripTitle={"Critically acclaimed tv shows"}
                        handleOpen={handleOpen}
                        redirectToMobleMovie={redirectToMobleMovie}
                    />
                    <Movies
                        movies={movieList.hindiLanguageTvShows}
                        imgPath={imgPath}
                        genre={genres}
                        stripTitle={"Hindi language tv shows"}
                        handleOpen={handleOpen}
                        redirectToMobleMovie={redirectToMobleMovie}
                    />
                    <Movies
                        movies={movieList.newOnNetflix}
                        imgPath={imgPath}
                        genre={genres}
                        stripTitle={"New on Netflix"}
                        handleOpen={handleOpen}
                        redirectToMobleMovie={redirectToMobleMovie}
                    />
                    <Footer />
                </div>
            </section>
        </div>
    ) : (
        <div className="flex items-center justify-center h-screen">
            <p>Loading...</p>
        </div>
    );
}

export default Home;
