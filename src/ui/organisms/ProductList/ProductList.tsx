import { ProductListItem } from "@/ui/molecules/ProductListItem/ProductListItem";
import { type ProductListItemTypes } from "@/ui/organisms/ProductList/ProductList.types";

export const ProductList = ({ products }: { products: ProductListItemTypes[] }) => {
	return (
		<>
			<h1 className="text-4xl font-bold">ProductList</h1>
			<div
				className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
				data-testid="products-list"
			>
				{products.map((product) => (
					<ProductListItem key={product.id} product={product} />
				))}
			</div>
		</>
	);
};
