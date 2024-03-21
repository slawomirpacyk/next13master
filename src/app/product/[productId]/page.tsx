import { Suspense } from "react";
import { getProductsById } from "@/api/products";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts/SuggestedProducts";

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductsById(params.productId);
	return (
		<>
			{product.name}
			<aside>
				<Suspense>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
