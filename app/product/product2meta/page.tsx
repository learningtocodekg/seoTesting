import ProductPage2 from '@/app/Components/Product2';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kaareen Pulse Runner',
  description: 'Shop the Kaareen Pulse Runner, engineered for performance and comfort.',
};

export default function Product2Meta() {
  return <ProductPage2 />;
}