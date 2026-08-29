import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPractice, practices } from "../../../lib/practices";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return practices.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const practice = getPractice(slug);
  if (!practice) return {};
  return { title: `${practice.title} — Практики от Андрея Онгри`, description: practice.description };
}

export default async function PracticePage({ params }: Props) {
  const { slug } = await params;
  const practice = getPractice(slug);
  if (!practice) notFound();

  return (
    <main className="showcase detail-page">
      <header className="topbar detail-topbar">
        <span>ПРАКТИКИ ОТ АНДРЕЯ ОНГРИ</span>
        <Link href="/">← ВСЕ ПРАКТИКИ</Link>
      </header>
      <section className="detail-card">
        <a className="cover" href={practice.guide} target="_blank" rel="noreferrer" aria-label={`Открыть PDF «${practice.title}»`}>
          <img src={practice.cover} alt={`Первая страница гайда «${practice.title}»`} />
        </a>
        <div className="practice-info">
          <p className="eyebrow">{practice.format}</p>
          <h1>{practice.title}</h1>
          <p>{practice.description}</p>
          <p className="contents">Внутри: {practice.includes}</p>
          <div className="actions">
            <a href={practice.guide} target="_blank" rel="noreferrer">Смотреть гайд</a>
            <button type="button" disabled>Скачать</button>
          </div>
        </div>
      </section>
    </main>
  );
}
