import Layout from "../components/Layout";

export default function Page() {
  const sources = [
    {
      type: "Coran",
      ref: "Sourate An-Nur (24:31)",
      text:
        "Et dis aux croyantes de baisser leurs regards, de garder leur chasteté, et de ne montrer de leurs atours que ce qui en paraît... qu'elles rabattent leur voile sur leurs poitrines...",
    },
    {
      type: "Coran",
      ref: "Sourate Al-Ahzab (33:59)",
      text:
        "Ô Prophète ! Dis à tes épouses, à tes filles et aux femmes des croyants de ramener sur elles leurs grands voiles : elles en seront plus vite reconnues et éviteront d'être offensées...",
    },
    {
      type: "Tafsir",
      ref: "Tafsir Ibn Kathir sur 33:59",
      text:
        "Ce verset montre que les femmes libres doivent porter le jilbab pour se distinguer des esclaves ou des non-croyantes. Il s’agit de marquer une hiérarchie de statut social et religieux.",
    },
    {
      type: "Fiqh (jurisprudence islamique)",
      ref: "Al-Muwatta de l'imam Malik, Livre 30, Hadith 17",
      text:
        "La peine pour la fornication d'une femme libre est la lapidation, mais pour une esclave, c’est la moitié de cette peine.",
    },
    {
      type: "Hadith (Sahih Muslim)",
      ref: "Livre 4, Hadith 2127",
      text:
        "Le Prophète a dit : 'Une femme ne doit pas voyager seule sans un mahram.'",
    },
    {
      type: "Coran",
      ref: "Sourate An-Nisa (4:11)",
      text:
        "Voici ce qu’Allah vous enjoint au sujet de vos enfants : au garçon, une part équivalente à celle de deux filles...",
    },
    {
      type: "Tafsir",
      ref: "Al-Jalalayn sur 4:11",
      text:
        "L'homme reçoit une double part de l'héritage pour subvenir aux besoins familiaux, la femme étant considérée comme dépendante." 
    }
  ];

  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <h1 className="text-3xl font-bold text-center">👩‍⚖️ Les Femmes dans l’idéologie islamique</h1>
        <p className="text-center italic">
          Une analyse des textes fondateurs mettant en lumière les discriminations entre femmes libres, esclaves, non-croyantes, et sur les obligations vestimentaires.
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