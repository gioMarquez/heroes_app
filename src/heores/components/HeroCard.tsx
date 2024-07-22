import DefaultIconHero from "../../assets/default/heroShadow.jpg";
// import "./HeroCard.css"; // Asegúrate de que el archivo CSS esté importado

import Icon_AllMight from "../../assets/heroes/MHA/allmight.jpg";
import Icon_Deku from "../../assets/heroes/MHA/deku.jpg";
import Icon_Bakugo from "../../assets/heroes/MHA/bakugo.jpg";
import Icon_Nana from "../../assets/heroes/MHA/nana.jpg"
import Icon_Eraser from "../../assets/heroes/MHA/eraserHead.jpg";
import Icon_Nejire from "../../assets/heroes/MHA/nejire.jpg";

const HeroCard = ({ nameHero, id }: { nameHero: string; id: string }) => {
  const imageH = () => {
    switch (nameHero) {
      case "All Might":
        return Icon_AllMight;
      case "Bakugo":
        return Icon_Bakugo;
      case "Deku":
        return Icon_Deku;
      case "Eraser Head":
        return Icon_Eraser;
      case "Nana Shimura":
        return Icon_Nana;
      default:
        return Icon_Nejire;
    }
  };

  return (
    <div
      key={id}
      className="p-4 text-xl font-bold flex flex-col items-center hover:-translate-y-2 duration-200 opacity-70 hover:opacity-100"
    >
      <p className="mb-2">{nameHero}</p>
      <div className="super-border">
        <img
          src={imageH()}
          alt="HeroIcon"
          className="size-40 rounded-3xl"
          onError={(e) => {
            e.currentTarget.src = DefaultIconHero;
          }}
        />
      </div>
    </div>
  );
};

export default HeroCard;
