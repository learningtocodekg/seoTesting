
import type { Metadata } from 'next';
import ProductPage from '../Components/Product1';


export const metadata: Metadata = {
  title: 'Kaareeen',
  description: 'Shop the Kaareeen, engineered for performance and comfort.',
};

export default function Product() {
  return <ProductPage />;
}