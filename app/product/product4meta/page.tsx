import type { Metadata } from 'next';

import ProductPage4 from '@/app/Components/Product4';

export const metadata: Metadata = {
  title: 'Kaareen D',
  description: 'Shop the Kaareen D, engineered for performance and comfort.',
};

export default function Product2Meta() {
  return <ProductPage4 />;
}