import { useEffect } from "react";
import logo from "../assets/logo.svg";
function MobileMovie() {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const imdbId = urlParams.get("id");
        fetchMovieByOmdb(imdbId);
    }, []);
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
    return (
        <div>
            <div className="flex items-center justify-center">
                <img src={logo} alt="" className="h-32 w-auto" />
            </div>
        </div>
    );
}

export default MobileMovie;
