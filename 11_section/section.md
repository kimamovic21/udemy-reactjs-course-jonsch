The Ultimate React Course 2023: React, Redux & More
Section 11: How React Works Behind the Scenes


122. Section Overview

123. Project Setup and Walkthrough

124. Components, Instances and Elements
-komponenta je opis UI
-komponenta je funkcija koja vraca React elemente, napisana kao jsx
-instance su kreirane kada koristimo komponente
-zivotni ciklus komponente - kreirane, koristenje i brisanje
-jsx je konvertovan u React.createElement()
-React element je rezulatat pozivanja funkcije

125. Instances and Elements in Practice
-https://stackoverflow.com/questions/43584125/render-object-as-react-component
-u App.js fajlu ispisujemo komponentu u konzolu
-https://stackoverflow.com/questions/55622768/uncaught-invariant-violation-rendered-more-hooks-than-during-the-previous-rende

126. How Rendering Works: Overview
-promjene stanje okidaju renderovanje komponente
-dvije situacije koje okidaju renderovanje: inicijalno renderovanje i azuriranje stanja

127. How Rendering Works: The Render Phase
-virtualni DOM: drvo React elemenata kreiran od instanci komponenata
-renderovanje komponente ce uzrokovati da sva njegova djeca komponenete budu takoder renderovane
-izmirenje - react odlucuje koji DOM element treba da bude umetnut, izbrisan, azuriran da bi se odrazilo na zadnju promjenu stanja
-stablo vlakana: interno drvo koje ima "vlakno" sa svaku instancu komponente i DOM element
-vlakna nisu rekreirana na svako okidanje

128. How Rendering Works: The Commit Phase
-commit je sinhronizovani proces
-React ne dira DOM, React samo okida
-okidanje aplikacije
-renderovanje aplikacije

129. How Diffing Works ?
-dvije fundamentalne pretpostavke
1. dva elementa razlicitog tipa ce proizvesti razlicita drva
2. elementi sa stabilnim kljucem prop ce ostatiti isti kroz okidanja
-ista pozicija, razlicit element
-ista pozicija, isti element

130. Diffing Rules in Practice

131. The Key Prop
-specijalni prop koji dodajemo elementu
-kljucevi u listi
-kljuc prop za resetovanje stanja

132. Resetting State With the Key Prop
-u komponenti Tabbed.jsx, komponenti TabContent dodajemo prop key

133. Using the Key Prop to Fix Our Eat-'N-Split App
-u projektu 08_section, u App.js fajlu, komponenti FormSplitBill dodajemo prop key

134. Rules for Render Logic: Pure Components
-dva tipa logike: okidanje i dogadaj funkcija

135. State Update Batching
-azuriranje stanje je asinhrono
-automatsko batching u react 18 verziji

136. State Update Batching in Practice
-u komponenti TabContent.jsx, kreiramo funkciju handleUndo()
-button elementu Undo dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo vrijednost funkcije handleUndo()
-kreiramo funkciju handleTripleIncrement()
-button elementu +++ dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo vrijednost funkcije handleTripleIncrement()
-koristenje callback funkcije u set funkcija kada hocemo da azuriramo stanje
-kreiramo funkciju handleUndoLater()
-u button element undo in 2s dodajemo dogadaj onClick
-u onClick dogadaj proslijedujemo vrijednost funkcije handleUndoLater()
-https://stackoverflow.com/questions/71668256/deprecation-notice-reactdom-render-is-no-longer-supported-in-react-18

137. How Events Work in React
-React vrsi delegiranje dogadaja za sve dogadaje u nasoj aplikaciji
-SyntheticEvent - omotac oko DOMovog izvornog objekt dogadaja

138. Libraries vs Frameworks & The React Ecosystem
-React biblioteke
-okviri napravljeni zasnovani na React-u

139. Section Summary: Practical Takeaways
