import { AddToCart } from "@/app/[category]/[id]/add-to-cart";
import { ProductCard } from "@/app/[category]/product-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Product } from "@/types/types";
import { getProductById, getProductsInCategory } from "@/utils/api";
import { decodeAndCapitalize } from "@/utils/decode-and-capitalize";
import Image from "next/image";

type ProductPageProps = {
  params: Promise<{
    category: string;
    id: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, id } = await params;
  const product = await getProductById(id);
  const relatedProducts = await getProductsInCategory(product.category);

  const breadcrumbItems = [
    { label: decodeAndCapitalize(product.category), href: `/${category}` },
    {
      label: product.title,
      href: `/${category}/${id}`,
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="sm:grid sm:grid-cols-2 sm:gap-x-8 mt-8 text-gray-800">
        <div className="aspect-square w-full overflow-hidden rounded-lg bg-base-300 p-24">
          <div className="relative h-full w-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain object-center mix-blend-multiply"
            />
          </div>
        </div>
        <div className="mt-8 sm:mt-0">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="my-4 text-2xl">${product.price}</p>
          <p>{product.description}</p>
          <AddToCart />
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {relatedProducts.slice(0, 4).map((product: Product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </>
  );
}
