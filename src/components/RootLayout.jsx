import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";

function RootLayout() {
	return (
		<>
			<Provider store={store}>
				<Navbar />
				<main className="mx-4">
					<Outlet />
				</main>
			</Provider>
		</>
	);
}

export default RootLayout;
