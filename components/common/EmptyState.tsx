import Button from './Button';

type EmptyStateProps = {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function EmptyState({ title, description, buttonText, buttonHref }: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-10 text-center">
      <h3 className="text-2xl font-bold text-zinc-900">{title}</h3>
      <p className="mx-auto mt-3 max-w-xl text-zinc-600">{description}</p>
      {buttonText && buttonHref ? <Button href={buttonHref} className="mt-6">{buttonText}</Button> : null}
    </div>
  );
}