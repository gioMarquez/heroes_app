import { useState } from "react";
import { Link } from "react-router-dom";

const navigateOptions = [
	// { id: 0, name: "Asociaciones", to: "/" },
	{ id: 1, name: "Marvel", to: "marvel" },
	{ id: 2, name: "DC", to: "dc" },
	{ id: 3, name: "MHA", to: "mha" },
];


const Navbar = () => {
	const [idSelected, setIdSelected] = useState(1);
    const verifySelected = (idElement: number) => {
        return idSelected === idElement ? "bg-selected-navItem/10 text-glue-500 rounded-3xl border-blue-400 border-b-2" : "rounded-3xl";
      };

	return (
        <>
		<div className='grid grid-cols-12 containerGeneral'>
            <div className="title">Asociaciones</div>
            <div className="container__nav col-span-6 grid-flow-col-dense">
                {navigateOptions.map((option) => (
                    <Link
                        key={option.id}
                        className={`navItem ${verifySelected(option.id)}`}
                        to={option.to}
                        onClick={() => setIdSelected(option.id)}
                    >
                        {option.name}
                    </Link>
                ))}
            </div>
            <div className="containerUserOptions">
                <div className="itemUser">Jhovanny</div>
                <div className="logOut">logout</div>
            </div>
		</div>
        </>
	);
};

export default Navbar;
