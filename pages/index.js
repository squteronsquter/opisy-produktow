import Layout from "@/components/Layout";
import styles from "@/styles/Index.module.css";
import Image from "next/image";

export default function HomePage() {
  return (
    <Layout
      title="Jak pisać dobre opisy produktów w sklepie interentowym"
      description="Jeśli jesteś autorem opisów produtów lub usług w sklepie interentowym to z tego poradnika dowiesz się jak pisać opisy, które sprzedają."
    >
      <h1>Jak przygotowywać opisy produktów, które sprzedają?</h1>
      <p>
        <strong>
          Jesteś jak ten leniwy i durnowaty sprzedawca ze stacji CPN (obecny
          Orlen) z okresu dawno minionej ery reglamentacji wszystkiego?
        </strong>
      </p>
      <p>Twoi konkurenci śmieją się z Ciebie?</p>
      <p>
        Twoje opisy produktów są tak sztampowe i durne, że klienci omijają Twój
        sklep z daleka?
      </p>
      <p>
        Nie wierzysz, że <strong>opisy produktów sprzedają!</strong>
      </p>
      <p>
        Słyszę, że protestujesz! <br></br>- <em>Opisy nie sprzedają!</em>
      </p>
      <p>To prawda i jednocześnie nieprawda!</p>
      <p>
        Oczywiście <strong>sam dobry opis </strong>nie sprzeda Twojego produktu
        lub usługi. Musisz mieć produkt lub usługę, która mówiąc{" "}
        <strong>ogólnie spełni oczekiwania</strong> Twojej potencjalnej klientki
        lub Twojego potencjalnego klienta.
      </p>
      <p>
        To oczywiście truizm, chociaż, z naszego doświadczenia agencyjnego mogę
        powiedzieć, że nie wszyscy zdają sobie z tego sprawę w pełni.
      </p>
      <h2>Opisy produktów, które przekonują do zakupu u Ciebie.</h2>
      <p>
        Co zatem zrobić, żeby napisać taki opis produktu, który sprawi, że
        <strong>
          {" "}
          pomoże on podjąć klientom decyzję o zakupie Twojego produktu
        </strong>{" "}
        lub usługi, zamiast podobnych w sklepie Twojej konkurencji?
      </p>
      <p>
        Z doświadczenia sklepów, które odnoszą sukcesy w sprzedaży wynika, że
        oprócz ciekawych, pełnych faktów opisów należy{" "}
        <strong>
          przygotować opisy zaspokojające oczekiwania wielu różnych klientów
        </strong>
        .
      </p>
      <h2>Twoi klienci są różni!</h2>
      <p>
        Jeśli przygotowujesz opisy w oparciu o swoje preferencje i oczekiwania,
        popełniasz poważny błąd!
      </p>
      <p>
        Twój sklep internetowy odwiedzają ludzie, którzy w większości nie są
        podobni do Ciebie.
      </p>
      <ul>
        <li className={styles.indexList}>
          Pani Ciekawska / Pan Ciekawski, chcą wiedzieć jak najwięcej. Dla tych
          klientów ważne będą <strong>szczegóły</strong>!
        </li>
        <li className={styles.indexList}>
          Państwo <strong>Niecierpliwi</strong> pragną, po spojrzeniu na
          pierwszy paragraf, zorientować się, czy ten produkt lub usługa spełnia
          ich oczekiwania. Czy trafili na właściwą stronę?
        </li>
        <li className={styles.indexList}>
          <strong>Pożeracze obrazów</strong> będą sycili oczy pięknymi zdjęciami
          produktów. Zechcą zobaczyć zbliżenia, więc dla nich ważne będą zdjęcia
          w dobrej jakości lub zdjęcia makro, ze wszystkich możliwych stron.
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
      <h3>
        Po co <em>spis treści</em> w opisie produktu?
      </h3>
      <p>
        <strong>Spis treści w opisie produktu to dobry zabieg</strong>, który
        pozwoli wszystkim zorientować się, czy interesujące treści znajdują się
        na stronie na której Internautka / Internauta ląduje.
      </p>
      <p>
        Po jednym spojrzeniu na spis treści możemy, podobnie jak w sytuacji, gdy
        podchodzimy do szwedzkiego stołu, zorientować, się czy dania na które
        mamy apetyt, znajdują się na stole. Możemy zatem szybko sięgnąć po te
        dania, na które mamy w danej chwili apetyt.
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
        <em>Autor: Robocik aka Karol Bajrulewicz</em>
      </p>
      <div className={styles.robotImage}>
        <Image src="/img/svg/robot.svg" alt="Logo" width="96" height="96" />
      </div>
    </Layout>
  );
}
