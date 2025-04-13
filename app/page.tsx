import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 max-w-5xl mx-auto space-y-12">
      <nav className="flex justify-between items-center border-b pb-4 mb-8">
        <h1 className="text-2xl font-bold">Liberté & Raison</h1>
        <div className="space-x-4 text-sm">
          <Link href="#mariage" className="hover:underline">Mariage</Link>
          <Link href="#femmes" className="hover:underline">Femmes</Link>
          <Link href="#esclavage" className="hover:underline">Esclavage</Link>
          <Link href="#chatiments" className="hover:underline">Châtiments</Link>
          <Link href="#liberte-religieuse" className="hover:underline">Liberté religieuse</Link>
        </div>
      </nav>

      <section className="text-center">
        <h2 className="text-4xl font-bold">Manifeste pour la Liberté de Conscience</h2>
        <p className="text-lg mt-4">
          Défendre les droits humains, la liberté d'expression et de conscience, face aux idéologies figées.
        </p>
        <p className="mt-2 italic">Critique de l'idéologie islamique – respect des personnes</p>
      </section>

      <section id="mariage">
        <h2 className="text-2xl font-semibold">💍 Mariage</h2>
        <Debate
          theme="Mariage"
          left="Imran"
          right="Lina"
          dialogue={[["Imran", "Le mari est le chef de famille, la femme doit lui obéissance."],["Lina", "Dans un mariage, il ne peut y avoir de hiérarchie. L'amour ne se commande pas par loi divine."],["Imran", "L'homme peut épouser jusqu'à quatre femmes, si c'est juste."],["Lina", "L'égalité n'existe pas quand un seul sexe a ce droit. Le mariage moderne repose sur la réciprocité."],["Lina", "Comme disait John Stuart Mill, \"L’amour véritable suppose l’égalité.\""]]} />
      </section>

      <section id="femmes">
        <h2 className="text-2xl font-semibold">👩‍⚖️ Droit des femmes</h2>
        <Debate
          theme="Droits des femmes"
          left="Imran"
          right="Lina"
          dialogue={[["Imran", "La femme hérite de la moitié car l'homme assume la charge financière."],["Lina", "La femme moderne subvient à ses besoins. Pourquoi justifier une inégalité ?"],["Imran", "Le témoignage d'une femme vaut la moitié de celui d'un homme."],["Lina", "C'est une négation de la compétence. Une loi juste juge les faits, pas le genre."],["Lina", "Simone de Beauvoir disait : 'On ne naît pas femme : on le devient.' L’islam codifie le contraire."]]} />
      </section>

      <section id="esclavage">
        <h2 className="text-2xl font-semibold">🪢 Esclavage</h2>
        <Debate
          theme="Esclavage"
          left="Imran"
          right="Lina"
          dialogue={[["Imran", "L'esclavage était une réalité à l'époque du Prophète, encadrée par la charia."],["Lina", "Et pourtant aucune abolition. Les sociétés humaines ont su dépasser cela."],["Imran", "On encourageait la libération des esclaves, mais sans interdire la pratique."],["Lina", "Une morale supérieure condamne, elle ne relativise pas la servitude humaine."],["Lina", "La Déclaration universelle des droits de l'homme (article 4) interdit toute forme d'esclavage."]]} />
      </section>

      <section id="chatiments">
        <h2 className="text-2xl font-semibold">🔗 Châtiments corporels</h2>
        <Debate
          theme="Fouet & Lapidation"
          left="Imran"
          right="Lina"
          dialogue={[["Imran", "Le fouet purifie. La lapidation est une justice divine pour l'adultère."],["Lina", "La violence physique comme punition est indigne. La justice moderne répare, elle ne détruit pas."],["Imran", "Ce sont des lois révélées, on ne peut y toucher."],["Lina", "L’histoire humaine nous enseigne que la loi doit évoluer avec l’éthique et la dignité."],["Lina", "Même la justice du Code Napoléon a été révisée. Pourquoi pas celle d’un texte religieux ?"]]} />
      </section>

      <section id="liberte-religieuse">
        <h2 className="text-2xl font-semibold">🕊️ Liberté religieuse & apostasie</h2>
        <Debate
          theme="Liberté religieuse"
          left="Imran"
          right="Lina"
          dialogue={[["Imran", "L’apostasie est un crime. Celui qui quitte l’islam offense Dieu et trouble l’ordre social."],["Lina", "Changer de foi est un droit fondamental. Une croyance qui doit menacer pour survivre est une croyance faible."],["Imran", "Le Prophète a dit : 'Celui qui change de religion, tuez-le.'"],["Lina", "C’est précisément ce type de commandement qui trahit l’oppression d’une idéologie. Aucune foi ne devrait être armée."],["Lina", "L'article 18 de la Déclaration universelle des droits de l’homme garantit la liberté de changer de religion."]]} />
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">📢 Pourquoi défendre les lois humaines ?</h2>
        <p className="mt-4">
          Les lois humaines ne sont pas parfaites, mais elles sont perfectibles. Elles évoluent grâce aux débats, aux réformes, à l'histoire, et à la critique. Contrairement aux lois divines figées, les sociétés libres se corrigent, elles avancent.
        </p>
        <p className="mt-2 italic">
          « La loi doit changer quand l’humanité grandit. » — Nelson Mandela
        </p>
      </section>

      <footer className="text-center text-xs text-gray-500 pt-12 border-t mt-8">
        <p>Ce site est une œuvre critique et humaniste. Il vise à défendre les libertés sans haine, et à inviter au débat.</p>
        <p className="mt-2">© 2025 – Liberté & Raison</p>
      </footer>
    </main>
  );
}

function Debate({ theme, left, right, dialogue }) {
  return (
    <div className="bg-white shadow p-4 rounded-xl space-y-4 mt-6">
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
