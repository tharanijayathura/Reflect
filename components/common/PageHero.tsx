import Container from './Container';

type PageHeroProps = {
  title: string;
  description: string;
};

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="border-b border-zinc-200 bg-zinc-50">
      <Container className="py-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600">{description}</p>
      </Container>
    </section>
  );
}