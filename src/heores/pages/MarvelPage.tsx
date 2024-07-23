import HeroList from "../components/HeroList";

const MarvelPage = () => {
	return (
		<div className="bg-black text-white">
			<p className="">Marvel Comics Page</p>
			<HeroList publisher="Marvel Comics" />
		</div>
	);
};

export default MarvelPage;
