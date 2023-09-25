The Ultimate React Course 2023: React, Redux & More
Section 17: React Router: Building Single-Page Applications (SPA)


203. Section Overview

204. Creating Our First App With Vite: "WorldWise"
-instaliramo aplikaciju vite u terminalu - npm create vite@latest .
-instaliramo node_modules sa npm i

205. Routing and Single-Page Applications (SPAs)
-sa rutiranje povezujemo različite URL-ove sa različitim prikazima korisničkog interfejsa
-omogucava korisnicima da navigiraju izmedu razlicitih aplikacijskih ekrana koristeci pretrazivacev URL
-omogucava da UI bude u sinhronizaciji sa pretrazivacevim URL

206. Implementing Main Pages and Routes
-u src folderu kreiramo folder pages
-u folderu pages kreiramo komponente Product.jsx, Homepage.jsx i Pricing.jsx
-u terminalu instaliramo React Router Dom paket
-u terminal ukucamo komandu npm i react-router-dom
-u App.jsx komponenti importujemo komponente BrowserRouter, Routes, Route
-kreiramo komponente Route 
-komponentama Route dodajemo props path, element
-importujemo komponente u komponentu App.jsx
-kreiramo komponentu PageNotFount.jsx
-u App.jsx komponenti, kreiramo Route komponentu i dodajemo props path='*' i elemennt

207. Linking Between Routes With <Link /> and <NavLink />
-u komponentu Homepage.jsx importujemo komponentu Link
-komponenti Link dodajemo prop to=''
-kreiramo folder components
-u folderu components kreiramo komponentu PageNav.jsx
-komponentu PageNav.jsx importujemo u ostale komponente

208. Styling Options For React Applications
-vrste stilizacije komponenti: inline, global CSS, CSS modules, css-in-js, utility-first CSS, UI biblioteke

209. Using CSS Modules
-kreiramo css fajl PageNav.module.css
-u komponentu PageNav.jsx importujemo css fajl PageNav.module.css
-elementima dodajemo css modules klase
-kreiramo komponentu AppLayout.jsx
-kreiramo komponentu AppNav.jsx i AppNav.module.css fajl
-kreiramo komponentu AppLayout.jsx
-u komponentu AppLayout.jsx importujemo komponentu AppNav.jsx

210. Building the Pages
-kreiramo folder data
-u folderu data kreiramo cities.json fajl
-u komponentu Homepage.jsx importujemo komponentu Link
-kreiramo komponentu PageNav.jsx
-u komponentu PageNav.jsx importujemo komponentu NavLink
-kreiramo komponentu Logo.jsx
-u komponentu Logo.jsx importujemo komponentu Link
-u komponentu PageNav.jsx importujemo komponentu Logo.jsx
-u App.jsx komponentu importujemo komponentu PageNav.jsx
-kreiramo komponentu Login.jsx
-u komponentu Login.jsx importujemo komponentu PageNav.jsx
-u komponentu Product.jsx importujemo komponentu PageNav.jsx
-u komponentu Pricing.jsx importujemo komponentu PageNav.jsx
-u App.jsx komponenti kreiramo komponentu Route za komponentu Login

211. Building the App Layout
-kreiramo komponente Sidebar.jsx i Map.jsx
-kreiramo Sidebar.module.css i Map.module.css fajlove
-u komponentu Sidebar.jsx importujemo komponente Logo.jsx i AppNav.jsx
-kreiramo Footer.jsx i Footer.module.css fajl
-u komponentu Sidebar.jsx importujemo komponentu Footer.jsx
-u komponentu AppLayout.jsx importujemo komponente Sidebar.jsx i Map.jsx

212. Nested Routes and Index Route
-Ruti sa putanjom app dodajemo otvarajuci i zatvarajuci tag
-u toj ruti dodajemo djecu rute za gradove, drzave i formu
-u komponentu Sidebar.jsx importujemo komponentu Sidebar
-u App.jsx komponenti, prvoj komponenti Route dodajemo prop index
-u komponenti AppNav.jsx, kreiramo ul element
-unutar ul elementa, kreiramo li elemente
-u li elementima kreiramo komponente NavLink

