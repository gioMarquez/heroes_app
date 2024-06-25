//Importaciones de React
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//Importaciones de terceros

//Mi códgo
import "./index.css";
import HeroesApp from "./HeroesApp";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<HeroesApp />
		</BrowserRouter>
	</React.StrictMode>
);
