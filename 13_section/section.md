The Ultimate React Course 2023: React, Redux & More
Section 13: Custom Hooks, Refs, and More State


159. Section Intro

160. React Hooks and Their Rules

161. The Rules of Hooks in Practice
-kopiramo kod iz 12_section
-u komponentu MovieDetails.jsx dodamo /* eslint-disable */
-dodajemo uslov if (imdbRating > 8)
-https://stackoverflow.com/questions/53472795/uncaught-error-rendered-fewer-hooks-than-expected-this-may-be-caused-by-an-acc

162. More Details of useState
-kreiramo const [isTop, setIsTop] = useState(imdbRating > 8)
-kreiramo funkciju useEffect()
-kreiramo varijablu const isTop
-kreiramo const [averageRating, setAverageRating] = useState(0)
-u return izjavu dodajemo varijablu averageRating
-u funkciju handleAdd() dodajemo setAverageRating(Number(imdbRating))
-u funkciju handleAdd() dodajemo  setAverageRating(...)

163. Initializing State With a Callback (Lazy Initial State)
-u App.js fajlu, u funkciji handleCloseMovie(), dodajemo localStorage.setItem
-kreiramo funkciju useEffect() u koju dodajemo localStorage
-u const [watched, setWatched] = useState(() => {...}) kreiramo callback funkciju
-u callback funkciji kreiramo varijablu const storedValue

164. useState Summary
-kreiramo stanje - jednostavno ili bazirano na funkciji
-azuriramo stanje - jednostavno ili bazirano na trenutnom stanju

165. How NOT to Select DOM Elemets in React
-u komponenti Search.jsx, kreiramo funkciju useEffect()
-u funkciji useEffect(), u callback funkciji kreiramo varijablu const element

166. Introducing Another Hook: useRef
-kreiranje varijable koja ostaje ista izmedu renderovanja
-selektovanje i pohranjivanje DOM elemenata

167. Refs to Select DOM Elements
-u komponentu Search.jsx importujemo React Hook useRef
-kreiramo funkciju useRef()
-rezultat funkcije useRef() pohranimo u varijablu const inputElement
-u return izjavi input elementu dodajemo atribut ref
-u atribut ref proslijedujemo vrijednost varijable inputElement
-kreiramo funkciju useEffect()
-u callback funkciji, varijabli inputElement dodajemo metodu current i focus()
-u useEffect() funkciji callback kreiramo funkciju callback
-dodajemo uslov if(e.code === 'Enter') 
-dodajemo uslov if(document.activeElement === inputElement.current)

168. Refs to Persist Data Between Renders
-u komponenti MovieDetails.jsx kreiramo varijablu const countRef
-kreiramo funkciju useEffect()
-dodajemo uslov if (userRating)
-u funkciji useEffect(), u callback funkciji, dodajemo countRef.current
-u funkciji handleAdd(), u objekt newWatchedMovie dodajemo countRatingDecisions
-kreiramo varijablu let count

169. What are Custom Hooks? When to Create One?

170. Creating our First Custom Hook: useMovies
-u src folderu, kreiramo useMovies.js fajl
-u useMovies.js fajlu kreiramo i eksportujemo funkciju useMovies()
-funkciji useMovies() dodajemo parametar query
-u App.js fajl importujemo funkciju useMovies()
-u App.js fajlu kreiramo funkciju useMovies()
-rezultat funkcije useMovies() pohranjujemo u varijable movies, isLoading i error
-u useMovies.js fajlu, funkciji useMovies dodajemo parametar callback
-u funkciji useEffect(), u callback funkciju dodajemo callback?.()
-u App.js fajlu, funkciji useMovies dodajemo argument funkciju handleCloseMovie

171. Creating useLocalStorageState
-u src folderu kreiramo useLocalStorageState.js fajl
-u fajlu useLocalStorageState.js kreiramo i eksportujemo funkciju useLocalStorageState()
-funkciji useLocalStorageState dodajemo parametre initialState i key
-u useLocalStorageState fajlu kreiramo funkciju useEffect()
-dodajemo ternarni uslov return storedValue ? ... : ...

172. Creating useKey
-u src folderu kreiramo useKey.js fajl
-u fajlu useKey.js kreiramo i eksportujemo funkciju useKey()
-funkciji useKey.js dodajemo parametre action i key
-u callback funkciji dodajemo uslov if (e.code.toLowerCase() === key.toLowerCase())
-u komponenti MovieDetails.jsx kreiramo funkciju useKey()
