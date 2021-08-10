import { useEffect } from "react";
import { useState } from "react";

const Form = ({ searchMovieArrFunc, apikey }) => {
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		async function fetchSearchMovies(searchTerm) {
			const res = await fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchTerm}&include_adult=false`
			);
			const resJson = await res.json();
			searchMovieArrFunc(resJson.results);
		}
		if (searchTerm) {
			fetchSearchMovies(searchTerm);
		}
	}, [apikey, searchMovieArrFunc, searchTerm]);

	function handleSubmit(e) {
		e.preventDefault();

		setSearchTerm("");
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="search"
				id="searchBar"
				value={searchTerm}
				placeholder="Search..."
				onChange={(e) => {
					setSearchTerm(e.target.value);
				}}
			/>
			<button type="submit">
				<i className="fas fa-search fa-lg"></i>
			</button>
		</form>
	);
};

export default Form;
