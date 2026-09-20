import Hero from '@/components/Hero';
import ServicesStrip from '@/components/ServicesStrip';
import CategoriesPreview from '@/components/CategoriesPreview';
import FeaturedGrid from '@/components/FeaturedGrid';
import TrendingSection from '@/components/TrendingSection';
import PromoBanner from '@/components/PromoBanner';

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoriesPreview />
      <ServicesStrip />
      <FeaturedGrid />
      <TrendingSection />
      <PromoBanner />
    </main>
  );
}
