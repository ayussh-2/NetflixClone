import Navbar from "../components/Navbar";
import bg from "../assets/bg.mp4";
import Subdetails from "../components/Subdetails";
import Movies from "../components/Movies";
import Footer from "../components/Footer";
import MovieModal from "../components/MovieModal";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home({
    isOpen,
    movie,
    loading,
    genres,
    handleOpen,
    handleClose,
    defaultMovie,
    homePageMovie,
    redirectToMobleMovie,
    moveToTop,
    fetchRandomMovies,
    fetchMovieByOmdb,
    imgPath,
    justOpen,
}) {
    const [movieList, setMovieList] = useState({
        bestBets: [],
        continueWatching: [],
        tvShowsBasedOnBooks: [],
        criticallyAcclaimedTvShows: [],
        hindiLanguageTvShows: [],
        newOnNetflix: [],
        forMovieModal: [],
    });
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

            justOpen();
            moveToTop();
        }
        fetchMovie();
    }
    useEffect(() => {
        async function insertMovies() {
            const movies = await fetchRandomMovies(60);
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

    return !loading ? (
        <div className="font-poppins  bg-[#141414]">
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
