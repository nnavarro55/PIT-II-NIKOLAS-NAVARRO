import { products } from '@/data/products';
import { ProductDetails } from '@/components/ProductDetails';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetails product={product} />;
}