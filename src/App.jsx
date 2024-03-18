import Navbar from "./components/Navbar";
import bg from "./assets/bg.mp4";
import Subdetails from "./components/Subdetails";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import MovieModal from "./components/MovieModal";
function App() {
    const movie = {
        title: "title",
        label: "#1 in Movies Today",
        labelType: "Top 10",
        subdetails:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laudantium cum enim vitae sequi aut ex et aliquid, asperiores dolorum.",
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
        },
        {
            title: "Inception",
            director: "Christopher Nolan",
            year: 2010,
            genre: ["Action", "Adventure", "Sci-Fi"],
            rating: 8.8,
            duration: "2h 28min",
            synopsis:
                "A thief who enters the dreams of others to steal their secrets from their subconscious.",
        },
        {
            title: "Inception",
            director: "Christopher Nolan",
            year: 2010,
            genre: ["Action", "Adventure", "Sci-Fi"],
            rating: 8.8,
            duration: "2h 28min",
            synopsis:
                "A thief who enters the dreams of others to steal their secrets from their subconscious.",
        },
        {
            title: "Inception",
            director: "Christopher Nolan",
            year: 2010,
            genre: ["Action", "Adventure", "Sci-Fi"],
            rating: 8.8,
            duration: "2h 28min",
            synopsis:
                "A thief who enters the dreams of others to steal their secrets from their subconscious.",
        },
        {
            title: "Inception",
            director: "Christopher Nolan",
            year: 2010,
            genre: ["Action", "Adventure", "Sci-Fi"],
            rating: 8.8,
            duration: "2h 28min",
            synopsis:
                "A thief who enters the dreams of others to steal their secrets from their subconscious.",
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
        },
    ];

    return (
        <div className="font-poppins bg-[#141414] ">
            <section id="home" className="relative ">
                <Navbar />
                <Subdetails
                    title={movie.title}
                    label={movie.label}
                    labelType={movie.labelType}
                    subdetails={movie.subdetails}
                    type={movie.type}
                />
                <div className="absolute w-full z-20 bottom-0">
                    <Movies movies={movies} stripTitle={"your best bets"} />
                </div>
                <MovieModal
                    title={movies[0].title}
                    director={movies[0].director}
                    year={movies[0].year}
                    genre={movies[0].genre}
                    rating={movies[0].rating}
                    synopsis={movies[0].synopsis}
                    duration={movies[0].duration}
                />

                <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[rgba(0,0,0,0.9)] via-transparent to-transparent z-1"></div>
                <div className="absolute bottom-0 left-0 w-full h-[600px] bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.7)] z-1"></div>
                <video
                    src={bg}
                    autoPlay
                    loop
                    muted
                    className="w-full h-screen object-cover -z-10 top0 left-0"
                ></video>
            </section>
            <section>
                <div className=" flex flex-col gap-5">
                    <Movies movies={movies} stripTitle={"Continue Watching"} />
                    <Movies
                        movies={movies}
                        stripTitle={"Tv Shows based on books"}
                    />
                    <Movies
                        movies={movies}
                        stripTitle={"Critically acclaimed tv shows"}
                    />
                    <Movies
                        movies={movies}
                        stripTitle={"Hindi language tv shows"}
                    />
                    <Movies movies={movies} stripTitle={"New on Netflix"} />
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
}

export default App;
