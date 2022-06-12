import Layout from "@/components/Layout";
import styles from "@/styles/Index.module.css";
import Image from "next/image";

export default function HomePage() {
  return (
    <Layout
      title="Jak pisać dobre opisy produktów w sklepie interentowym"
      description="Jeśli jesteś autorem opisów produtów lub usług w sklepie interentowym to z tego poradnika dowiesz się jak pisać opisy, które sprzedają."
    >
      <h1>Jak przygotowywać opisy produktów, które sprzedają.</h1>
      <p>Cześć. Słyszę, że protestujesz! Opisy nie sprzedają!</p>
      <p>To prawda i jednocześnie nieprawda!</p>
      <p>
        Oczywiście <strong>sam dobry opis </strong>nie sprzeda twojego produktu
        lub usługi. Musisz mieć produkt lub usługę, która mówiąc{" "}
        <strong>ogólnie spełni oczekiwania</strong> twojej potencjalnej klientki
        lub twojego potencjalnego klienta.
      </p>
      <p>
        To oczywiście truzim, chociaż, z naszego doświadczenia agencyjnego mogę
        powiedzieć, że nie wszyscy zdają sobie z tego sprawę w pełni.
      </p>
      <h2>Opisy produktów, które przekonują do zakupu u Ciebie.</h2>
      <p>
        Co zatem zrobić, żeby napisać taki opis produktu, który sprawi, że
        <strong>
          {" "}
          pomoże on podjąć klientowi decyzję o zakupie twojego produktu
        </strong>{" "}
        lub usługi, zamiast podobnych w sklepie twojej konkurencji?
      </p>
      <p>
        Z doświadczenia sklepów, które odnoszą sukcesy w sprzedaży wynika, że
        oprócz ciekawych, pełnych faktów opisów należy{" "}
        <strong>
          przygotować opisy zaspokojające oczekiwania wielu różnych klientów
        </strong>
        .
      </p>
      <h2>Twoi klienci są różni.</h2>
      <p>
        Jeśli przygotowujesz opisy w opraciu o swoje preferencje i oczekiwania,
        popełniasz poważny błąd!
      </p>
      <p>
        Twój sklep internetowy odwiedzają ludzie, którzy w większości nie są
        podobni do ciebie.
      </p>
      <ul>
        <li className={styles.indexList}>
          Pani Ciekawska / Pan Ciekawski, chce wiedzieć jak najwięcej. Dla tych
          klientów ważne będą <strong>szczegóły</strong>!
        </li>
        <li className={styles.indexList}>
          Państwo <strong>Niecierpliwi</strong> chcą po spojrzeniu na pierwszy
          paragraf zorientować się czy ten produkt lub usługa spełnia ich
          oczekiwania. Czy w ogóle dobrze trafili na właściwą stronę!
        </li>
        <li className={styles.indexList}>
          <strong>Pożeracze obrazów</strong> będą sycili swoje oczy pięknymi
          zdjęciami produktów, zechcą zobaczyć zbliżenia, więc dla nich ważne
          będą zdjęcia w dobrej jakości lub zdjęcia makro, ze wszystkich
          możliwych stron.
        </li>
      </ul>
      <h3>
        Jest jeszcze wiele różnych osobowości, dla których powinieneś
        przygotować swój <em>szwedzki stół</em> z opisami.
      </h3>
      <p>
        Co zatem robić? Trzeba <em>wejść w buty</em> wszystkich możliwych typów
        klientów i przygotować opisy pod kątem ich zainteresowań.
      </p>
      <p>Pytanie. Jak zrobić to w najlepszy, najprostszy sposób?</p>
      <p>
        Moim zdaniem należy na <strong>początku opisu</strong> zrobić dwie
        rzeczy:
      </p>
      <ul>
        <li className={styles.indexList}>
          Napisać dobry, ciekawy i krótki <strong>wstęp</strong> (dla
          Niecierpliwych).
        </li>
        <li className={styles.indexList}>
          Następnie dobrze jest przygotować <strong>Spis treści</strong>.
        </li>
      </ul>
      <h3>Po co spis treści w opisie produktu?</h3>
      <p>
        <strong>Spis treści w opisie produktu to dobry zabieg</strong>, który
        pozwoli wszystkim zorientować się, czy interesujące treści znajdują się
        na stronie na której Internautka / Internauta ląduje.
      </p>
      <p>
        Po jednym spojrzeniu na spis treści możemy, podobnie gdy podchodzimy do
        szwedzkiego stołu, zorientować, się czy dania na które mamy apetyt,
        znajdują się na stole. Możemy zatem szybko sięgnąć po te dania, na które
        mamy w danej chwili apetyt.
      </p>
      <p>
        Jeśli <strong>zainteresowało Cię</strong> to co przeczytałaś /
        przeczytałeś wyżej napisz do nas na adres email
        <em>hello@kursydlazielonych.pl</em>
      </p>
      <p>
        <strong>Ciąg dalszy nastąpi!</strong>
      </p>

      <p>
        <em>Autor: Robocik</em>
      </p>
      <div className={styles.robotImage}>
        <Image src="/img/svg/robot.svg" alt="Logo" width="128" height="128" />
      </div>
    </Layout>
  );
}
