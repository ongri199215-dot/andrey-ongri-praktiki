export default function Home() {
  return (
    <main className="showcase">
      <header className="topbar">
        <a className="brand" href="https://t.me/andrei_ongri">АНДРЕЙ ОНГРИ</a>
        <a className="channel" href="https://t.me/andrei_ongri">TELEGRAM ↗</a>
      </header>

      <section className="intro">
        <p>БЕСПЛАТНЫЕ И ПЛАТНЫЕ ПРАКТИКИ</p>
        <h1>Практики<br /><em>от Андрея Онгри</em></h1>
        <span>Для границ, уважения и близких разговоров.</span>
      </section>

      <section className="shelf" aria-label="Витрина практикумов">
        <article className="practice-card">
          <div className="cover" aria-hidden="true">
            <small>АНДРЕЙ ОНГРИ</small>
            <strong>7</strong>
            <h2>сценариев<br />спокойного<br />отказа</h2>
            <i>СИСТЕМА УВАЖЕНИЯ</i>
          </div>
          <div className="practice-info">
            <p className="eyebrow">БЕСПЛАТНЫЙ PDF · 12 СТРАНИЦ</p>
            <h2>7 сценариев спокойного отказа</h2>
            <p>Готовые фразы для ситуаций, когда не хочется соглашаться, но страшно обидеть человека.</p>
            <div className="actions">
              <a href="#sostav">Смотреть</a>
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
