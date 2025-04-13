import Layout from "../components/Layout";

export default function Esclavage() {
  const sources = [
    {
      type: "Coran",
      ref: "Sourate An-Nisa (4:24)",
      text:
        "[Vous sont interdites] les femmes déjà mariées, sauf celles que vos mains droites possèdent... C’est ce qu’Allah vous a prescrit."
    },
    {
      type: "Coran",
      ref: "Sourate Al-Mu’minun (23:5-6)",
      text:
        "...et qui préservent leur chasteté, sauf avec leurs épouses ou ce que possèdent leur main droite (esclaves), car là vraiment, on ne peut les blâmer."
    },
    {
      type: "Hadith (Sahih Muslim)",
      ref: "Livre 8, Hadith 3432",
      text:
        "Un homme a frappé son esclave. Le Prophète lui dit : 'Ils sont vos frères. Quiconque a un frère sous sa main doit le nourrir comme lui-même, l’habiller comme lui-même, et ne pas le charger plus qu’il ne peut.'"
    },
    {
      type: "Tafsir",
      ref: "Tafsir Ibn Kathir sur 4:24",
      text:
        "Ce verset signifie qu’il est permis d’avoir des relations sexuelles avec les captives ou esclaves, même si elles sont mariées, car leur mariage est annulé par la capture."
    },
    {
      type: "Jurisprudence (Fiqh)",
      ref: "Reliance of the Traveller, section m3.12",
      text:
        "Un homme musulman peut avoir des relations sexuelles avec son esclave féminine, même si elle est mineure, à condition qu’elle soit apte au rapport sexuel."
    },
    {
      type: "Coran",
      ref: "Sourate An-Nur (24:33)",
      text:
        "Et ne contraignez pas vos esclaves à la prostitution si elles veulent rester chastes, cherchant ainsi les biens de la vie d’ici-bas."
    }
  ];

  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <h1 className="text-3xl font-bold text-center">🪢 L&apos;Esclavage dans l’idéologie islamique</h1>
        <p className="text-center italic">
          Une compilation des textes justifiant et encadrant l&apos;esclavage, avec mise en évidence des implications morales et juridiques.
        </p>

        <div className="space-y-6">
          {sources.map((source, idx) => (
            <div
              key={idx}
              className="border border-[color:rgba(0,0,0,0.1)] dark:border-[color:rgba(255,255,255,0.1)] p-4 rounded-lg bg-[var(--background)] text-[var(--foreground)] shadow"
            >
              <h3 className="font-semibold text-sm uppercase tracking-wide">{source.type}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{source.ref}</p>
              <p className="text-md">{source.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}