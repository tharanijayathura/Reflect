import { notFound } from 'next/navigation';
import Container from '@/components/common/Container';
import PageHero from '@/components/common/PageHero';
import ProductDetails from '@/components/products/ProductDetails';
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

export default async function ProductPage({ params }: ProductPageProps) {
  const slug = await resolveSlug(params);
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <PageHero
        title="View Product"
        description="This product page uses the same mock data as the catalog, so the price and details stay in sync."
      />

      <Container>
        <ProductDetails product={product} />
      </Container>
    </main>
  );
}