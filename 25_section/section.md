The Ultimate React Course 2023: React, Redux & More
Section 25: Setting Up Our Biggest Project + Styled Components


326. Section Overview

327. Application Planning

328. Please Download Startet Files Again

329. Setting Up the Project: "The Wild Oasis"

330. Introduction to Styled Components
-instaliramo VS Code ekstenziju vscode-styled-components
-u terminalu instaliramo Styled components paket
-u terminal ukucamo komandu npm i styled-components
-u App.jsx komponentu importujemo objekt styled
-kreiramo komponentu const H1
-u return izjavu dodajemo varijablu H1
-kreiramo varijablu const Button
-kreiramo varijablu const Input
-kreiramo varijablu const StyledApp

331. Global Styles With Styled Components
-u folderu styles kreiramo GlobalStyles.js fajl
-u GlobalStyles.js fajl importujemo funkciju createGlobalStyle
-kreiramo varijablu const GlobalStyles
-eksportujemo varijablu GlobalStyles kao default
-u komponentu App.jsx importujemo komponentu GlobalStyles
-kreiramo komponentu Button.jsx 
-u komponenti Button.jsx kreiramo i eksportujemo komponentu Button kao default
-u komponentu App.jsx importujemo komponentu Button.jsx
-u ui folderu kreiramo komponentu Input.jsx
-u komponentu App.jsx importujemo komponentu Input.jsx

332. Styled Component Props and the "css" Function
-u ui folderu kreiramo komponentu Heading.jsx
-u App.jsx komponentu importujemo komponentu Heading.jsx
-u App.jsx komponenti u return izjavi komponentama Heading dodajemo prop type
-u komponenti Heading.jsx, u styled.h1 dojemo funkciju sa parametrom props
-umjesto prop type dodajemo prop as

333. Building More Reusable Styled Components
-u ui folderu kreiramo komponentu Row.jsx
-u App.jsx importujemo komponentu Row.jsx
-u komponenti Row.jsx, komponenti Row dodajemo prop defaultProps 
-u komponenti Button.jsx kreiramo objekt const sizes
-komponenti Button dodajemo prop defaultProps 
-u App.jsx komponenti, u return izjavi komponenti Button dodajemo prop variation i size

334. Setting Up Pages and Routes
-u terminalu instaliramo React Router Dom paket
-u komponentu App.jsx importujemo komponent BrowserRouter, Route, Routes
-importujemo komponente
-importujemo GlobalStyles.js fajl

335. Building the App Layout
-u ui folderu kreiramo komponentu AppLayout.jsx
-u komponentu AppLayout.jsx importujemo komponentu Outlet
-u komponentu App.jsx importujemo komponentu AppLayout.jsx
-u ui folderu kreiramo komponente Header.jsx i Sidebar.jsx
-u komponentu AppLayout.jsx importujemo komponente Header.jsx i Sidebar.jsx
-u komponenti AppLayout.jsx kreiramo varijablu const Main
-u komponenti Header.jsx kreiramo varijablu const StyledHeader
-u komponenti Sidebar.jsx kreiramo varijablu const StyledSidebar
-u komponenti AppLayout.jsx kreiramo varijablu const StyledAppLayout

336. Building the Sidebar and Main Navigation
-u komponenti MainNav.jsx kreiramo varijable const NavList i const StyledNavLink
-u terminalu instaliramo paket React Icons
-u terminal ukucamo komandu npm i react-icons
-otvorimo web stranicu https://react-icons.github.io/react-icons/
-u komponentu MainNav.jsx importujemo React Ikonice
