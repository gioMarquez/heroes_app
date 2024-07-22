import { HeroCard } from "../components";
import { heroes } from "../data/HeroesData";

const MhaPage = () => {
	const myHeroesA = heroes.filter(
		(mhaHero) => mhaHero.publisher === "My Hero Academia"
	);
	return (
		<div>
			<h1 className="text-2xl text-blue-500 font-semibold">
				My Hero Academia Heroes
			</h1>

			<div className="grid grid-cols-3">
				{myHeroesA.map((hero) => (
					<HeroCard key={hero.id} nameHero={hero.superhero} id={hero.id} />
				))}
				{/* <pre>
          {JSON.stringify(myHeroesA,null,3)}
        </pre> */}
			</div>
		</div>
	);
};

export default MhaPage;
