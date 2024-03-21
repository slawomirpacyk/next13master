import { ProductListItem } from "@/ui/molecules/ProductListItem/ProductListItem";
import { type ProductListItemTypes } from "@/ui/organisms/ProductList/ProductList.types";

export const ProductList = ({
	title,
	products,
}: {
	title: string;
	products: ProductListItemTypes[];
}) => {
	return (
		<>
			<h1 className="text-4xl font-bold">{title}</h1>
			<ul
				className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
				data-testid="products-list"
			>
				{products.map((product) => (
					<ProductListItem key={product.id} product={product} />
				))}
			</ul>
		</>
	);
};
