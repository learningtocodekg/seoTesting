import HomePage from './Components/Home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'StrideForm - Home',
  description: 'Explore StrideForm’s premium footwear for urban adventures and rugged trails.',
};

export default function Home() {
  return <HomePage />;
}