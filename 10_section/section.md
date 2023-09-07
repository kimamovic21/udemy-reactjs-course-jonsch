The Ultimate React Course 2023: React, Redux & More
Section 10: Thinking in React: Components, Composition and Reusability


105. Section Overview

106. Setting Up the "usePopcorn" Project
-kopiramo pocetne App.js i index.css fajlove

107. How to Split a UI Into Components
-analiziranje manjih i vecih komponenti
-naci balans izmedu kreiranja previse malih i previse velikih komponenti
-veliku komponenti podijeliti u manje komponente po potrebi
-logicka odvojenost sadrzaja
-iskoristenost
-odgovornost komponente
-stil kodiranja u komponenti 
-imenovanje komponente prema onome sto radi ili prikazaju
-nikada ne definisati novu komponentu u postojecoj komponenti
-drzati komponente u jednom folderu
-sto su komponente manje, bit ce vise iskoristene

108. Splitting Components in Practice
-kreiramo folder components
-u components folderu kreiramo Navbar.jsx komponentu
-u App.js fajl importujemo komponentu Navbar.jsx
-kreiramo komponentu Main.jsx 
-u App.js fajl importujemo komponentu Main.jsx
-kreiramo komponentu Search.jsx
-u Navbar.jsx komponentu importujemo komponentu Search.jsx
-kreiramo komponentu Logo.jsx
-u Navbar.jsx komponentu importujemo komponentu Logo.jsx
-kreiramo komponentu NumResults.jsx
-u Navbar.jsx komponentu importujemo komponentu NumResults.jsx
-kreiramo komponente ListBox.jsx i WatchedBox.jsx
-u komponentu Main.jsx importujemo komponente ListBox.jsx i WatchedBox.jsx
-kreiramo komponentu MovieList.jsx
-u komponentu ListBox.jsx importujemo komponentu MovieList.jsx
-kreiramo komponentu Movie.jsx
-u komponenti Movie.jsx, funkciji Movie dodajemo parametar destruktuirani prop movie
-u komponentu MovieList.jsx importujemo komponentu Movie.jsx
-u return izjavi, komponenti Movie dodajemo prop movie
-kreiramo komponentu WatchedSummary.jsx
-u komponenti WatchedSummary, funkciji WatchedSummary dodajemo parametre destruktuirane prosp watched i average
-u komponentu WatchedBox.jsx importujemo komponentu WatchedSummary.jsx
-u return izjavi, komponenti WatchedSummary dodajemo prop watched
-kreiramo komponentu WatchedMoviesList.jsx
-u komponentu WatchedMoviesList.jsx, funkciji WatchedMoviesList dodajemo parametar destruktuirani prop watched
-u komponentu WatchedBox.jsx importujemo komponentu WatchedMoviesList.jsx
-u returni izjavi, komponenti WatchedMoviesList dodajemo prop watched
-kreiramo komponentu WatchedMovie.jsx
-u komponenti WatchedMovie.jsx, funkciji WatchedMovie dodajemo parametar destruktuirani prop movie
-u komponenti WatchedMoviesList, u return izjavi, komponenti WatchedMovie dodajemo prop movie

109. Component Categories
-prezentacione komponente bez stanja
-komponente sa stanje
-strukturne komponente

110. Prop Drilling
-u App.js fajlu, u return izjavi, komponenti Main dodajemo prop movies
-u komponenti Main.jsx, funkciji Main dodajemo parametar destruktuirani prop movies
-u return izjavi, komponenti ListBox dodajemo prop movies
-u komponenti ListBox.jsx, funkciji ListBox dodajemo parametar destruktuirani prop movies
-u return izjavi, komponenti MovieList dodajemo prop movies
-u komponenti MovieList.jsx, funkciji MovieList dodajemo parametar destruktuirani prop movies
-u komponenti MovieList, funkciji MovieList dodajemo parametar destruktuirani prop movies
-u App.js fajlu, u return izjavi, komponenti Navbar dodajemo prop movies
-u komponenti Navbar.jsx, funkciji Navbar dodajemo parametar destruktuirani prop movies
-u return izjavi, komponenti NumResults dodajemo prop movies
-u komponenti NumResults.jsx, funkciji NumResults dodajemo parametar destruktuirani prop movies
-u return izjavi dodajemo metodu {movies.length}

111. Component Composition
-kombinacija vise komponenti koristeci children prop izmedu otvorenog i zatvorenog taga komponente

112. Fixing Prop Drilling With Composition (And Building a Layout)
-u komponenti Navbar.jsx, funkciji Navbar dodajemo destruktuirani prop children
-u return izjavu dodajemo children objektu
-u App.js fajlu, u return izjavi, u komponentu Navbar dodajemo komponente 
-u komponentu Main, dodajemo komponente
-u komponenti Main.jsx, funkciji Main dodajemo parametar destruktuirani prop children
-u komponentu ListBox.jsx, funkciji ListBox dodajemo parametar destruktuirani prop children
-u return izjavu dodajemo uslov {isOpen1 && children }
-u App.js fajlu, u komponentu ListBox dodajemo komponentu MovieList

