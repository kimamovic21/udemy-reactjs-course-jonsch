The Ultimate React Course 2023: React, Redux & More
Section 23: [Optional] Tailwind CSS Crash Course: Styling the App

293. Section Overview

294. What is Tailwind CSS ?
-stilizovane klase 

295. Setting Up Tailwind CSS
-otvorimo web stranicu https://tailwindcss.com/
-u terminalu instaliramo Tailwind CSS pakete
-u index.css fajl importujemo tailwind CSS klase
-u tailwind.config.js fajlu importujemo kod
-https://stackoverflow.com/questions/66288645/vite-does-not-build-tailwind-based-on-config
-https://flaviocopes.com/fix-unknown-at-rule-tailwind/
-instaliramo Tailwind CSS Intellisense VS Code ekstenziju
-https://github.com/tailwindlabs/prettier-plugin-tailwindcss
-instaliramo u terminalu Tailwind CSS + Prettier paket
-kreiramo prettier.config.js fajl
-instaliramo VS Code ekstenziju Tailwind CSS Fold

296. Working With Color
-u jsx komponentama, HTML elementima dodajemo Tailwind CSS klase

297. Styling Text
-u index.html fajlu HTML elementima dodajemo klase 
-kreiramo komponentu Username.jsx
-u komponentu Header.jsx importujemo komponentu Username.jsx

298. The Box Model: Spacing, Borders and Display
-u komponentu Home.jsx importujemo komponentu CreateUser.jsx

299. Responsive Design
-mobile first pristup responzivnom dizajnu
-5 breakpoint - tacaka responzivnog dizajna
-u klase dodajemo breakpoint klase sm:, md:, lg:

300. Using Flexbox
-u komponente CartOverview.jsx i Header.jsx, roditelj div elementima dodajemo flexbox klase

301. Using CSS Grid
-u komponentu AppLayout.jsx roditelj div elementu dodajemo TailwindCSS grid klase

302. Styling Buttons: Element States and Transitions
-u komponenti Cart.jsx komponenti Link dodajemo Tailwind CSS klase
-u komponenti CreateOrder.jsx button elementu dodajemo Tailwind CSS klase

303. Styling Form Elements
-u komponentama SearchOrder.jsx i CreateOrder.jsx HTML elementima dodajemo Tailwind CSS klase

304. Reusing Styles With @apply
-u index.css fajlu kreiramo @layer components
-kreiramo Tailwind CSS klase
-kreiramo klasu .input
-dodajemo keyword @apply

305. Reusing Styles With React Components
-u ui folderu kreiramo komponentu Button.jsx
-funkciji Button dodajemo parametre props children i disabled
-u komponentu CreateOrder.jsx importujemo komponentu Button.jsx
-u komponentu CreateUser.jsx importujemo komponentu Button.jsx
-u ui folderu kreiramo komponentu LinkButton.jsx
-funkciji LinkButton dodajemo parametre props children i to
-u komponentu Cart.jsx importujemo komponentu LinkButton.jsx
-u komponentu Error.jsx importujemo komponentu LinkButton.jsx
-u komponenti LinkButton.jsx dodajemo uslov if (to === '-1')
-u komponentu Cart.jsx importujemo komponentu Button.jsx
-u komponenti Button.jsx, funkciji Button dodajemo parametar prop to
-dodajemo uslov if (to)

306. Absolute Positioning, z-index and More
-u komponenti Loader.jsx roditelj div elementu dodajemo klasu apsolutnu

307. Configuring Tailwind: Custom Font Family
-otvorimo web stranicu https://fonts.google.com/specimen/Roboto+Mono
-u index.html fajl dodajemo linkove za font
-u tailwind.config.js fajl, u objekt theme, dodajemo objet fontFamily
-u objekt extend dodajemo custom vrijednost

308. Styling the Menu
-u komponenti MenuItem.jsx, HTML elementima dodajemo Tailwind CSS klase
-img elementu dodajeno dinamicku klasu
-importujemo komponentu Button.jsx
-u return izjavi, komponenti Button dodajemo prop type
-u komponenti Button.jsx kreiramo objekt styles

309. Styling the Cart
-u komponenti Cart.jsx, roditelj div elementu dodajemo Tailwind CSS klase
-u komponentu CartItem.jsx importujemo komponentu Button.jsx

310. Styling the Order Form
-u komponenti CreateOrder.jsx HTML elementima dodajemo Tailwind CSS klase
-Emoji kao favicon ikonica - https://css-tricks.com/emoji-as-a-favicon/

311. Styling the Order Overview
-u komponentu Order.jsx, HTML elementima dodajemo Tailwind CSS klase
-kreiramo ul element
-u ul element dodajemo metodu cart.map()
