import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { products } from '@/lib/data';

const cartItems = products.slice(0, 2);
const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

export default function CartPage() {
  return (
    <main>
      <PageHero
        title="Your Cart"
        description="Mock frontend cart page. Real cart state can be added later with Context, Zustand, Redux, or server actions."
      />

      <Container className="grid gap-8 py-16 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-5">
          {cartItems.map((item) => (
            <div key={item.id} className="rounded-4xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">{item.category}</p>
                  <h2 className="mt-2 text-2xl font-bold text-zinc-900">{item.name}</h2>
                  <p className="mt-2 text-zinc-600">Size: M · Color: Black · Quantity: 1</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-zinc-900">${item.price}</p>
                  <button className="mt-3 text-sm font-medium text-red-500 hover:underline">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="h-fit rounded-4xl border border-zinc-200 bg-zinc-50 p-6">
          <h3 className="text-2xl font-bold text-zinc-900">Order Summary</h3>
          <div className="mt-6 space-y-4 text-sm text-zinc-600">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Shipping</span>
              <span>$5</span>
            </div>
            <div className="flex items-center justify-between border-t border-zinc-200 pt-4 text-base font-bold text-zinc-900">
              <span>Total</span>
              <span>${subtotal + 5}</span>
            </div>
          </div>
          <Button href="/checkout" className="mt-6 w-full">Proceed to Checkout</Button>
        </aside>
      </Container>
    </main>
  );
}