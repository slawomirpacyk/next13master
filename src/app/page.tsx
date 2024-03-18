import { ProductList } from "@/ui/organisms/ProductList/ProductList";
import { type ProductListItemTypes } from "@/ui/organisms/ProductList/ProductList.types";

const products: ProductListItemTypes[] = [
	{
		id: "1",
		category: "Perfume",
		name: "Chanel",
		price: 1200,
		coverImage: {
			src: "/photo-1563170351-be82bc888aa4.avif",
			alt: "Chanel perfume",
		},
	},
	{
		id: "2",
		category: "Clothes",
		name: "Man Mix",
		price: 1200,
		coverImage: {
			src: "/photo-1544441893-675973e31985.avif",
			alt: "Man Mix clothes",
		},
	},
	{
		id: "3",
		category: "Watch",
		name: "Classic Watch",
		price: 1200,
		coverImage: {
			src: "/photo-1532667449560-72a95c8d381b.avif",
			alt: "Classic Watch",
		},
	},
	{
		id: "4",
		category: "Clothes",
		name: "Woman Mix",
		price: 1200,
		coverImage: {
			src: "/photo-1590664863685-a99ef05e9f61.avif",
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
