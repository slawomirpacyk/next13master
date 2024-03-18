import { formatMoney } from "@/utils";

type ProductInfoProps = {
	product: {
		name: string;
		category: string;
		price: number;
	};
};

export const ProductInfo = ({ product: { name, category, price } }: ProductInfoProps) => {
	return (
		<div className="px-5 py-3">
			<h3 className="uppercase text-gray-700">{name}</h3>
			<div className="mt-2 flex justify-between text-gray-500">
				<span>{category}</span>
				<span>{formatMoney(price / 100)}</span>
			</div>
		</div>
	);
};
