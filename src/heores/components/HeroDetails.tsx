import defaultImg from "../../assets/default/heroShadow.jpg";

const HeroDetails = () => {
	const data = [
		{ id: 0, attribute: "Super Hero", value: "superhero" },
		{ id: 1, attribute: "Publisher", value: "publisher" },
		{ id: 2, attribute: "Alter Ego", value: "alter_ego" },
		{ id: 3, attribute: "First Appearance", value: "first_appearance" },
		{ id: 4, attribute: "Characters", value: "characters" },
	];
	return (
		<div>
			<img src={defaultImg} className="size-40" alt="Hero Image" />
			{data.map((d) => (
				<div key={d.id}>
					<p className="font-bold">
						{d.attribute}:{" "}
						<span className="font-normal">{d.value}</span>
					</p>
				</div>
			))}
		</div>
	);
};

export default HeroDetails;
