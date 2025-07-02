import HomePage from './Components/Home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kaareeen - Home',
  description: 'Explore Kaareen’s premium footwear for urban adventures and rugged trails.',
};

export default function Home() {
  return <HomePage />;
}