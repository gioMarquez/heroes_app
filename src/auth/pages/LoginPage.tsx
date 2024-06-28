import { useNavigate } from "react-router-dom";

const LoginPage = () => {
	const navigate = useNavigate();

	const onLogin = () => {
		navigate("/", {
			replace: true, // se encarga de remplazar el historial
		});
	};

	return (
		<div className=" m-5">
			<h1 className="text-3xl ">Login</h1>
			<hr />

			<div className="mb-4"></div>
			<button
				className="bg-blue-700 rounded-2xl h-[50px] w-[200px] text-white font-bold text-xl hover:bg-blue-700/80 hover:duration-75"
				onClick={() => onLogin()}
			>
				Login
			</button>
		</div>
	);
};

export default LoginPage;