113. Using Composition to Make a Reusable Box
-preimenujemo komponentu ListBox.jsx u Box.jsx
-u App.js fajlu kreiramo jos jednu komponentu Box
-u komponenetu Box dodajemo komponente WatchedSummary i WatchedMoviesList
-komponentama dodajemo prop watched

114. Passing Elements as Props (Alternative to children)
-u komponenti Box.jsx, funkciji Box dodajemo parametar prop element
-u App.js fajlu, u return izjavi, Box komponentama dodajemo prop element
-u prop element proslijedujemo komponente

115. Building a Reusable Star Rating Component
-kreiramo komponentu StarRating.jsx
-u index.js fajl importujemo komponentu StarRating.jsx
-u komponentuStarRating.jsx dodajemo metodu {Array.from(...) }
-kreiramo objekt containerStyle 
-kreiramo objekt starContainerStyle
-kreiramo objekt textStyle
-p elementu dodajemo prop style
-div elementima dodajemo prop style
-u prop style proslijedujemo vrijednost objekata
-u index.js fajlu, komponenti StarRating dodajemo prop maxRating
-u komponenti StarRating, funkciji StarRating dodajemo prop maxRating
-u metodi Array.from dodajemo length: maxRating

116. Creating the Stars
-kreiramo komponentu Star.jsx
-u komponentu StarRating.jsx importujemo komponentu Star.jsx
-u komponenti Star.jsx kreiramo objekt starStyle
-span elementu dodajemo prop style
-u komponenti StarRating.jsx kreiramo const [rating, setRating] = useState(0)
-u p element dodajemo {rating || ''}
-u return izjavi, komponenti Star dodajemo prop onRate
-u komponenti Star.jsx, funkciji Star dodajemo parametar destruktuirani prop onRate
-span elementu dodajemo dogadaj onClick
-u onClick dogadaj proslijedujemo vrijednost funkcije onRate
-u komponenti StarRating.jsx kreiramo funkciju handleRating()
-u return izjavi, komponenti Star dodajemo prop onRate
-u prop onRate proslijedujemo vrijednost anonimne funkcije
-u anonimnu funkciju proslijedujemo vrijednost funkcije handleRating
-u komponenti Star.jsx, funkciji Star dodajemo parametar destruktuirani prop full
-dodajemo uslov {full ? ... : ...}
-u return izjavi, komponenti Star dodajemo prop full

117. Handling Hover Events
-u komponenti StarRating.jsx kreiramo const [temporaryRating, setTemporaryRating] = useState(0)
-u komponenti Star.jsx, span elementu dodajemo dogadaje onMouseOver i onMouseLeave
-u komponenti StarRating.jsx, komponenti Star dodajemo prop onHoverIn i onHoverOut
-u prop onHoverIn proslijedujemo vrijednost callback funkcije
-u callback funkciju dodajemo funkciju setTemporaryRating()
-u komponenti Star.jsx, funkciji Star dodajemo parametre destruktuirane props onHoverIn i onHoverOut
-span elementu dodajemo dogadaje i unutar dogadaja proslijedujemo funkcije onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}
-u komponenti StarRating.jsx, u komponenti Star, u prop full dodajemo ternarni uslov

118. Props as a Component API
-kreator komponente i korisnik komponente
-pronaci balans izmedu malo props i previse props

119. Improving Reusability With Props
-u komponenti StarRating.jsx, komponenti StarRating dodajemo parametre color i size
-u komponenti Star, funkciji Star dodajemo parametre color i size
-u komponenti StarRating.jsx, komponenti Star dodajemo props color i size
-u index.js fajlu, komponenti StarRating dodajemo prop message
-u komponenti StarRating.jsx, funkciji StarRating dodajemo parametar destruktuirani prop message
-u p element dodajemo ternarni uslov message.length === maxRating 
-funkciji StarRating dodajemo parametar destruktuirani prop defaultRating
-kreiramo komponentu Test.jsx
-u Test.jsx komponentu importujemo komponentu StarRating.jsx
-kreiramo const [movieRating, setMovieRating] = useState(0);
-u index.js fajl importujemo komponentu Test.jsx
-u Test.jsx komponenti, komponenti StarRating dodajemo prop onSetRating
-u StarRating.jsx komponenti, funkciji StarRating dodajemo parametar destruktuirani prop onSetRating
-u funkciju handleRating() dodajemo funkciju onSetRating(rating)

120. PropTypes
-u komponentu StarRating.jsx importujemo PropTypes
-kreiramo StarRating.propTypes = { ... }
-https://stackoverflow.com/questions/45692537/proptypes-is-not-defined
