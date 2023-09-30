The Ultimate React Course 2023: React, Redux & More
Section 18: Advanced State Management: The Context API


221. Section Overview

222. What is Context API ?
-sistem za proslijedivanje podataka kroz aplikacju bez manuelnog proslijedivanje props kroz drvo
-globalno statnje za citavu aplikaciju
-Provider - komponenta koja daje djeci komponentama pristup vrijednostima
-value - vrijednost je podatak koji zelimo da ucinimo dostupnim
-Consumers - sve komponente koje citaju obezbjedenu kontekst vrijednost

223. Creating and Providing a Context
-u komponentu App.jsx importujemo funkciju createContext()
-kreiramo komponentu const PostContext
-u return izjavi, dodajemo komponentu PostContext.Provider
-komponenti PostContext.Provider dodajemo prop value

224. Consuming the Context
-u komponentu Header.jsx importujemo React Hook useContext()
-brisanje komponentama props
-https://stackoverflow.com/questions/65823965/react-context-is-not-defined-no-undef
-u komponenti Header.jsx kreiramo varijablu onClearPosts
-u komponentu SearchPosts.jsx importujemo React Hook useContext()
-u komponenti SearchPosts.jsx kreiramo varijable searchQuery i setSearchQuery
-u komponentu Results.jsx importujemo React Hook useContext()
-u komponenti Results.jsx kreiramo varijablu posts
-u komponentu List.jsx importujemo React Hook useContext()
-u komponenti List.jsx kreiramo varijablu posts
-u komponentu Archive.jsx importujemo React Hook useContext()
-u komponenti Archive.jsx kreiramo varijablu onAddPost
-u komponentu FormAddPost.jsx importujemo React Hook useContext()
-u komponenti FormAddPost.jsx kreiramo varijablu onAddPost

225. Advanced Pattern: A Custom Provider and Hook
-kreiramo komponentu PostContext.jsx
-u komponenti PostContext.jsx, funkciji PostProvider dodajemo parametar children
-u return izjavu dodajemo komponentu PostContext.Provider
-u komponentu PostContext.Provider, u return izjavu dodajemo children
-kreiramo funkciju usePosts()
-u komponente dodajemo funkciju usePosts()
-u komponentu PostContext.jsx dodajemo uslov if (context === undefined)

226. Thinking in React: Advanced State Management

227. Back to "WorldWise": Creating a CitiesContext
-u folderu src kreiramo folder context
-u folderu context kreiramo komponentu CitiesContext.jsx
-u komponentu CitiesContext importujemo funkciju createContext
-kreiramo varijablu CitiesContext
-kreiramo funkciju CitiesProvider sa parametrom children
-stanja i useEffect iz komponente App.jsx prebacujemo u komponentu CitiesContext
-u App.jsx komponenti, u return izjavi, komponentama brisemo props
-u komponenti CitiesContext, u return izjavu dodajemo komponentu CitiesContext.Provider
-u komponentu CitiesContext.Provider dodajemo children
-komponenti CitiesContext.Provider dodajemo prop value
-eksportujemo komponentu CitiesProvider
-u komponentu App.jsx importujemo komponentu CitiesProvider.jsx

228. Consuming the CitiesContext
-u komponenti CitiesContext kreiramo funkciju useCities()
-u funkciji useCities() kreiramo varijablu const context
-u funkciji useCities() dodajemo uslov if (context === undefined)
-eksportujemo funkciju useCities()
-u komponentu CityList.jsx importujemo funkciju useCities()
-u funkciji CityList brisemo parametre 
-kreiramo varijable const { cities, isLoading } = useCities()
-isto ponovimo u komponenti CountryList.jsx

