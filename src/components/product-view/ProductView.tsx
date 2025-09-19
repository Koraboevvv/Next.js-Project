import { FC, memo } from 'react';
import ProductImage from './ProductImage';
import { Rate } from 'antd';



const ProductView: FC<{ data: any[] }> = ({ data }) => {
  return (
    <div className="p-4 ">
      <h2 className="font-black text-[48px] text-center mt-[72px] mb-[55px]">NEW ARRIVALS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data?.map((item: any) => {
          const price = item.price;
          const oldPrice = Math.round(price / 0.7);
          const discount = Math.round(((oldPrice - price) / oldPrice) * 100);

          return (
            <div
              key={item.id}
              className="bg-white border-0 rounded-[10px] shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer h-[500px]"
            >
              <ProductImage
                title={item.title}
                image={item.images[0]}
                id={item.id}
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {item.title}
                </h3>
                <Rate allowHalf defaultValue={5} className="text-yellow-500 text-sm" />


                <br />
                <br />
                <hr />
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-lg font-bold text-black">${price}</span>
                  <span className="text-gray-400 line-through">${oldPrice}</span>
                  <span className="bg-red-100 text-red-500 text-xs font-semibold px-2 py-0.5 rounded-full">
                    -{discount}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(ProductView);
