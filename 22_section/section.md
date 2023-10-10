The Ultimate React Course 2023: React, Redux & More
Section 22: React Router With Data Loading (v6.4+)

281. Section Overview

282. Setting Up a New Project: "Fast React Pizza Co."
-u terminalu instaliramo vite project sa komandom npm i create vite@latest
-instaliramo eslint pakete

283. Application Planning

284. Setting Up a Professional File Structure
-kreiramo folder features
-u folderu features kreiramo foldere cart, menu, order, user
-kreiramo folder ui
-kreiramo folder services
-kreiramo folder utils
-kreiramo jsx komponente

285. A New Way of Implementing Routes
-u terminalu instaliramo paket React Router Dom
-otvorimo web stranicu https://reactrouter.com/en/main
-u App.jsx komponentu importujemo funkciju createBrowserRouter
-kreiramo funkciju createBrowserRouter([ ... ])
-u funkciju createBrowserRouter dodajemo objekte u kojima su rute i elemente
-u komponentu App.jsx importujemo komponentu Home.jsx 
-rezultat funkcije createBrowserRouter pohranjujemo u varijablu const router
-importujemo komponentu RouterProvider
-u return izjavu dodajemo komponentu RouterProvider
-komponenti RouterProvider dodajemo prop router
-u prop router proslijedujemo vrijednost varijable router

286. Building the App Layout
-u ui folderu kreiramo komponente AppLayout.jsx i Header.jsx
-u komponentu Header.jsx i CartOverview importujemo komponentu Link
-u komponentu AppLayout.jsx importujemo komponentu Header.jsx
-importujemo komponentu CartOverview.jsx
-u return izjavu importujemo komponentu Outlet

287. Fetching Data With React Router "Loaders": Pizza Menu
-u komponentu Menu.jsx importujemo funkciju getMenu()
-kreiramo funkciju loader()
-u funkciji loader() kreiramo varijablu const menu
-u komponentu App.jsx importujemo funkciju loader() kao menuLoader()
-u path menu dodajemo prop loader: menuLoader
-u komponentu Menu.jsx importujemo funkciju useLoaderData();
-kreiramo varijablu const menu
-u return izjavu dodajemo metodu menu.map()

288. Displaying a Loading Indicator
-u komponentu AppLayout.jsx importujemo React Hook useNavigate
-kreiramo varijablu const navigation
-kreiramo varijablu const isLoading
-u folderu ui kreiramo komponentu Loader.jsx
-u return izjavi dodajemo uslov {isLoading && (<Loader />)}

289. Handling Errors With Error Elements
-kreiramo komponentu Error.jsx 
-importujemo React Hook useNavigate i useRouteError
-kreiramo varijable const navigate i const error
-u App.jsx komponentu importujemo komponentu Error.jsx
-u funkciju createBrowserRouter() dodajemo prop errorElement

290. Fetching Orders
-u folderu orders kreiramo komponentu SearchOrder.jsx
-u komponenti SearchOrder kreiramo stanje const [query, setQuery] = useState('')
-u return izjavi dodajemo form i input elemente
-kreiramo funkciju handleSubmit()
-formi dodajemo dogadaj onSubmit
-u dogadaj onSubmit proslijedujemo funkciju handleSubmit
-kreiramo varijablu const navigate
-u komponentu Header.jsx importujemo komponentu SearchOrder.jsx
-u komponenti Order.jsx kreiramo i eksportujemo funkciju loader()
-u funkciji loader() kreiramo varijablu const order
-u App.jsx komponentu importujemo funkciju loader() kao orderLoader()
-u path /order/:orderId dodajemo prop loader: orderLoader
-u komponentu Order.jsx importujemo React Hook useLoaderData
-kreiramo varijablu const order

291. Writing Data With React Router "Actions"
-u komponenti CreateOrder.jsx, importujemo komponentu Form
-komponenti Form dodajemo prop method
-kreiramo funkciju action()
-u funkciji action() kreiramo varijablu const formData
-kreiramo objet const order
-kreiramo varijablu const newOrder
-u komponentu App.jsx importujemo funkciju action() kao createOrderAction()
-u path /order/new dodajemo prop action

292. Error Handling in Form Actions
-u komponenti CreateOrder.jsx kreiramo varijablu const navigation
-kreiramo varijablu const isSubmitting
-u button element dodajemo uslov {isSubmitting ? ... : ...}
-kreiramo funkciju isValidPhone() sa parametrom str
-u funkciju action() kreiramo objekt const errors
-u funkciju action() dodajemo uslove if 
-importujemo React Hook useActionData
-kreiramo varijablu const formErrors
-dodajemo uslov formErrors?.phone
