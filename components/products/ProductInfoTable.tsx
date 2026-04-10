import type { Product } from '@/lib/data';

export default function ProductInfoTable({ product }: { product: Product }) {
  const rows = [
    { label: 'SKU', value: product.sku },
    { label: 'Fabric', value: product.fabric },
    { label: 'Fit', value: product.fit },
    { label: 'Sizes', value: product.sizes.join(', ') },
    { label: 'Colors', value: product.colors.join(', ') },
    { label: 'Availability', value: product.inStock ? 'In Stock' : 'Out of Stock' },
  ];

  return (
    <div className="overflow-hidden rounded-4xl border border-zinc-200">
      {rows.map((row) => (
        <div key={row.label} className="grid grid-cols-2 border-b border-zinc-200 last:border-b-0">
          <div className="bg-zinc-50 px-5 py-4 text-sm font-semibold text-zinc-700">{row.label}</div>
          <div className="px-5 py-4 text-sm text-zinc-600">{row.value}</div>
        </div>
      ))}
    </div>
  );
}