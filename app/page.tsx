"use client";

import Layout from "./components/Layout";

type DebateProps = {
  theme: string;
  left: string;
  right: string;
  dialogue: [string, string][];
};

export default function Home() {



  return (
    <Layout>
      <section className="text-center">
        <h2 className="text-4xl font-bold">Manifeste pour la Liberté de Conscience</h2>
        <p className="text-lg mt-4">
          Défendre les droits humains, la liberté d&apos;expression et de conscience, face aux idéologies figées.
        </p>
        <p className="mt-2 italic">Critique de l&apos;idéologie islamique – respect des personnes</p>
      </section>

      <section id="mariage">
        <h2 className="text-2xl font-semibold">💍 Mariage</h2>
        <Debate
          theme="Mariage"
          left="Imran"
          right="Lina"
          dialogue={[["Imran", "Le mari est le chef de famille, la femme lui doit obéissance."], ["Lina", "Dans un mariage, il ne peut y avoir de hiérarchie. L'amour ne se commande pas par loi divine."], ["Imran", "L'homme peut épouser jusqu'à quatre femmes, si c'est juste."], ["Lina", "L'égalité n'existe pas quand un seul sexe a ce droit. Le mariage moderne repose sur la réciprocité."], ["Lina", "Comme disait John Stuart Mill, \"L’amour véritable suppose l’égalité.\""]]} />
      </section>

      <section id="femmes">
        <h2 className="text-2xl font-semibold">👩‍⚖️ Droit des femmes</h2>
        <Debate
          theme="Droits des femmes"
          left="Imran"
          right="Lina"
          dialogue={[["Imran", "La femme hérite de la moitié car l'homme assume la charge financière."], ["Lina", "La femme moderne subvient à ses besoins. Pourquoi justifier une inégalité ?"], ["Imran", "Le témoignage d'une femme vaut la moitié de celui d'un homme."], ["Lina", "C'est une négation de la compétence. Une loi juste juge les faits, pas le genre."], ["Lina", "Simone de Beauvoir disait : 'On ne naît pas femme : on le devient.' L’islam codifie le contraire."]]} />
      </section>

      <section id="esclavage">
        <h2 className="text-2xl font-semibold">🪢 Esclavage</h2>
        <Debate
          theme="Esclavage"
          left="Imran"
          right="Lina"
          dialogue={[["Imran", "L'esclavage était une réalité à l'époque du Prophète, encadrée par la charia."], ["Lina", "Et pourtant aucune abolition. Les sociétés humaines ont su dépasser cela."], ["Imran", "On encourageait la libération des esclaves, mais sans interdire la pratique."], ["Lina", "Une morale supérieure condamne, elle ne relativise pas la servitude humaine."], ["Lina", "La Déclaration universelle des droits de l'homme (article 4) interdit toute forme d'esclavage."]]} />
      </section>

      <section id="chatiments">
        <h2 className="text-2xl font-semibold">🔗 Châtiments corporels</h2>
        <Debate
          theme="Fouet & Lapidation"
          left="Imran"
          right="Lina"
          dialogue={[["Imran", "Le fouet purifie. La lapidation est une justice divine pour l'adultère."], ["Lina", "La violence physique comme punition est indigne. La justice moderne répare, elle ne détruit pas."], ["Imran", "Ce sont des lois révélées, on ne peut y toucher."], ["Lina", "L’histoire humaine nous enseigne que la loi doit évoluer avec l’éthique et la dignité."], ["Lina", "Même la justice du Code Napoléon a été révisée. Pourquoi pas celle d’un texte religieux ?"]]} />
      </section>

      <section id="liberte-religieuse">
        <h2 className="text-2xl font-semibold">🕊️ Liberté religieuse & apostasie</h2>
        <Debate
          theme="Liberté religieuse"
          left="Imran"
          right="Lina"
          dialogue={[["Imran", "L’apostasie est un crime. Celui qui quitte l’islam offense Dieu et trouble l’ordre social."], ["Lina", "Changer de foi est un droit fondamental. Une croyance qui doit menacer pour survivre est une croyance faible."], ["Imran", "Le Prophète a dit : 'Celui qui change de religion, tuez-le.'"], ["Lina", "C’est précisément ce type de commandement qui trahit l’oppression d’une idéologie. Aucune foi ne devrait être armée."], ["Lina", "L'article 18 de la Déclaration universelle des droits de l’homme garantit la liberté de changer de religion."]]} />
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">📢 Pourquoi défendre les lois humaines ?</h2>
        <p className="mt-4">
          Les lois humaines ne sont pas parfaites, mais elles sont perfectibles. Elles évoluent grâce aux débats, aux réformes, à l&apos;histoire, et à la critique. Contrairement aux lois divines figées, les sociétés libres se corrigent, elles avancent.
        </p>
        <p className="mt-2 italic">
          « La loi doit changer quand l’humanité grandit. » — Nelson Mandela
        </p>
      </section>
    </Layout>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
function Debate({ theme, left, right, dialogue }: DebateProps) {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] shadow p-4 rounded-xl space-y-4 mt-6 transition-colors duration-300 border border-[color:rgba(0,0,0,0.1)] dark:border-[color:rgba(255,255,255,0.1)]">
      {dialogue.map(([speaker, line], i) => (
        <div key={i} className={speaker === left ? "text-left" : "text-right"}>
          <p>
            <strong>{speaker} :</strong> {line}
          </p>
        </div>
      ))}
    </div>
  );
}


