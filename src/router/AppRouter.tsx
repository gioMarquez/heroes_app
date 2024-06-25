import { Navigate, Route, Routes } from "react-router-dom";

import {DcPage, MarvelPage, MhaPage} from '../heores/pages'
import Navbar from "../ui/components/Navbar";
import { LoginPage } from "../auth/pages";

const AppRouter = () => {
	return (
		<>
            <Navbar />
            <Routes>
                <Route path="/" element={ <Navigate to="/marvel" />} />
                <Route path="marvel" element={ <MarvelPage />} />
                <Route path="dc" element={ <DcPage />} />
                <Route path="mha" element={ <MhaPage />} />
                <Route path="login" element={ <LoginPage />} />
            </Routes>
		</>
	);
};

export default AppRouter;
