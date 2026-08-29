export type Practice = {
  slug: string;
  title: string;
  description: string;
  format: string;
  cover: string;
  guide: string;
  includes: string;
};

export const practices: Practice[] = [
  {
    slug: "7-stsenariev-spokoynogo-otkaza",
    title: "7 сценариев спокойного отказа",
    description: "Готовые фразы для ситуаций, когда не хочется соглашаться, но страшно обидеть человека.",
    format: "БЕСПЛАТНЫЙ PDF · 12 СТРАНИЦ",
    cover: "/covers/7-stsenariev-spokoynogo-otkaza.png",
    guide: "/guides/7-stsenariev-spokoynogo-otkaza.pdf",
    includes: "Просьбы близких, давление, работа, деньги и право передумать.",
  },
];

export function getPractice(slug: string) {
  return practices.find((practice) => practice.slug === slug);
}
