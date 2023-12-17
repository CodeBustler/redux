import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

function Cart() {
	const cartProducts = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const removeItem = (product) => {
		dispatch(remove(product));
	};
	const cards = cartProducts.map((product, index) => (
		<div
			className="border border-gray-400 rounded-md py-5 px-8  flex flex-col justify-between "
			key={index}
		>
			{/*IMAGE*/}
			<div className="h-[200px] flex  justify-center ">
				<img
					src={product.image}
					alt="image"
					className="h-full object-contain hover:scale-105 transition"
				/>
			</div>
			{/*PRODUCT DETAILS*/}
			<div>
				<h2 className="my-3 font-bold ">
					{product.title.slice(0, 25)}
				</h2>
				<p>{product.description.slice(0, 60)}</p>
				<p className="font-bold text-2xl my-4"> $ {product.price}</p>
				<button
					className="bg-red-500 p-2 px-4 text-white rounded font-semibold hover:bg-red-800 active:bg-red-700 w-full"
					onClick={() => removeItem(product.id)}
				>
					Remove
				</button>
			</div>
		</div>
	));
	return (
		<>
			<h1 className="text-center text-3xl font-semibold py-5">Cart</h1>
			<div className="container mx-auto ">
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
					{cards}
				</div>
			</div>
		</>
	);
}

export default Cart;
