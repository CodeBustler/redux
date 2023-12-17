import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

function Products() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	// Fetch Data on Render
	useEffect(() => {
		// API Calls
		fetch("https://fakestoreapi.com/products")
			.then((data) => data.json())
			.then((result) => {
				setProducts(result);
				setLoading(false);
			});
	}, []);

	const addToCart = (product) => {
		console.log("Adding to cart:", product);
		dispatch(add(product));
	};

	// Making Cards
	const cards = loading ? (
		<p>Loading...</p>
	) : (
		products.map((product, index) => (
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
					<p className="font-bold text-2xl my-4">
						{" "}
						$ {product.price}
					</p>
					<button
						className="bg-blue-500 p-2 px-4 text-white rounded font-semibold hover:bg-blue-800 active:bg-blue-700 w-full"
						onClick={() => addToCart(product)}
					>
						Add to Cart
					</button>
				</div>
			</div>
		))
	);

	return (
		<>
			<h1 className="text-center text-3xl font-semibold py-5">
				Product Dashboard
			</h1>
			<div className="container mx-auto mb-10 ">
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
					{cards}
				</div>
			</div>
		</>
	);
}

export default Products;
