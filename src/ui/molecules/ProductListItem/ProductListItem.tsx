import { ProductImage } from "@/ui/atoms/ProductImage/ProductImage";
import { ProductInfo } from "@/ui/atoms/ProductInfo/ProductInfo";
import { type ProductListItemTypes } from "@/ui/organisms/ProductList/ProductList.types";

type ProductListItemProps = {
	product: ProductListItemTypes;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="mx-auto w-full max-w-sm overflow-hidden rounded-md shadow-md">
			<ProductImage src={product.coverImage.src} alt={product.coverImage.alt} />
			<ProductInfo product={product} />
		</li>
	);
};
