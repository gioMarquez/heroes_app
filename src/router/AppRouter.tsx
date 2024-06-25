import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth/pages";
import HeroesRoutes from "../heores/routes/HeroesRoutes";

const AppRouter = () => {
	return (
		<>
            <Routes>
                <Route path="login" element={ <LoginPage />} />
                <Route path="/*" element={ <HeroesRoutes />} />
            </Routes>
		</>
	);
};

export default AppRouter;
