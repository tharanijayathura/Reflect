import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export default function CheckoutPage() {
  return (
    <main>
      <PageHero
        title="Checkout"
        description="Frontend-only checkout with mock fields and payment choices, including cash on delivery."
      />

      <Container className="grid gap-8 py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-4xl border border-zinc-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-zinc-900">Billing & Delivery Details</h2>

          <form className="mt-8 grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">First Name</label>
              <input className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-900" placeholder="John" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Last Name</label>
              <input className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-900" placeholder="Doe" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Email</label>
              <input type="email" className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-900" placeholder="john@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Address</label>
              <input className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-900" placeholder="Street, house number, area" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">City</label>
              <input className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-900" placeholder="City" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Postal Code</label>
              <input className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-900" placeholder="Postal code" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Phone</label>
              <input className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-900" placeholder="Phone number" />
            </div>
          </form>

          <div className="mt-10">
            <h3 className="text-xl font-bold text-zinc-900">Payment Method</h3>
            <div className="mt-4 space-y-4">
              <label className="flex items-start gap-3 rounded-2xl border border-zinc-300 p-4">
                <input type="radio" name="payment" defaultChecked className="mt-1" />
                <div>
                  <p className="font-semibold text-zinc-900">Cash on Delivery</p>
                  <p className="text-sm text-zinc-600">Pay when your order arrives.</p>
                </div>
              </label>

              <label className="flex items-start gap-3 rounded-2xl border border-zinc-300 p-4">
                <input type="radio" name="payment" className="mt-1" />
                <div>
                  <p className="font-semibold text-zinc-900">Card Payment</p>
                  <p className="text-sm text-zinc-600">Mock option for future payment gateway integration.</p>
                </div>
              </label>
            </div>
          </div>
        </section>

        <aside className="h-fit rounded-4xl border border-zinc-200 bg-zinc-50 p-6">
          <h3 className="text-2xl font-bold text-zinc-900">Order Summary</h3>
          <div className="mt-6 space-y-4 text-sm text-zinc-600">
            <div className="flex items-center justify-between">
              <span>Products</span>
              <span>$61</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Shipping</span>
              <span>$5</span>
            </div>
            <div className="flex items-center justify-between border-t border-zinc-200 pt-4 text-base font-bold text-zinc-900">
              <span>Total</span>
              <span>$66</span>
            </div>
          </div>
          <Button className="mt-6 w-full">Place Order</Button>
        </aside>
      </Container>
    </main>
  );
}