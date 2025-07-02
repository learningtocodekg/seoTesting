
import type { Metadata } from 'next';
import ProductPage from '../Components/Product1';


export const metadata: Metadata = {
  title: 'Kaareen A',
  description: 'Shop the Kaareen A, engineered for performance and comfort.',
};

export default function Product() {
  return <ProductPage />;
}