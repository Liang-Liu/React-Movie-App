import { useState } from "react";
import { useEffect } from "react";
import Movie from "./components/Movie.js";
import Form from "./components/Form.js";

const apikey = "7f892db17123b0f41de97b678f673660";

function App() {
	const [moviesArr, setMoviesArr] = useState([]);

	useEffect(() => {
		async function fetchPopularMovies() {
			const res = await fetch(
				`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`
			);
			const resJson = await res.json();
			setMoviesArr(resJson.results);
		}
		fetchPopularMovies();
	}, []);

	function searchMovieArr(MoviesArr) {
		setMoviesArr(MoviesArr);
	}

	return (
		<div className="App">
			<header>
				<Form searchMovieArrFunc={searchMovieArr} apikey={apikey} />
			</header>
			<main>
				{moviesArr.map((ele, idx) => (
					<Movie movie={ele} key={idx} />
				))}
			</main>
		</div>
	);
}

export default App;
