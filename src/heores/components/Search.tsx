import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
	const [searchValue, setSearchValue] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		console.log(searchValue);


	}, [searchValue]);

	const onSearchSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (searchValue.trim().length < 1) return;
		navigate(`?q=${searchValue}`);
	};


	return (
		<div className="flex flex-col items-center hover:scale-110 duration-200">
			<div>
				<p className="p-2 text-3xl font-bold text-blue-700">
					Searching
				</p>
			</div>
			<div className="flex items-center">
				<input
					type="text"
					placeholder="Type a hero..."
					className="rounded-l-xl px-3 text-gray-500 font-bold text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
					onChange={(e) => setSearchValue(e.target.value)}
				/>
				<button
					className="text-white text-2xl rounded-r-2xl bg-blue-600 px-4 hover:bg-green-800/80"
					onClick={(event) => onSearchSubmit(event)}
				>
					Buscar
				</button>
			</div>
		</div>
	);
};

export default Search;
