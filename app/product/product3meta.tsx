
import type { Metadata } from 'next';
import Product3 from './product2meta';


export const metadata: Metadata = {
  title: 'StrideForm Pulse Runner',
  description: 'Shop the StrideForm Pulse Runner, engineered for performance and comfort.',
};

export default function Product2() {
  return <Product3 />;
}