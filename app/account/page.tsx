import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';

export default function AccountPage() {
  return (
    <main>
      <PageHero
        title="My Account"
        description="Frontend placeholder for login, profile, addresses, and order history."
      />
      <Container className="grid gap-6 py-16 md:grid-cols-3">
        <div className="rounded-4xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Profile</h2>
          <p className="mt-3 text-zinc-600">Name, email, password, and account preferences can go here later.</p>
        </div>
        <div className="rounded-4xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Orders</h2>
          <p className="mt-3 text-zinc-600">Track past purchases and order status here.</p>
        </div>
        <div className="rounded-4xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Addresses</h2>
          <p className="mt-3 text-zinc-600">Saved delivery addresses will fit naturally in this section.</p>
        </div>
      </Container>
    </main>
  );
}