import type { Metadata } from 'next';
import ProductPage from '../../Components/Product1';
import ProductPage5 from '@/app/Components/Product5';

export const metadata: Metadata = {
  title: 'Kaareen Pulse Runner',
  description: 'Shop the Kaareen Pulse Runner, engineered for performance and comfort.',
};

export default function Product2Meta() {
  return <ProductPage5 />;
}