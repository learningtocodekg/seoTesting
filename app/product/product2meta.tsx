
import type { Metadata } from 'next';
import Product2 from './product3meta';


export const metadata: Metadata = {
  title: 'Kaareeen',
  description: 'Shop the Kaareeen, engineered for performance and comfort.',
};

export default function Product3() {
  return <Product2 />;
}