import { ProductCard } from "@/app/[category]/product-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Product } from "@/types/types";
import { getProductsInCategory } from "@/utils/api";
import { decodeAndCapitalize } from "@/utils/decode-and-capitalize";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const products = await getProductsInCategory(category);

  const breadcrumbItems = [
    { label: decodeAndCapitalize(category), href: `/${category}` },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="text-3xl font-bold text-gray-800 mb-6 capitalize mt-8">
        {decodeAndCapitalize(category)}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {products.map((product: Product) => (
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
    </>
  );
}
