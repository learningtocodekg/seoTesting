import type { Metadata } from 'next';
import Product2 from './product3meta';


export const metadata: Metadata = {
  title: 'StrideForm Pulse Runner',
  description: 'Shop the StrideForm Pulse Runner, engineered for performance and comfort.',
};

export default function Product3() {
  return <Product2 />;
}