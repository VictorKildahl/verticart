"use client";

import { Button } from "@/components/ui/button";

export function AddToCart() {
  return (
    <Button
      variant="outline"
      className="mt-4 hover:cursor-pointer"
      onClick={() => {
        console.log("Add to Cart");
      }}
    >
      Add to Cart
    </Button>
  );
}
