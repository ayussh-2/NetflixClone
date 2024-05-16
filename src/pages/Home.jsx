import Navbar from "../components/Navbar";
import bg from "../assets/bg.mp4";
import Subdetails from "../components/Subdetails";
import Movies from "../components/Movies";
import Footer from "../components/Footer";
import MovieModal from "../components/MovieModal";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Home({
    isOpen,
    movie,
    loading,
    genres,
    handleOpen,
    handleClose,
    homePageMovie,
    redirectToMobleMovie,
    fetchRandomMovies,
    imgPath,
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
        isMobile()
            ? redirectToMobleMovie(homePageMovie.tmdbId)
            : handleOpen(homePageMovie.tmdbId);
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

    function isMobile() {
        return window.innerWidth < 768;
    }
    return !loading ? (
        <div className="font-poppins  bg-[#141414]">
            <div className="absolute z-40 md:z-20 w-full">
                <Navbar />
            </div>
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
                <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#141414] via-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0)] z-1"></div>
                <video
                    src={bg}
                    autoPlay
                    loop
                    muted
                    className="w-full h-auto object-cover -z-10 top-0 left-0"
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
