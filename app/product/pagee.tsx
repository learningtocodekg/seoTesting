
import type { Metadata } from 'next';
import ProductPage from '../Components/Product1';


export const metadata: Metadata = {
  title: 'StrideForm Pulse Runner',
  description: 'Shop the StrideForm Pulse Runner, engineered for performance and comfort.',
};

export default function Product() {
  return <ProductPage />;
}