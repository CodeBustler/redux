import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
	return (
		<nav className="bg-blue-500 font-semibold text-white flex items-center justify-between px-5 py-3">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart" className="flex items-center gap-2">
				<FaShoppingCart className="text-2xl" /> 0
			</NavLink>
		</nav>
	);
}

export default Navbar;
