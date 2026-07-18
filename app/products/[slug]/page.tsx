import { notFound } from 'next/navigation';
import ProductDetails from '@/components/products/ProductDetails';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/lib/data';

type ProductPageProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

function resolveSlug(params: ProductPageProps['params']) {
  return params instanceof Promise ? params.then((value) => value.slug) : params.slug;
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const slug = await resolveSlug(params);
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} | Reflect Fashion`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const slug = await resolveSlug(params);
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main style={{ minHeight: '100vh' }}>
      <ProductDetails product={product} />

      {/* Related Products */}
      {related.length > 0 && (
        <section style={{ borderTop: '1px solid var(--border)', padding: '60px 0 80px' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '10px' }}>
              You May Also Like
            </p>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '32px', letterSpacing: '-0.02em' }}>
              Related T-Shirts
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="related-grid">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 1100px) { .related-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 600px) { .related-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>
      )}
    </main>
  );
}