229. Finishing the City View
-u komponenti CitiesContext.jsx kreiramo const [currentCity, setCurrentCity] = useState({})
-u komponentu CitiesContext.Provider, u value prop dodajemo currentCity
-kreiramo funkciju getCity() sa parametrom id
-u value prop dodajemo funkciju getCity
-u komponenti City.jsx kreiramo const { getCity, currentCity, isLoading } = useCities();
-kreiramo funkciju useEffect()
-u funkciju useEffect() dodajemo funkciju getCity()
-u komponenti CityItem.jsx kreiramo varijablu const { currenctCity }
-komponenti Link dodajemo dinamicku klasu
-kreiramo komponentu BackButton.jsx
-u komponenti BackButton.jsx kreiramo varijablu navigate
-u komponentu Form.jsx importujemo komponentu BackButton.jsx
-u komponentu City.jsx importujemo komponentu BackButton.jsx

230. Including a Map With the Leaflet Library
-u terminalu instaliramo biblioetku mapu Leaflet
-u terminal ukucamo komandu npm i react-leaflet leaflet
-u index.css fajl importujemo Leaflet linkove
-u komponentu Map.jsx importujemo komponente Leaflet
-kreiramo const [mapPosition, setMapPosition] = useState([40, 0])
-u return izjavi kreiramo komponente za Leaflet mapu
-u prop center dodajemo varijablu mapPosition

231. Displaying City Markers on Map
-u komponentu Map.jsx importujemo funkciju useCities
-kreiramo varijablu const { cities }
-u return izjavu dodajemo metodu cities.map()

232. Interacting With the Map
-u komponenti Map.jsx varijablu lat i lng preimenujemo u mapLat i mapLng
-u komponenti Map.jsx kreiramo komponentu ChangeCenter sa parametrom position
-u komponenti ChangeCenter kreiramo varijablu const map
-varijabli map dodajemo metodu setView()
-u komponentu MapContainer dodajemo komponentu ChangeCenter
-kreiramo useEffect()
-u useEffect() dodajemo uslov if
-u komponenti Map.jsx kreiramo komponentu DetectClick
-u komponenti DetectClick dodajmo React Hook useMapEvents()
-u funkciju useMapEvent() dodajemo dogadaj click
-kreiramo varijablu const navigate
-u komponentu MapContainer dodajemo komponentu DetectClick

233. Setting Map Position With Geolocation
-u folderu src kreiramo folder hooks
-u folderu hooks kreiramo useGeolocation.js fajl
-u useGeolocation.js fajlu kreiramo i eksportujemo funkciju useGeolocation()
-funkciji useGeolocation dodajemo parametar null
-u komponentu Map.jsx importujemo funkciju useGeolocation()
-kreiramo varijable isLoading, position, getPosition
-u return izjavi, u div element dodajemo komponentu Button
-u komponentu Button dodajemo uslov {isLoadingPosition ? ... : ...}
-kreiramo funkciju useEffect() za geolocationPosition
-dodajemo uslov if(geolocationPosition)
-u uslov if dodajemo funkciju setMapPosition()
-u return izjavi dodajemo uslov {!geolocationPosition && (<Button>...</Button>)}

234. Fetching City Data in the Form
-u folderu hooks kreiramo useUrlPosition.js fajl
-u useUrlPosition.js fajlu kreiramo i eksportujemo funkciju useUrlPosition
-kreiramo varijablu searchParams
-kreiramo varijable lat i lng
-u komponentu Map.jsx importujemo funkciju useUrlPosition
-kreiramo const [mapLat, mapLng] = useUrlPosition()
-u komponentu Form.jsx importujemo funkciju useUrlPosition
-kreiramo const [lat, lng] = useUrlPosition()
-kreiramo const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false)
-kreiramo funkciju useEffect()
-u funkciji useEffect() kreiramo funkciju fetchCityData()
-u funkciju fetchCityData doodajemo try - catch - finally blokove koda
-kreiramo varijablu const BASE_URL
-kreiramo const [emoji, setEmoji] = useState('')
-kreiramo funkciju convertToEmoji() sa parametrom countryCode
-u try blok koda dodajemo setIsLoadingGeocoding(true)
-kreiramo varijablu const response
-kreiramo varijablu const data
-dodajemo funkciju setCityName()
-dodajemo funkciju setCountry()
-dodajemo funkciju setEmoji()
-u catch blok koda dodajemo error 
-u finally blok koda dodajemo setIsLoadingGeocoding(false)
-kreiramo funkciju flagEmojiToPng()
-u span element dodajemo uslov {emoji && flagEmojiToPng(emoji)}
-u try blok koda dodajemo uslov if (!data.countryCode)
-kreiramo const [geocodingError, setGeocodingError] = useState('')
-u try blok koda dodajemo setGeocodingError('')
-dodajemo uslov if (isLoadingGeocoding) 
-dodajemo uslov if (geocodingError)

