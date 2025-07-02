import type { Metadata } from 'next';

import ProductPage3 from '@/app/Components/Product3';

export const metadata: Metadata = {
  title: 'Kaareen C',
  description: 'Shop the Kaareen C, engineered for performance and comfort.',
};

export default function Product3Meta() {
  return <ProductPage3 />;
}