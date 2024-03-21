import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

export default async function Products() {
	const products = await getProductsList();

	return <ProductList title="Product list" products={products} />;
}
