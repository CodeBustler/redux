import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
	return (
		<>
			<Navbar />
			<main className="p-5">
				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;
