import { ProductList } from "@/ui/organisms/ProductList/ProductList";
import { type ProductListItemTypes } from "@/ui/organisms/ProductList/ProductList.types";

const products: ProductListItemTypes[] = [
	{
		id: "1",
		category: "Perfume",
		name: "Chanel",
		price: 1200,
		coverImage: {
			src: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80",
			alt: "Chanel perfume",
		},
	},
	{
		id: "2",
		category: "Clothes",
		name: "Man Mix",
		price: 1200,
		coverImage: {
			src: "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
			alt: "Man Mix clothes",
		},
	},
	{
		id: "3",
		category: "Watch",
		name: "Classic Watch",
		price: 1200,
		coverImage: {
			src: "https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
			alt: "Classic Watch",
		},
	},
	{
		id: "4",
		category: "Clothes",
		name: "Woman Mix",
		price: 1200,
		coverImage: {
			src: "https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80",
			alt: "Woman Mix clothes",
		},
	},
];

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between bg-white p-24">
			<ProductList products={products} />
		</main>
	);
}
