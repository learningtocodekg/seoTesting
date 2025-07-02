import ProductPage2 from '@/app/Components/Product2';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kaareen B',
  description: 'Shop the Kaareen B, engineered for performance and comfort.',
};

export default function Product2Meta() {
  return <ProductPage2 />;
}