import { Product } from "@/types/types";

export async function getCategories(): Promise<string[]> {
  const res = await fetch(`https://fakestoreapi.com/products/categories`);

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}

export async function getProductsInCategory(
  category: string
): Promise<Product[]> {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products in category");
  }

  return res.json();
}

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`https://fakestoreapi.com/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function getProductById(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product by id");
  }

  return res.json();
}
