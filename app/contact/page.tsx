import PageHero from '@/components/common/PageHero';
import Container from '@/components/common/Container';

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact Us"
        description="A simple support page for customer trust and store completeness."
      />
      <Container className="grid gap-8 py-16 md:grid-cols-2">
        <div className="rounded-4xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-zinc-900">Get in touch</h2>
          <p className="mt-4 text-zinc-600">Email: support@reflectfashion.com</p>
          <p className="mt-2 text-zinc-600">Phone: +00 123 456 789</p>
          <p className="mt-2 text-zinc-600">Hours: Mon - Sat, 9:00 AM - 6:00 PM</p>
        </div>
        <div className="rounded-4xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="text-2xl font-bold text-zinc-900">Support form</h2>
          <div className="mt-6 space-y-4">
            <input className="w-full rounded-xl border border-zinc-300 px-4 py-3" placeholder="Your name" />
            <input className="w-full rounded-xl border border-zinc-300 px-4 py-3" placeholder="Your email" />
            <textarea className="min-h-40 w-full rounded-xl border border-zinc-300 px-4 py-3" placeholder="How can we help?" />
          </div>
        </div>
      </Container>
    </main>
  );
}