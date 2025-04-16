import { menuData } from "@/data";
import Link from "next/link";
import Image from "next/image";

interface CategoryProps {
  params : Promise<{category: string }>;
}

const CategoryPage = async ({ params }: CategoryProps) => {
  const { category } =  await params;
  const products = menuData[category];

  if (!products) {
    return <h1 className="text-red-500">Category not found</h1>;
  }

  const Category = category.charAt(0).toUpperCase() + category.slice(1, -1); // pizzas --> Pizza

  return (
    <div className="text-red-500">
      <div className="w-full bg-red-50 px-5 py-2">
        <h1 className="text-3xl font-bold">{Category} Menu</h1>
      </div>

      <div className="flex flex-wrap">
        {products.map((item) => (
          <Link
            key={item.id}
            className="w-full md:w-1/2 lg:w-1/3 h-[60vh] flex flex-col justify-between p-4 border-r-1 border-t-1 border-b-1 border-red-500 group even:bg-fuchsia-50"
            href={`/product/${category}/${item.id}`}
          >
            {/** Image Container */}
            {item.img && (
              <div className="relative h-[80%]">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}

            {/**Text Container */}
            <div className="flex items-center justify-between font-bold">
              <h1 className="text-2xl uppercase p-2">{item.title}</h1>
              <h2 className="group-hover:hidden text-xl">${item.price}</h2>
              <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md cursor-pointer hover:bg-red-600">
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
