import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductsById, getProductsList } from "@/api/products";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts/SuggestedProducts";
import { ProductImage } from "@/ui/atoms/ProductImage/ProductImage";

export const generateStaticParams = async () => {
	const products = await getProductsList();
	return products.map((product) => ({ productId: product.id })).slice(0, 2);
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductsById(params.productId);
	return { title: `Product / ${product.name}`, description: product.description };
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductsById(params.productId);
	return (
		<>
			<ProductImage src={product.coverImage.src} alt={product.coverImage.alt} />
			<aside>
				<Suspense>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
