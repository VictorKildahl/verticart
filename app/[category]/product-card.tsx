import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
};

export function ProductCard({
  id,
  title,
  price,
  image,
  category,
}: ProductCardProps) {
  return (
    <Link href={`/${encodeURIComponent(category)}/${id}`} className="group">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-base-300 p-10">
        <div className="h-full w-full relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain object-center group-hover:opacity-75 mix-blend-multiply"
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col justify-between">
        <h3 className="text-sm text-gray-700">{title}</h3>
        <p className="text-lg font-medium text-gray-800">${price}</p>
      </div>
    </Link>
  );
}
