
import type { Metadata } from 'next';
import Product3 from './product2meta';


export const metadata: Metadata = {
  title: 'Kaareeen',
  description: 'Shop the Kaareeen, engineered for performance and comfort.',
};

export default function Product2() {
  return <Product3 />;
}