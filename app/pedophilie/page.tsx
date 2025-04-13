import Layout from "../components/Layout";

export default function Pedophilie() {
  const sources = [
    {
      type: "Hadith (Sahih al-Bukhari)",
      ref: "Volume 7, Livre 62, Hadith 64",
      text:
        "Le Prophète a épousé Aïcha alors qu'elle avait six ans et il a consommé le mariage quand elle en avait neuf."
    },
    {
        type: "Hadith (Sahih Muslim)",
        ref: "Hadith 1422c",
        text:
          "Aïcha a rapporté : Le Messager d’Allah m’épousa alors que j’avais six ans, et il consomma le mariage quand j’en avais neuf, alors que je jouais encore avec mes poupées."
    },
    {
      type: "Sira (biographie prophétique)",
      ref: "Ibn Hisham, Biographie du Prophète",
      text:
        "Aïcha rapporta : Le Messager d’Allah m’épousa alors que j’avais six ans. Nous allâmes à Médine et j’avais neuf ans lorsqu’il consomma le mariage."
    },
    {
      type: "Fiqh (jurisprudence hanbalite)",
      ref: "Ibn Qudamah, al-Mughni, chapitre du mariage des mineures",
      text:
        "Il est permis pour un père de marier sa fille vierge même si elle est encore une enfant et incapable de consentir, car le Prophète a épousé Aïcha alors qu'elle était mineure."
    },
    {
      type: "Tafsir",
      ref: "Tafsir al-Tabari sur Sourate Talaq (65:4)",
      text:
        "Ce verset traite de l’attente légale (iddah) des femmes ménopausées, enceintes, et de celles qui n'ont pas encore eu leurs règles. Al-Tabari commente qu’il s'agit des filles trop jeunes pour la menstruation."
    },
    {
      type: "Coran",
      ref: "Sourate At-Talaq (65:4)",
      text:
        "Et celles d’entre vos femmes qui n’espèrent plus avoir de règles... ainsi que celles qui n’ont pas encore eu leurs règles... leur délai est de trois mois."
    }
  ];

  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <h1 className="text-3xl font-bold text-center">🚨 Mariages avec mineures et pédocriminalité</h1>
        <p className="text-center italic">
          Une étude critique des sources religieuses évoquant le mariage ou les rapports avec des filles impubères.
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
