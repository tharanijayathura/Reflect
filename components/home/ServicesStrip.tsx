import Container from '@/components/common/Container';
import { services } from '@/lib/data';

export default function ServicesStrip() {
  return (
    <section className="py-20">
      <Container>
          <div className="overflow-hidden rounded-4xl border border-zinc-200 bg-linear-to-br from-white via-zinc-50 to-amber-50 p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">Store benefits</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
              Everything is built to feel polished, fast, and easy to update.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((item, index) => (
              <div key={item} className="rounded-3xl border border-white/80 bg-white/80 p-5 shadow-sm backdrop-blur">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-bold text-white">
                  0{index + 1}
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Trust point
                </p>
                <p className="mt-2 text-base leading-7 text-zinc-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}