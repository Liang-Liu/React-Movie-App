const posterURL = `https://image.tmdb.org/t/p/original/`;

const Movie = ({ movie }) => {
	function ratingColor() {
		let ratingClass = "rating";

		if (movie.vote_average >= 8) {
			ratingClass = "rating red";
		} else if (movie.vote_average < 8 && movie.vote_average >= 6.5) {
			ratingClass = "rating yellow";
		} else if (movie.vote_average < 6.5) {
			ratingClass = "rating green";
		}

		return ratingClass;
	}

	return (
		<div className="cell">
			<div className="poster-container">
				<img src={posterURL + movie.poster_path} alt={movie.title} />

				<div className="overview-container">
					<p>{movie.overview}</p>
				</div>
			</div>

			<div className="cell-details">
				<h4 className="cell-name">{movie.title}</h4>
				<div className={ratingColor()}>{movie.vote_average}</div>
			</div>
		</div>
	);
};

export default Movie;
