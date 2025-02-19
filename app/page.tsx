import { CategoryCard } from "@/app/category-card";
import { HeroSection } from "@/app/hero-section";
import { getCategories } from "@/utils/api";
import { Mars, Smartphone, Venus, Watch } from "lucide-react";

export default async function Home() {
  const categoryIcons = {
    electronics: { icon: <Smartphone /> },
    jewelery: { icon: <Watch /> },
    "men's clothing": { icon: <Mars /> },
    "women's clothing": { icon: <Venus /> },
  };

  const fetchedCategories = await getCategories();
  const categories = fetchedCategories.map((categoryName: string) => ({
    name: categoryName,
    ...categoryIcons[categoryName as keyof typeof categoryIcons],
  }));

  return (
    <>
      <HeroSection />
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Categories</h2>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            icon={category.icon}
          />
        ))}
      </div>
    </>
  );
}
