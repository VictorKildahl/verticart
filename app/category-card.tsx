import Link from "next/link";

type CategoryCardProps = {
  name: string;
  icon: React.ReactNode;
};

export function CategoryCard({ name, icon }: CategoryCardProps) {
  return (
    <Link
      href={`/${encodeURIComponent(name)}`}
      className="bg-base-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center gap-2"
    >
      {icon}
      <h2 className="font-semibold text-gray-800 capitalize">{name}</h2>
    </Link>
  );
}
