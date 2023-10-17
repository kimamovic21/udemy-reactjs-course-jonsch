The Ultimate React Course 2023: React, Redux & More
Section 24: Adding Redux and Advanced React Router

312. Section Overview

313. Modeling the "User" State With Redux Toolkit
-u terminalu instaliramo react-redux i redux-toolkit pakete
-u terminalu ukucamo komande npm i redux @reduxjs/toolkit
-u fajlu userSlice.js kreiramo objekt const initialState
-importujemo funkciju createSlice()
-kreiramo varijablu const userSlice
-eksportujemo varijablu const updateName
-eksportujemo kao default userSlice.reducer
-kreiramo store.js fajl
-u store.js fajlu importujemo funkciju configureStore()
-kreiramo objekt const store
-u store.js fajl importujemo funkciju userReducer
-eksportujemo objekt store kao default
-u main.jsx komponentu importujemo komponentu Provider i store fajl
-u return izjavu dodajemo komponentu Provider
-komponentu Provider dodajemo prop store
-u prop store proslijedujemo vrijednost objekta store
-u komponentu Username.jsx importujemo React Hook useSelector
-vrijednost funkcije useSelector() pohranimo u varijablu const username
-u return izjavu dodajemo varijablu username
-dodajemo uslov if(!usernamme)

314. Reading and Updating the User State
-u komponentu CreateUser.jsx importujemo React Hook useDispatch
-kreiramo varijablu const dispatch
-u funkciju handleSubmit() dodajemo varijablu dispatch
-importujemo funkciju updateName()
-u funkciju dispatch() proslijedujemo funkckiju updateName()
-importujemo React Hook useNavigate()
-kreiramo varijablu const navigate
-u funkciju handleSubmit() dodajemo varijablu navigate
-u komponentu Home.jsx importujemo React Hook useSelector
-kreiramo varijablu const username
-u return izjavu dodajemo ternarni uslov {username === ... ? ...}
-u komponentu Cart.jsx importujemo react Hook useSelector
-kreiramo varijablu username
-u return izjavu dodajemo varijablu username
-u komponentu CreateOrder.jsx importujemo react Hook useSelector
-kreiramo varijablu username
-input elementu za ime dodajemo atribut defaultValue

315. Modeling the "Cart" State
-u cart folderu kreiramo cartSlice.js fajl
-u cartSlice.js fajl importujemo funkciju cartSlice
-kreiramo objekt const initialState
-kreiramo funkciju createSlice()
-vrijednost funkcije createSlice() pohranimo u varijablu const cartSlice
-u reducers prop kreiramo funkcije addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart
-eksportujemo funkcije
-eksportujemo kao default cartSlice.reducer
-u store.js fajl importujemo funkciju cartReducer
-u reducer objekt dodajemo cart: cartReducer

316. Adding Menu Items to the Cart
-u komponentu MenuItem.jsx dodajemo uslov {!soldOut && ... }
-kreiramo funkciju handleAddToCart
-u return izjavi, komponenti Button dodajemo prop onClick
-u onClick prop proslijedujemo vrijednost funkcije handleAddToCart
-u komponenti Button.jsx, funkciji Button dodajemo prop onClick
-dodajemo uslov if (onClick) 
-u komponenti MenuItem.jsx, u funkciji handleAddToCart() kreiramo objekt newItem
-importujemo React Hook useDispatch
-kreiramo varijablu const dispatch
-importujemo funkcije addItem()
-u funkciju handleAddToCart() dodajemo varijablu dispatch

317. Building the Cart Overview With Redux Selectors
-u komponentu CartOverview.jsx importujemo React Hook useSelector
-kreiramo varijablu const totalCartQuantity
-u cartSlice.js fajlu kreiramo i eksportujemo funkciju getTotalCartQuantity
-u komponentu CartOverview.jsx importujemo funkciju getTotalCartQuantity
-u funkciju useSelector() dodajemo funkciju getTotalCartPrice
-u cartSlice.js fajlu kreiramo i eskportujemo funkciju getTotalCartPrice
-u komponentu CartOverview.jsx importujemo funkciju getTotalCartPrice
-kreiramo varijalu const totalCartPrice
-importujemo funkciju formatCurrency
-u return izjavu dodajemo varijable totalCartQuantity i totalCartPrice
-dodajemo uslov if (!totalCartQuantity)

318. Building the Cart Page
-u cartSlice.js fajlu kreiramo funkciju getCart()
-u komponentu Cart.jsx importujemo React Hook useSelector
-importujemo funkciju getCart
-kreiramo funkciju useSelector(getCart)
-vrijednost funkcije useSelector(getCart) pohranjujemo u varijablu const cart
-importujemo React Hook useDispatch
-kreiramo varijablu dispatch
-importujemo funckiju clearCart()
-komponenti Button Clear cart dodajemo prop onClick
-u prop onClick dodajemo funkciju dispatch
-importujemo komponentu EmptyCart.jsx
-dodajemo uslov if (!cart.length)
-u komponenti EmptyCart.jsx, HTML elementima dodajemo Tailwin CSS klase

