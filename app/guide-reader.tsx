"use client";

import { useState } from "react";

export function GuideReader({ guideUrl, title }: { guideUrl: string; title: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" className="open-guide" onClick={() => setIsOpen(true)}>Открыть</button>
      {isOpen && (
        <section className="guide-reader" aria-label={`Просмотр гайда «${title}»`}>
          <header>
            <button type="button" onClick={() => setIsOpen(false)}>← НА ГЛАВНУЮ</button>
            <span>{title}</span>
          </header>
          <iframe title={title} src={guideUrl} />
        </section>
      )}
    </>
  );
}
