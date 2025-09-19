import Hero from '@/components/hero/Hero';
import ProductView from '@/components/product-view/ProductView';
import { memo } from 'react';

const Home = async () => {
  const response = await fetch("https://api.errorchi.uz/product?limit=28")
  const data = await response.json()

  return (
    <div>
        <Hero />
      <div className="container mx-auto">
        <ProductView data={data?.data?.allProducts} />

      </div>
    </div>
  );
};

export default memo(Home);