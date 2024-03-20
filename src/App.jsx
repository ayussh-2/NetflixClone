import Navbar from "./components/Navbar";
import bg from "./assets/bg.mp4";
import Subdetails from "./components/Subdetails";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import MovieModal from "./components/MovieModal";

import { useEffect, useState } from "react";
function App() {
    const [isOpen, setIsOpen] = useState(false);
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
    };

    const movies = [
        {
            title: "Inception",
            director: "Christopher Nolan",
            year: 2010,
            genre: ["Action", "Adventure", "Sci-Fi"],
            rating: 8.8,
            duration: "2h 28min",
            synopsis:
                "A thief who enters the dreams of others to steal their secrets from their subconscious.",
            cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
        },
        {
            title: "The Shawshank Redemption",
            director: "Frank Darabont",
            year: 1994,
            genre: ["Drama"],
            rating: 9.3,
            duration: "2h 22min",
            synopsis:
                "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        },
        {
            title: "Pulp Fiction",
            director: "Quentin Tarantino",
            year: 1994,
            genre: ["Crime", "Drama"],
            rating: 8.9,
            duration: "2h 34min",
            synopsis:
                "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        },
        {
            title: "The Godfather",
            director: "Francis Ford Coppola",
            year: 1972,
            genre: ["Crime", "Drama"],
            rating: 9.2,
            duration: "2h 55min",
            synopsis:
                "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            cast: ["Marlon Brando", "Al Pacino", "James Caan"],
        },
        {
            title: "The Dark Knight",
            director: "Christopher Nolan",
            year: 2008,
            genre: ["Action", "Crime", "Drama"],
            rating: 9.0,
            duration: "2h 32min",
            synopsis:
                "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        },
        {
            title: "Forrest Gump",
            director: "Robert Zemeckis",
            year: 1994,
            genre: ["Drama", "Romance"],
            rating: 8.8,
            duration: "2h 22min",
            synopsis:
                "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
            cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        },
        {
            title: "The Matrix",
            director: "Lana Wachowski, Lilly Wachowski",
            year: 1999,
            genre: ["Action", "Sci-Fi"],
            rating: 8.7,
            duration: "2h 16min",
            synopsis:
                "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
            cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        },
        {
            title: "Fight Club",
            director: "David Fincher",
            year: 1999,
            genre: ["Drama"],
            rating: 8.8,
            duration: "2h 19min",
            synopsis:
                "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
            cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
        },
        {
            title: "Goodfellas",
            director: "Martin Scorsese",
            year: 1990,
            genre: ["Biography", "Crime", "Drama"],
            rating: 8.7,
            duration: "2h 26min",
            synopsis:
                "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
            cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
        },
        {
            title: "Schindler's List",
            director: "Steven Spielberg",
            year: 1993,
            genre: ["Biography", "Drama", "History"],
            rating: 8.9,
            duration: "3h 15min",
            synopsis:
                "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            cast: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes"],
        },
    ];

    const apiKey = "166f5207509e932ec03973d7747da952";

    const apiUrl = "https://api.themoviedb.org/3";
    const imgPath = "https://image.tmdb.org/t/p/w500/";

    const omdbApiKey = "43a26222";
    const omdbUrl = `http://www.omdbapi.com/?apikey=${omdbApiKey}`;

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
            console.log(data);
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

    return !loading ? (
        <div className="font-poppins bg-[#141414]">
            <section id="home" className="relative">
                <Navbar />
                <Subdetails
                    title={homePageMovie.title}
                    label={homePageMovie.label}
                    labelType={homePageMovie.labelType}
                    subdetails={homePageMovie.subdetails}
                    type={homePageMovie.type}
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
            <section>
                <div className="flex flex-col gap-5">
                    <Movies
                        movies={movieList.continueWatching}
                        imgPath={imgPath}
                        genre={genres}
                        stripTitle={"Continue Watching"}
                        handleOpen={handleOpen}
                    />
                    <Movies
                        movies={movieList.tvShowsBasedOnBooks}
                        imgPath={imgPath}
                        genre={genres}
                        stripTitle={"Tv Shows based on books"}
                        handleOpen={handleOpen}
                    />
                    <Movies
                        movies={movieList.criticallyAcclaimedTvShows}
                        imgPath={imgPath}
                        genre={genres}
                        stripTitle={"Critically acclaimed tv shows"}
                        handleOpen={handleOpen}
                    />
                    <Movies
                        movies={movieList.hindiLanguageTvShows}
                        imgPath={imgPath}
                        genre={genres}
                        stripTitle={"Hindi language tv shows"}
                        handleOpen={handleOpen}
                    />
                    <Movies
                        movies={movieList.newOnNetflix}
                        imgPath={imgPath}
                        genre={genres}
                        stripTitle={"New on Netflix"}
                        handleOpen={handleOpen}
                    />
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    ) : (
        <div className="flex items-center justify-center h-screen">
            <p>Loading...</p>
        </div>
    );
}

export default App;
