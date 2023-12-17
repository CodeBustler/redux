import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Navbar() {
	const cartProducts = useSelector((state) => state.cart);
	return (
		<nav className="bg-blue-500 font-semibold text-white flex items-center justify-between px-5 py-3 sticky top-0 z-10">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart" className="flex items-center gap-2">
				<FaShoppingCart className="text-2xl" /> {cartProducts.length}
			</NavLink>
		</nav>
	);
}

export default Navbar;
