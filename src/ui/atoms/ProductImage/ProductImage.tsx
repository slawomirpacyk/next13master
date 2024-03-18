type ProductImageProps = {
	src: string;
	alt: string;
};

export const ProductImage = ({ src, alt }: ProductImageProps) => {
	return (
		<div className="flex h-56 w-full items-end justify-end bg-cover">
			<img src={src} alt={alt} className="h-full w-full object-cover" />
		</div>
	);
};
