import Layout from "../components/Layout";

export default function Page() {
    const sources = [
        {
            type: "Coran",
            ref: "Sourate An-Nisa (4:3)",
            text:
                "Mariez-vous avec deux, trois ou quatre parmi les femmes qui vous plaisent. Mais si vous craignez de n'être pas équitables, alors une seule...",
        },
        {
            type: "Coran",
            ref: "Sourate An-Nisa (4:34)",
            text:
                "Les hommes ont autorité sur les femmes en raison des faveurs qu’Allah accorde aux uns sur les autres...",
        },
        {
            type: "Hadith (Sahih Bukhari)",
            ref: "Volume 7, Livre 62, Hadith 81",
            text:
                "Le Prophète a dit : 'Si j'avais pu ordonner à quelqu'un de se prosterner devant un autre, j'aurais ordonné à la femme de se prosterner devant son mari.'",
        },
        {
            type: "Tafsir",
            ref: "Tafsir Ibn Kathir sur 4:3",
            text:
                "Ce verset justifie la polygamie mais insiste sur la justice entre les épouses. Ibn Kathir affirme que l’équité est difficile, donc une seule épouse est préférable pour la plupart des hommes.",
        },
        {
            type: "Tafsir",
            ref: "Tafsir Al-Jalalayn sur 4:34",
            text:
                "Les hommes sont responsables des femmes, car ils sont leurs gardiens, doivent les maintenir, les protéger, et les diriger."
        }
    ];

    return (
        <Layout>
            <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
                <h1 className="text-3xl font-bold text-center">💍 Le Mariage dans l’idéologie islamique</h1>
                <p className="text-center italic">
                    Une analyse critique fondée sur les textes religieux et les exégèses traditionnelles.
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