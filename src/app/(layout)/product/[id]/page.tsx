import Image from "next/image";
import { memo } from "react";
import { Button, Flex, Rate } from 'antd';



const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const response = await fetch(`https://api.errorchi.uz/product/${id}`);
  const data = await response.json();
  const product = data?.data
  console.log(product);
  return (
    <div className="container max-w-[1280px] mx-auto py-8">
      <div className="flex gap-[50px] justify-center">
        <div className="border-[2px] rounded-[10px] border-gray-50">
          <Image
            src={`https://api.errorchi.uz/product/image/${product?.images[0]}`}
            width={400}
            height={450}
            alt={product?.title || "Product image"}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="pt-[30px]">
          <h2 className="text-2xl font-bold mb-4">Category: {product?.category?.name}</h2>
          <Rate />
          <p className="text-lg font-semibold mt-2">$ {product?.price}</p>
          <p className="text-gray-600 mt-2">desc: {product?.description}</p>
          <h3 className="text-xl mt-4">name: {product?.title}</h3>
          <div className="border-t py-2 border-main-border">
            <span className="text-black/60 text-sm">Select Color</span>
            <div className="flex items-center gap-x-4 my-2">
              <button className="size-8 rounded-full bg-blue-500 border-2 border-transparent hover:border-black"></button>
              <button className="size-8 rounded-full bg-red-500 border-2 border-transparent hover:border-black"></button>
              <button className="size-8 rounded-full bg-yellow-500 border-2 border-transparent hover:border-black"></button>
            </div>
          </div>

          <div className="border-t py-2 border-main-border">
            <span className="text-black/60 text-sm">Choose Size</span>
            <div className="flex items-center flex-wrap gap-x-4 gap-y-3 my-2">
              <button className="px-4 py-2 rounded-[50px] cursor-pointer  bg-bg-card text-black/60 hover:bg-black hover:text-white">
                Small
              </button>
              <button className="px-4 py-2 rounded-[50px]  cursor-pointer bg-bg-card text-black/60 hover:bg-black hover:text-white">
                Medium
              </button>
              <button className="px-4 py-2 rounded-[50px] cursor-pointer  bg-bg-card text-black/60 hover:bg-black hover:text-white">
                Large
              </button>
              <button className="px-4 py-2 rounded-[50px] cursor-pointer  bg-bg-card text-black/60 hover:bg-black hover:text-white">
                X-Large
              </button>
            </div>
          </div>
          <p className="text-gray-600 mt-2">Stock: {product?.stock}</p>
          <p className="text-gray-600 font-bold">Owner: {product?.user?.fname}</p>
          <p className="text-gray-600 font-bold">Email: {product?.user?.email}</p>
          <div className="mt-[35px]">
            <Flex gap="small" wrap>
              <Button type="primary" >Buy now</Button>
              <Button href="/">Go back</Button>
            </Flex>
          </div>
        </div>
      </div>

    </div>
  );
};

export default memo(Detail);
