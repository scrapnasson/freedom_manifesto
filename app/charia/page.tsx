import Layout from "../components/Layout";

export default function Charia() {
  const pays = [
    {
      nom: "Arabie Saoudite",
      application: "Quasi-totale",
      details:
        "La charia est la seule source de droit. Les châtiments corporels sont en vigueur (flagellation, décapitation), basés sur le fiqh hanbalite.",
      source: "https://www.britannica.com/place/Saudi-Arabia/Justice"
    },
    {
      nom: "Iran",
      application: "Quasi-totale",
      details:
        "République islamique fondée sur la charia chiite. Code pénal basé sur le droit islamique (hudud, qisas, diyya).",
      source: "https://iranhrdc.org/islamic-penal-code-of-iran/"
    },
    {
      nom: "Afghanistan",
      application: "Très forte",
      details:
        "Sous le régime taliban, application très rigide de la charia sunnite, notamment sur les femmes, l'apostasie, le voile, et les exécutions.",
      source: "https://www.hrw.org/news/2022/01/18/afghanistan-womens-rights-under-taliban"
    },
    {
      nom: "Pakistan",
      application: "Partielle",
      details:
        "La constitution intègre des éléments de charia. Blasphème, hudud, et lois sur les femmes inspirées du droit islamique.",
      source: "https://www.constitutionnet.org/country/pakistan"
    },
    {
      nom: "Malaisie",
      application: "Partielle",
      details:
        "La charia est appliquée aux musulmans dans les domaines du droit familial et moral. Certains États, comme Kelantan et Terengganu, ont adopté des lois inspirées de la charia, mais leur mise en œuvre est limitée par la Constitution fédérale. Les peines prévues par la charia sont restreintes à des amendes, des peines de prison et des coups de canne, conformément à la loi fédérale.",
      source: "https://en.wikipedia.org/wiki/Application_of_Sharia_by_country#Malaysia"
    },    
    {
      nom: "Soudan",
      application: "Historique puis réduite",
      details:
        "Jusqu’en 2020, la charia dominait. Depuis, réformes vers un droit civil. Apostasie décriminalisée récemment.",
      source: "https://www.reuters.com/article/us-sudan-politics-reform-idUSKCN24H0KD"
    },
    {
      nom: "Nigéria (Nord)",
      application: "Régionale",
      details:
        "Dans 12 États du Nord, la charia est appliquée pour les musulmans uniquement. Lapidation et amputations ont été ordonnées.",
      source: "https://www.bbc.com/news/world-africa-27352980"
    },
    {
      nom: "Indonésie (Aceh)",
      application: "Régionale",
      details:
        "La province d’Aceh applique la charia : flagellation publique, interdictions morales, peines pour adultère et homosexualité.",
      source: "https://www.hrw.org/news/2018/11/22/indonesia-sharia-punishments-aceh"
    },
    {
      nom: "Émirats Arabes Unis",
      application: "Modérée",
      details:
        "Charia utilisée en droit familial, successions, morale publique. Droit civil partiellement influencé par les modèles occidentaux.",
      source: "https://www.loc.gov/item/global-legal-monitor/2020-12-01/united-arab-emirates-major-legal-reforms/"
    },
    {
      nom: "Maroc",
      application: "Partielle",
      details:
        "Droit familial (Moudawana) fondé sur la charia, mais réformé en 2004. Peines religieuses non appliquées.",
      source: "https://www.hrw.org/news/2004/02/19/morocco-family-law-reforms"
    },
    {
      nom: "Algérie",
      application: "Partielle",
      details:
        "L’Algérie applique la charia dans le droit familial (Code de la famille). L’article 222 du Code pénal permet la poursuite de personnes pour non-respect du jeûne de Ramadan.",
      source: "https://www.legislation-securite.dz/fr/node/34862"
    },
    {
      nom: "Turquie",
      application: "Aucune",
      details:
        "Laïcité constitutionnelle depuis Atatürk. Droit totalement civil, bien que l’influence islamique réapparaisse politiquement.",
      source: "https://www.constitutionnet.org/country/turkey"
    }
  ];

  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        <h1 className="text-3xl font-bold text-center">⚖️ Application de la charia dans le monde musulman</h1>
        <p className="text-center italic">
          Aucun État musulman n&apos;applique la charia de manière intégrale. Ce sont souvent les lois civiles ou internationales qui freinent son application totale.
        </p>

        <p className="text-md text-center">
          Cette tension entre les prescriptions religieuses et les droits humains universels illustre le rôle structurant de la pression moderne dans la limitation des lois islamistes.
        </p>

        <div className="space-y-6">
          {pays.map((p, idx) => (
            <div
              key={idx}
              className="border border-[color:rgba(0,0,0,0.1)] dark:border-[color:rgba(255,255,255,0.1)] p-4 rounded-lg bg-[var(--background)] text-[var(--foreground)] shadow"
            >
              <h2 className="text-xl font-semibold">{p.nom}</h2>
              <p className="text-sm italic">Application : {p.application}</p>
              <p className="mt-2">{p.details}</p>
              <a
                href={p.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 underline mt-2 inline-block"
              >
                Source
              </a>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
