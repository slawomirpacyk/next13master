import { ProductList } from "../ProductList/ProductList";
import { getProductsList } from "@/api/products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductsList = async () => {
	const products = await getProductsList();
	await sleep(5000);

	return <ProductList title="Suggested products" products={products.slice(-4)} />;
};
