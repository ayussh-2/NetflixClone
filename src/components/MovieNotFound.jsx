function MovieNotFound({ searchTitle }) {
    return (
        <div className="text-xs flex flex-col items-start justify-center gap-3">
            <p>Your search for {searchTitle} did not find any matches.</p>
            <p>Suggestions:</p>
            <ul className="ml-10 list-disc">
                <li>Try diffrent keywords</li>
                <li>Looking for a movie or TV show?</li>
                <li>Try using a movie, TV show title, an actor or director.</li>
                <li>Try a genre, such as comedy, romance, sports or drama.</li>
            </ul>
        </div>
    );
}

export default MovieNotFound;
