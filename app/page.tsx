import Hero from '@/components/home/Hero';
import ServicesStrip from '@/components/home/ServicesStrip';
import CategoriesPreview from '@/components/home/CategoriesPreview';
import FeaturedGrid from '@/components/home/FeaturedGrid';
import TrendingSection from '@/components/home/TrendingSection';
import PromoBanner from '@/components/home/PromoBanner';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesStrip />
      <CategoriesPreview />
      <FeaturedGrid />
      <TrendingSection />
      <PromoBanner />
    </main>
  );
}