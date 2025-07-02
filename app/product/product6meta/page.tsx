import type { Metadata } from 'next';

import ProductPage6 from '@/app/Components/Product6';

export const metadata: Metadata = {
  title: 'Kaareen Pulse Runner',
  description: 'Shop the Kaareen Pulse Runner, engineered for performance and comfort.',
};

export default function Product2Meta() {
  return <ProductPage6 />;
}