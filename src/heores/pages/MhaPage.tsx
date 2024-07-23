import { HeroCard, HeroDetails } from "../components";
import { heroes } from "../data/HeroesData";

const MhaPage = () => {
	const myHeroesA = heroes.filter(
		(mhaHero) => mhaHero.publisher === "My Hero Academia"
	);
	return (
		<div className="bg-black text-white">
			<h1 className="text-2xl text-blue-500 font-semibold">
				My Hero Academia Heroes
			</h1>

			<div className="grid grid-cols-3">
				{myHeroesA.map((hero) => (
					<HeroCard key={hero.id} nameHero={hero.superhero} id={hero.id} />
				))}
				
				<div className="bg-white text-blue-500">
					<HeroDetails />
				</div>
			</div>
		</div>
	);
};

export default MhaPage;