235. Creating a New City
-u komponenti Form.jsx, u useEffect() dodajemo uslov if (!lat && !lng)
-dodajemo uslov if (!lat && !lng)
-kreiramo funkciju handleSubmit sa parametrom event
-form elementu dodajemo dogadaj onSubmit
-u dogadaj onSubmit proslijedujemo funkciju handleSubmit
-u terminal instaliramo paket datepicker
-u terminal ukucamo komandu npm i react-datepicker
-importujemo komponentu DatePicker
-u return izjavi dodajemo komponentu DatePicker
-importujemo DatePicker css 
-komponenti DatePicker dodajemo props id, onChange, selected, dateFormat
-u funkciju handleSubmit() dodajemo uslov if (!cityName || !date) return
-kreiramo objekt const newCity
-u folderu context, u komponenti CitiesContext.jsx kreiramo funkciju createCity() sa parametrom newCity
-u funkciji createCity() kreiramo try - catch - finally blokove koda
-u bloku koda try dodajemo setIsLoading(true)
-u bloku koda try kreiramo varijablu const response
-u bloku koda try kreiramo varijablu const data
-u blok koda catch dodajemo alert()
-u bloku koda finally dodajemo setIsLoading(false)
-u return izjavi dodajemo komponenti CitiresContext.Provider u prop value getCity
-u komponenti Form.jsx kreiramo const { createCity, isLoading } = useCities()
-u funkciju handleSubmit() dodajemo funkciju createCity(newCity)
-u komponenti CitiesContext.jsx, u funkciji createCity() dodajemo  funkciju setCities()
-u komponenti Form.jsx, u return izjavi, form elementu dodajemo dinamicku klasu {isLoading ? ... : ...}
-u komponenti Form.jsx importujemo React Hook useNavigate
-kreiramo varijablu const navigate
-u funkciju handleSubmit() dodajemo navigate('/app')

236. Deleting a City
-u komponenti CityItem.jsx, button elementu X dodajemo dogadaj onClick
-kreiramo funkciju handleClick() sa parametrom event
-u dogadaj onClick proslijedujemo funkciju handleClick
-u komponenti CitiesContext.jsx kreiramo funkciju deleteCity() sa parametrom id
-u funkciji deleteCity(), u bloku koda try dodajemo setIsLoading(true)
-u bloku koda try dodajemo funkciju await fetch()
-u bloku koda try dodajemo funkciju setCities()
-u bloku koda catch dodajemo alert
-u bloku koda finally dodajemo setIsLoading(false)
-u return izjavi, u komponentu CitiesContext.Provider dodajemo u prop value dodajemo deleteCity
-u komponenti CityItem.jsx dodajemo const { currentCity, deleteCity } = useCities()
-u funkciju handleClick() dodajemo funkciju deleteCity(id)

