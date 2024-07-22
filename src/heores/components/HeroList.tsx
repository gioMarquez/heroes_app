import { getHeoresByPublisher } from "../helpers/getHeoresByPublisher";
import HeroCard from "./HeroCard";

interface HeroListProps {
	publisher: string;
}

const HeroList = ({ publisher }: HeroListProps) => {
	const heroes = getHeoresByPublisher(publisher);

	return (
		<div className="bg-red-200 grid grid-cols-4">
			{heroes.map((hero) => (
				<div>
					<HeroCard nameHero={hero.superhero} id={hero.id} />
					<p className="text-center font-bold text-blue-700">
						id: {hero.id}
					</p>
				</div>
			))}
		</div>
	);
};

export default HeroList;