213. Implementing the Cities List
-kreiramo komponenti CityList.jsx
-u App.jsx komponenti importujemo komponentu CityList.jsx
-instaliramo json server paket
-u termina ukucamo komandu npm i json-server
-u package.json fajl, u "scripts" dodajemo komandu "server": "json-server --watch data/cities.json --port 8000 --delay 1000" 
-u terminal ukucamo komandu npm run server da pokrenemo json server
-u App.jsx komponentu kreiramo const [cities, setCities] = useState([])
-kreiramo const [isLoading, setIsLoading] = useState(false)
-u komponenti App.jsx, kreiramo funkciju useEffect()
-u funkciji useEffect(), u callback funkciji, kreiramo asinhronu funkciju fetchCities()
-kreiramo varijablu const BASE_URL
-u funkciju fetchCities() dodajemo try - catch - finally blokove koda
-u App.jsx komponenti, u return izjavi, komponenti CityList dodajemo props cities i isLoading
-u komponenti CityList.jsx, funkciji CityList doajemo parametre cities, isLoading
-dodajemo uslov if (isLoading)
-importujemo komponentu Spinner.jsx
-kreiramo komponentu CityItem.jsx
-u komponenti CityItem.jsx, funkcji CityItem dodajemo parametar city
-u komponentu CityList.jsx importujemo komponentu CityItem.jsx
-u return izjavi dodajemo metodu cities.map()
-u metodi cities.map(), komponenti CityItem dodajemo props key i city
-u komponenti CityItem.jsx kreiramo varijable const { cityName, emoji, date } = city
-kreiramo funkciju formatDate() 
-kreiramo funkciju flagEmojiToPNG()
-u komponeti CityList.jsx dodajemo uslov if (!cities.length)
-kreiramo komponentu Message.jsx
-u komponenti Message.jsx, funkciji Message dodajemo parametar message
-u komponentu CityList.jsx importujemo komponentu Message
-u uslov if (!cities.length), komponenti Message dodajemo prop message

214. Implementing the Country List
-kreiramo komponenti CountryList.jsx
-https://stackoverflow.com/questions/52219852/two-children-with-the-same-key-in-react
-kreiramo komponentu CountryItem.jsx
-u komponenti CountryList.jsx importujemo komponentu ContryItem
-u return izjavi, u metodu countries.map() dodajemo komponentu CountryItem
-komponenti CountryItem dodajemo props country i 
-u App.jsx komponentu importujemo komponentu CountryList.jsx
-komponenti CountryList dodajemo props key i country
-App.jsx komponenti, u komponenti Route, komponenti CountryList dodajemo props cities, isLoading
-u CountryList.jsx komponenti kreiramo varijablu const countries

215. Storing State in the URL
-pohranjivanje stanja u url-u

216. Dynamic Routes With URL Parameters
-kreiramo komponentu City.jsx i City.module.css fajl
-u App.jsx komponenti kreiramo rutu sa props path='cities/:id' i element City
-u App.jsx komponentu importujemo komponentu City.jsx
-u komponentu CityItem.jsx importujemo komponentu Link
-komponenti Link dodajemo klasu i prop to
-u komponenti City.jsx importujemo React Hook useParams
-kreiramo varijablu const { id } 

217. Reading and Setting a Query String
-u komponenti CityItem.jsx kreiramo varijablu position
-u return izjavi, komponenti Link dodajemo u prop to={`${id}?lat=${position.lat}&lng=${position.lng}`}
-kreiramo komponentu Map.jsx i Map.module.css fajl
-u komponentu Map.jsx importujemo React Hook useSearchParams
-kreiramo const [searchParams, setSearchParams] = useSearchParams()
-kreiramo varijable const lat i const lng
-u komponentu City.jsx importujemo React Hook useSearchParams
-kreiramo  const [searchParams, setSearchParams] = useSearchParams();
-kreiramo varijable const lat i const lng 

218. Programmatic Navigation with useNavigate
-kreiramo komponentu Form.jsx
-u App.jsx komponentu importujemo komponentu Form.jsx
-u komponenti Map.jsx, importujemo React Hook useNavigate
-kreiramo varijablu const navigate
-u return izjavi, div elementu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo anonimnu funkciju
-u anonimnu funkciju proslijedujemo funkciju navigate()
-kreiramo komponentu Button.jsx
-u komponenti Button.jsx, funkciji Button dodajemo parametre children, onClick, type
-button elementu dodajemo klasu i dogadaj onClick
-u komponentu Form.jsx importujemo komponentu Button.jsx
-u return izjavi, komponenti Button dodajemo prop type
-u komponenti Button.jsx, button elementu dodajemo dinamicko pojavljivanje klase
-u komponentu Form.jsx, importujemo React Hook useNavigate
-kreiramo varijablu const navigate
-button elementu Back dodajemo dogadaj onClick
-u onClick dogadaj proslijedujemo anonimnu funkciju sa parametrom e
-u anonimnu funkciju proslijedujemo funkciju e.preventDefault()
-u anonimnu funkciju proslijedujemo funkciju navigate()

219. Programmatic Navigation with <Navigate/>
-u komponentu App.jsx importujemo komponentu Navigate
-kreiramo Rutu sa prop element u koji proslijedujemo komponentu Navigate
-komponenti Navigate dodajemo prop replace
