import { useEffect } from "react";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { Forward, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
function MobileMovie() {
    const [movie, setMovie] = useState({});
    const navigate = useNavigate();
    const omdbApiKey = "43a26222";
    const omdbUrl = `https://www.omdbapi.com/?apikey=${omdbApiKey}`;
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const imdbId = urlParams.get("id");
        if (imdbId) {
            fetchMovieByOmdb(imdbId);
        } else {
            navigate("/");
        }
    }, []);
    async function fetchMovieByOmdb(imdbId) {
        try {
            const response = await fetch(`${omdbUrl}&i=${imdbId}`);
            const data = await response.json();
            // console.log(data);
            if (data.Response === "False") {
                alert("Movie not found!");
                navigate("/");
            }
            setMovie(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="">
            <div className="relative">
                <div className="flex items-center justify-center   ">
                    <div className="absolute z-10 mt-[5rem]">
                        <Link to={"/"}>
                            <img src={logo} alt="" className="h-32 w-auto" />
                        </Link>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[rgba(0,0,0,1)] via-transparent to-transparent z-1"></div>

                <div className="absolute bottom-0">
                    <div className="left-0 w-full h-[15rem] bg-gradient-to-b to-[rgba(0,0,0,1)] via-transparent from-transparent z-1"></div>
                    <div className="bg-black flex flex-col gap-5 items-center justify-center pb-10  px-10">
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-white font-bold text-4xl text-center">
                                {movie.Title}
                            </p>
                            <div className="flex gap-2 items-center justify-center text-[#999999] my-5">
                                <p className="flex items-center justify-center gap-1">
                                    <Star fill="#fff" />
                                    {movie.imdbRating}
                                </p>
                                <p>{movie.Year}</p>
                                <p>{movie.Runtime}</p>
                            </div>
                        </div>
                        <p className="text-white text-4xl font-semibold font-poppins text-center">
                            Watch Netflix on your phone or tablet
                        </p>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.netflix.mediaclient&hl=en&gl=US&pli=1"
                            target="_blank"
                            className="bg-[#d4001d] rounded-sm w-full py-5 mt-5 text-center text-white text-2xl "
                        >
                            Get the free app
                        </a>
                    </div>
                    <div className="bg-[#141414] px-16 w-full py-10  text-white ">
                        <Link to={"/"}>
                            <div className="flex items-center justify-center text-nowrap gap-5">
                                <button className="movie-card-btn">
                                    <Forward />
                                </button>
                                <p className="text-xl font-light">
                                    Go to Netflix.com
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
                <img
                    src={movie.Poster}
                    className="w-full h-[120vh] object-cover -z-10 top-0 left-0"
                    alt=""
                />
            </div>
        </div>
    );
}

export default MobileMovie;
