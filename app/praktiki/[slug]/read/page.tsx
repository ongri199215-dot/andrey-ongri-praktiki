import { notFound } from "next/navigation";
import { getPractice, practices } from "../../../../lib/practices";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return practices.map(({ slug }) => ({ slug }));
}

export default async function GuideReadPage({ params }: Props) {
  const { slug } = await params;
  const practice = getPractice(slug);
  if (!practice) notFound();

  return (
    <main className="showcase">
      <header className="topbar detail-topbar">
        <span>{practice.title}</span>
        <a href={`/praktiki/${practice.slug}/`}>← К ПРАКТИКЕ</a>
      </header>
      <section className="guide-pages" aria-label={`Гайд «${practice.title}»`}>
        {Array.from({ length: 12 }, (_, index) => {
          const page = String(index + 1).padStart(2, "0");
          return <img key={page} src={`/guide-pages/${practice.slug}/page-${page}.png`} alt={`Страница ${index + 1} гайда «${practice.title}»`} />;
        })}
      </section>
    </main>
  );
}