237. Advanced State Management System: Context + useReducer
-u komponenti CitiesContext.jsx kreiramo objekt const initialState
-kreiramo funkciju reducer() sa dva parametra state i action
-u funkciji CitiesProvider kreiramo const [state, dispatch] = useReducer(reducer, initialState)
-kreiramo varijable const { cities, isLoading, currentCity } = state
-u funkciju reducer() dodajemo uslov switch
-u uslovu switch kreiramo vise case
-u funkciju fetchCities dodajemo funkciju dispatch()
-u blokove kodova try - catch dodajemo funkcije dispatch()
-u funkciju getCity() dodajemo funkciju dispatch()
-u funkciju createCity() dodajemo funkciju dispatch()
-u funkciju deleteCity() dodajemo funkciju dispatch()
-u funkciji getCity() dodajemo uslov if (Number(id) === currentCity.id)

238. Adding Fake Authentication: Setting Up Context
-u folderu contexts kreiramo komponentu FakeAuthContext.jsx
-u komponentu FakeAuthContext.jsx importujemo React Hook createContext
-kreiramo varijablu const AuthContext
-kreiramo funkciju AuthProvider() sa parametrom children
-u return izjavu dodajemo komponentu AuthContext.Provider
-u komponentu AuthContext.Provider dodajemo children
-kreiramo funkciju useAuth()
-u funkciji useAuth() kreiramo varijablu const context
-dodajemo uslov if (context === undefined)
-u funkciji AuthProvider() kreiramo funkciju login() sa parametrim email i password
-kreiramo funkciju logout()
-kreiramo objekt const initialState
-kreiramo funkciju reducer() sa parametrim state i action
-u funkciji reducer() kreiramo uslov switch(action.type)
-u funkciji AuthProvider() kreiramo const [state, dispatch] = useReducer(reducer, initialState)
-kreiramo const { user, isAuthenticated } = state
-u uslovu switch() kreiramo case 'login' i 'logout'
-u return izjavi, komponenti AuthContext.Provider dodajemo prop value
-u komponenti FakeAuthContext.jsx kreiramo objekt const FAKE_USER
-u funkciju login dodajemo uslov if (email === FAKE_USER.email && password === FAKE_USER.password) 
-u if uslov dodajemo funkciju dispatch()
-u funkciju logout() dodajemo funkciju dispatch()
-eksportujemo funkcije AuthProvider i useAuth 

239. Adding Fake Authentication: Implementing "Login"
-u komponentu App.jsx importujemo komponentu AuthProvider
-u komponentu Login.jsx importujemo komponentu Button
-u return izjavi dodajemo komponentu Button sa prop type='primary'
-kreiramo const { login, isAuthenticated } = useAuth()
-kreiramo funkciju handleSubmit() sa parametrom e
-u funkciju handleSubmit() dodajemo uslov if (email && password)
-u uslov if dodajemo funkciju login(email, password)
-importujemo funkciju React Hook useNavigate
-kreiramo varijablu const navigate
-kreiramo funkciju useEffect()
-u funkciju useEffect() dodajemo uslov if(isAuthenticated)
-u uslov if dodajemo funkciju navigate()
-u komponenti User.jsx kreiramo const { user, logout } = useAuth()
-importujemo React Hook useNavigate
-kreiramo varijablu const navigate
-kreiramo funkciju handleClick()
-u funkciju handleClick() dodajemo funkciju logout()
-u funkciju handleClick() dodajemo funkciju navigate('/')
-u komponentu AppLayout.jsx importujemo komponentu User.jsx

240. Adding Fake Authentication: Protecting a Route
-u folderu pages kreiramo komponentu ProtectedRoute.jsx 
-u komponenti ProtectedRoute.jsx, funkciji ProtectedRoute dodajemo parametra children
-kreiramo const { isAuthenticated } = useAuth()
-importujemo React Hook useNavigate
-kreiramo varijablu const navigate
-kreiramo funkciju useEffect()
-u funkciji useEffect() dodajemo uslov if (!isAuthenticated)
-u return izjavi dodajemo uslov ternarni operator isAuthenticated ? children : null
-u komponentu App.jsx importujemo komponentu ProtectedRoute.jsx
-u Route sa path app dodajemo komponentu ProtectedRoute
