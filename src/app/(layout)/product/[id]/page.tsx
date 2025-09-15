import Image from "next/image";
import { memo } from "react";
import { Button, Flex } from 'antd';



const Detail = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const response = await fetch(`https://api.errorchi.uz/product/${id}`, {
    cache: "no-store",
  });

  const data = await response.json();
  const product = data?.data;
  console.log(product);
  return (
    <div className="container max-w-[1280px] mx-auto py-8">
      <div className="flex gap-[50px] bor">
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
          <h3 className="text-xl mt-4">name: {product?.title}</h3>
          <p className="text-gray-600 mt-2">desc: {product?.description}</p>
          <p className="text-gray-600 mt-2">Stock: {product?.stock}</p>
          <p className="text-gray-600 font-bold">Owner: {product?.user?.fname}</p>
          <p className="text-gray-600 font-bold">Email: {product?.user?.email}</p>
          <p className="text-lg font-semibold mt-2">Price: {product?.price}</p>
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
