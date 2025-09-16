import { FC, memo } from 'react';
import ProductImage from './ProductImage';


const ProductView: FC<{ data: any[] }> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data?.map((item: any) => (
        <div
          key={item.id}
          className="bg-white border-0 rounded-[10px] shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer h-[400px]"
        >
          <ProductImage
            title={item.title}
            image={item.images[0]}
            id={item.id}
          />

          <div className="p-4 ">
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {item.title}
            </h3>
            <hr />
            <strong className="text-lg font-semibold text-gray-800 truncate">
              Price: {item.price}
            </strong>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(ProductView);
