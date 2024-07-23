import { useNavigate } from "react-router-dom";

const LoginPage = () => {
	const navigate = useNavigate();

	const onLogin = () => {
		navigate("/", {
			replace: true, // se encarga de remplazar el historial
		});
	};

	return (
		<div className=" m-5 bg-white">
			<h1 className="text-3xl font-thin">Login</h1>
			<hr />

			<div className="mb-4"></div>

			<button
				onClick={() => onLogin()}
				className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5 w-48 "
			>
				<span className="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
				<span className="relative w-full text-center text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">
					Login
				</span>
			</button>
		</div>
	);
};

export default LoginPage;
