export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	if (params.category === "t-shirts") {
		return [{ pageNumber: "1" }, { pagenuNumber: "2" }];
	} else {
		return [{ pageNumber: "1" }];
	}
	return [];
};

export default function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	return (
		<h1>
			CategoryProductPage {params.category}, strona {params.pageNumber}
		</h1>
	);
}
