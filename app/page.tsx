export default function Home() {
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
          <a className="cover" href="/guides/7-stsenariev-spokoynogo-otkaza.pdf" target="_blank" rel="noreferrer" aria-label="Открыть гайд">
            <img src="/covers/7-stsenariev-spokoynogo-otkaza.png" alt="Первая страница гайда «7 сценариев спокойного отказа»" />
          </a>
          <div className="practice-info">
            <p className="eyebrow">БЕСПЛАТНЫЙ PDF · 12 СТРАНИЦ</p>
            <h2>7 сценариев спокойного отказа</h2>
            <p>Готовые фразы для ситуаций, когда не хочется соглашаться, но страшно обидеть человека.</p>
            <div className="actions">
              <a href="/guides/7-stsenariev-spokoynogo-otkaza.pdf" target="_blank" rel="noreferrer">Смотреть</a>
              <button type="button" disabled>Скачать</button>
            </div>
            <p id="sostav" className="contents">Внутри: просьбы близких, давление, работа, деньги и право передумать.</p>
          </div>
        </article>
      </section>

      <footer>НОВЫЕ ПРАКТИКИ ПОЯВЛЯЮТСЯ ТОЛЬКО ПОСЛЕ ПРОВЕРКИ В КОНТЕНТЕ</footer>
    </main>
  );
}