319. Deleting Cart Items
-u folderu cart kreiramo komponentu DeleteItem.jsx
-u komponentu DeleteItem.jsx importujemo komponentu Button
-u komponentu CartItem.jsx importujemo komponentu DeleteItem.jsx
-u komponentu DeleteItem.jsx importujemo React Hook useDispatch
-importujemo funckiju deleteItem()
-funkciji DeleteItem dodajemo parametar prop pizzaId
-kreiramo varijablu const dispatch
-u return izjavi komponenti Button dodajemo prop onClick
-u prop onClick dodajemo funkciju dispatch
-u komponenti CartItem.jsx, u return izjavi komponenti DeleteItem dodajemo prop pizzaId
-u komponentu MenuItem.jsx importujemo komponentu DeleteItem.jsx
-importujemo React Hook useSelector
-u komponenti MenuItem.jsx kreiramo varijablu const currentQuantity
-u cartSlice.js fajlu kreiramo i eksportujemo funkciju getCurrentQuantityById() sa parametrom id
-u komponentu MenuItem.jsx importujemo funkciju getCurrentQuantityById()
-kreiramo varijablu const isInCart
-u return izjavi dodajemo uslov {isInCart && ...}
-dodajemo uslov {!soldOut && !isInCart && ...}

320. Updating Cart Quantities
-u folderu cart kreiramo komponentu UpdateItemQuantity.jsx
-u komponentu UpdateItemQuantity.jsx importujemo komponentu Button.jsx
-u komponentu CartItem.jsx importujemo komponentu UpdateItemQuantity.jsx
-u komponentu UpdateItemQuantity.jsx importujemo React Hook useDispatch
-kreiramo varijablu const dispatch
-komponentama Button dodajemo prop onClick
-u prop onClick dodajemo funkciju dispatch()
-importujemo funkcije decreaseItemQuantity i increaseItemQuantity
-u cartSlice.js fajlu, u funkciji decreaseItemQuantity, dodajemo uslov if (item.quantity === 0)
-u komponentu CartItem.jsx importujemo React Hook useSelector
-importujemo funkciju getCurrentQuantityById
-kreiramo varijablu const currentQuantity 
-u komponentu MenuItem.jsx importujemo komponentu UpdateItemQuantity.jsx

321. Using the Cart for New Orders
-u komponentu CreateOrder.jsx importujemo React Hook useSelector
-kreiramo varijablu const cart
-dodajemo uslov if (!cart.length)
-importujemo komponentu EmptyCart
-importujemo store.js fajl
-importujemo funkciju clearCart()
-u return izjavi dodajemo store.dispatch()
-importujemo React Hook useSelector
-importujemo funkciju getTotalCartPrice
-kreiramo varijablu const totalCartPrice
-kreiramo varijablu const priorityPrice
-kreiramo varijablu const totalPrice 
-kreiramo const [withPriority, setWithPriority] = useState(false)
-input elementu dodajemo atribut value i dogadaj onChange
-u dogadaj onChange dodajemo funkciju setWithPriority()

322. Redux Thunks With createAsyncThunk
-u userSlice.js fajlu kreiramo funkcije getPosition() i fetchPosition()
-importujemo funkciju createAsyncThunk
-u varijablu userSlice, u funkciju createSlice() dodajemo prop extraReducers
-u extraReducers dodajemo funkciju sa parametrom builder
-objektu builder dodajemo metode addCase()
-u komponenti CreateOder.jsx kreiramo varijablu const dispatch

323. Integrating Geolocation
-u komponenti CreateOrder.jsx kreiramo varijablu const isLoadingAddress
-input elementu address dodajemo atribute disabled i defaultValue

324. Fetching Data Without Navigation: useFetcher
-u komponentu Order.jsx importujemo funkciju useFetcher()
-kreiramo varijablu const fetcher
-kreiramo funkciju useEffect()
-u funkciju useEffect() dodajemo uslov if (!fetcher.data && fetcher.state === 'idle')
-u funkciju useEffect() dodajemo fetcher.load('/menu')
-u return izjavi, komponenti OrderItem dodajemo prop ingredients i isLoadingIngredients

325. Updating Data Without Navigation
-u folderu order kreiramo komponentu UpdateOrder.jsx
-u komponenti UpdateOrder, funkciji UpdateOrder dodajemo parametar prop order
-u komponentu Order.jsx dodajemo {!priority && (<UpdateOrder order={order} />)}
-u komponentu UpdateORder.jsx importujemo React Hook useFetcher
-kreiramo varijablu const fetcher
-u return izjavu dodajemo fetcher.Form
-kreiramo i eksportujemo funkciju action sa parametrima request i params
-u App.jsx komponentu importujemo funkciju action() kao updateOrderAction() 
-u path: '/order/:orderId' dodajemo action
-u komponentu UpdareOrder.jsx importujemo funkciju updateOrder()
-u funkciji action kreiramo varijablu const data
-dodajemo funkciju await updateOrder()
