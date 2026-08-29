import { practices } from "../lib/practices";
import { GuideReader } from "./guide-reader";

export default function Home() {
  const practice = practices[0];

  return (
    <main className="showcase">
      <header className="topbar">
        <span>ПРАКТИКИ ОТ АНДРЕЯ ОНГРИ</span>
      </header>

      <section className="intro">
        <h1>Практики от Андрея Онгри</h1>
      </section>

      <section className="shelf" aria-label="Витрина практикумов">
        <article className="practice-card">
          <a className="cover" href={`/praktiki/${practice.slug}`} aria-label={`Открыть практику «${practice.title}»`}>
            <img src={practice.cover} alt={`Первая страница гайда «${practice.title}»`} />
          </a>
          <div className="practice-info">
            <p className="eyebrow">{practice.format}</p>
            <h2>{practice.title}</h2>
            <p>{practice.description}</p>
            <div className="actions">
              <GuideReader guideUrl={practice.guide} title={practice.title} />
              <button type="button" disabled>Скачать</button>
            </div>
            <p className="contents">Внутри: {practice.includes}</p>
          </div>
        </article>
      </section>

      <footer>НОВЫЕ ПРАКТИКИ ПОЯВЛЯЮТСЯ ТОЛЬКО ПОСЛЕ ПРОВЕРКИ В КОНТЕНТЕ</footer>
    </main>
  );
}
