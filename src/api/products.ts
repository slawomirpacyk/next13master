import { type ProductListItemTypes } from "@/ui/organisms/ProductList/ProductList.types";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export const getProductsList = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map((product) => productResponseItemToProductItemType(product));

	return products;
};

export const getProductsById = async (id: ProductResponseItem["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await res.json()) as ProductResponseItem;
	return productResponseItemToProductItemType(productResponse);
};

const productResponseItemToProductItemType = (
	product: ProductResponseItem,
): ProductListItemTypes => {
	return {
		id: product.id,
		category: product.category,
		name: product.title,
		price: product.price,
		coverImage: { src: product.image, alt: product.description },
		description: product.description,
	};
};
