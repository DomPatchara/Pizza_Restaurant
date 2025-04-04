import Image from "next/image";
import React from "react";
import { menuData } from "@/data";
import Price from "@/components/Price";


interface ProductProps {
  params : Promise<{ slug : string[] }>;
}
const SingleProductPage = async ({params} : ProductProps) => {

// **  Object destructuring **//

  const { slug } = await params;      
  
  //1./   params = { slug: ["burgers", "1"] }
  //2./   { slug } = params
  //3./   { slug } = { slug: ["burgers", "1"] } 
  //4./   slug = slug: ["burgers", "1"]
  //5./   ไม่ต้องใช้ params.slug แล้ว ใช้แค่ slug ได้เลย 

  const [category, productId] = slug    // Ex  URL: localhost3000/product/pizzas/2 ---------> slug = [ "pizzas", "2" ] 

  const ProductIdNumber = Number(productId); // Change Id to Numbertype

  /* Select Category Type */
  const CategoryData = menuData[category]

  /* Find ID Product */
  const product = CategoryData.find(p => p.id === ProductIdNumber)

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {product?.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={product.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{product?.title}</h1>
        <p>{product?.desc}</p>
        <Price 
          price={product?.price} 
          id={product?.id} 
          options={product?.options}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;