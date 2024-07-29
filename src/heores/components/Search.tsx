import { useEffect, useState } from "react";

const Search = () => {
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        console.log(searchValue)
    }, [searchValue])

	return (
		<div className="flex flex-col items-center ">
			<div>
				<p className="p-2 text-3xl font-bold text-blue-700">
					Searching
				</p>
			</div>
			<div>
				<input
					type="text"
					placeholder="Type a hero..."
					className="rounded-l-xl px-3 text-gray-500 font-bold text-2xl"
                    onChange={(e) => setSearchValue(e.target.value)}
				/>
                <button className="text-white text-2xl rounded-r-2xl bg-blue-600 px-4 hover:bg-green-800/80">Buscar</button>
			</div>
		</div>
	);
};

export default Search;
