The Ultimate React Course 2023: React, Redux & More
Section 12: Effects and Data Fetching


140. Section Overview

141. The Component Lifecycle
-rodenje komponente
-okidanje komponente
-kraj postojanja komponente

142. How NOT to Fetch Data in React
-otvorimo https://www.omdbapi.com/ i kreiramo API kljuc
-u App.js fajlu kreiramo varijablu const KEY
-kreiramo funkciju fetch()

143. useEffect to the Rescue
-u App.js fajlu kreiramo ReactJS Hook funkciju useEffect()
-u useEffect dodajemo anonimnu funkciju kao prvi argument
-drugi argument je prazan niz

144. A First Look at Effects
-efekat sa strane je interakcija React komponente sa svijetom izvan komponente
-event handlers vs effects

145. Using an async Function
-https://stackoverflow.com/questions/68665268/warning-an-effect-function-must-not-return-anything-besides-a-function-which-i
-u useEffect() kreiramo asinhronu funkciju fetchMovies()

146. Adding a Loading State
-u App.js fajlu kreiramo const [isLoading, setIsLoading] = useState(false)
-u funkciju fetchMovies() dodajemo funkciju setIsLoading(true)
-na kraju funkcije dodajemo setIsLoading(false)
-kreiramo komponentu Loader.jsx
-u App.js fajl importujemo komponentu Loader.jsx
-u return izjavi, komponenti Box dodajemo ternarni uslov {isLoading ? ... : ...}

147. Handling Errors
-https://stackoverflow.com/questions/49343024/getting-typeerror-failed-to-fetch-when-the-request-hasnt-actually-failed
-u App.js fajlu, u funkciju fetchMovies() dodajemo uslov if (!res.ok)
-kreiramo try - catch blokove koda
-kreiramo const [error, setError] = useState('')
-u blok koda catch dodajemo funkciju setError()
-kreiramo komponentu ErrorMessage.jsx
-u komponenti ErrorMessage.jsx, funkciji ErrorMessage dodajemo parametar prop message
-u App.js fajl importujemo komponentu ErrorMessage.jsx
-u Box komponenti dodajemo uslove {... && ...}
-dodajemo finally blok koda
-u try blok koda dodajemo uslov if (data.Response === 'False')

148. The useEffect Dependency Array
-sinhronizacija i zivotni ciklus

149. Synchronizing Queries With Movie Data
-u App.js fajlu preimenujemo varijablu query u temoQuery
-u komponenti Search.jsx, funkciji Search dodajemo parametre destruktuirane props query i setQuery
-u App.js fajlu kreiramo const [query, setQuery] = useState("");
-u return izjavi, komponenti Search dodajemo props query i setQuery
-u try blok koda dodajemo setError('')
-u funkciju fetchMovies() dodajemo uslov if(query.length < 3)
-u if uslov dodajemo funkcije setMovies(), setError()

150. Selecting a Movie
-u App.js fajlu kreiramo const [selectedId, setSelectedId] = useState(null)
-kreiramo komponentu MovieDetails.jsx
-u komponente MovieDetails.jsx, funkciji MovieDetails dodajemo parametar destruktuirani prop selectedId
-u App.js importujemo komponentu MovieDetails.jsx
-u return izjavi, u komponenti Box, kreiramo uslov {selectedId ? ... : ...}
-komponenti MovieDetails dodajemo prop selectedId
-kreiramo funkciju handleSelectMovie(id)
-u komponenti Movie.jsx, li elementu dodajemo dogadaj onClick
-u return izjavi, komponenti MovieList dodajemo prop onSelectMovie
-u komponenti MovieList.jsx, funkciji MovieList dodajemo parametar destruktuirani prop onSelectMovie
-u return izjavi, komponenti Movie dodajemo prop onSelectMovie
-u komponenti Movie.jsx, funkciji Movie dodajemo parametar destruktuirani prop onSelectMovie
-u dogadaj onClick proslijedujemo anonimnu funkciju
-u anonimnu funkciju proslijedujemo funkciju onSelectMovie()
-u App.js fajlu kreiramo funkciju handleCloseMovie()
-u funkciju handleCloseMovie() dodajemo setSelectedId(null)
-u return izjavi, komponenti MovieDetails dodajemo prop onCloseMovie
-u komponenti MovieDetails.jsx, funkciji MovieDetails dodajemo parametar destruktuirani prop onCloseMovie
-u App.js fajlu, u funkciji handleSelectMovie(), u funkciji setSelectedId() dodajemo callback funkciju

151. Loading Movie Details
-u komponenti MovieDetails.jsx, kreiramo React Hook useEffect()
-u useEffect() kreiramo asinhronu funkciju getMovieDetails()
-kreiramo const [movie, setMovie] = useState({})
-destruktuiramo objekt movie
-u komponenti MovieDetails.jsx importujemo komponentu StarRating.jsx
-kreiramo const [isLoading, setIsLoading] = useState(false)
-u funkciju getMovieDetails() dodajemo setIsLoading(true)
-na kraju funkcije dodajemo setIsLoading(false)
-importujemo komponentu Loader.jsx
-u return izjavi dodajemo uslov {isLoading ? ... : ... }

152. Adding a Watched Movie
-u App.js fajlu kreiramo funkciju handleAddWatched(movie) 
-u funkciju handleAddWatched() dodajemo funkciju setWatched()
-u return izjavi, komponenti MovieDetails dodajemo prop onAddWatched
-u komponeti MovieDetails, funkciji MovieDetails dodajemo parametar destruktuirani prop onAddWatched
-kreiramo funkciju handleAdd()
-u funkciju handleAdd() kreiramo objekt const newWatchedMovie
-u funkciju handleAdd() dodajemo funkciju onAddWatched(newWatchedMovie)
-button elementu add to list dodajemo dogadaj onClick
-u onClick dogadaj proslijedujemo vrijednost funkcije handleAdd
-u funkciju handleAdd() dodajemo funkciju onCloseMovie()
-u kompomenti MovieDetail.jsx kreiramo const [userRating, setUserRating] = useState('')
-u return izjavi, komponenti StarRating dodajemo prop onSetRating
-u return izjavi, dodajemo uslov {userRating > 0 && ...}
-u App.js fajlu, u return izjavi, komponenti MovieDetails dodajemo prop watched
-u komponenti MovieDetails.jsx kreiramo varijablu const isWatched
-funkciji MovieDetails dodajemo parametar destruktuirani prop watched
-u return izjavi dodajemo uslov {!isWatched ? ... : ...}
-kreiramo varijablu const watchedUserRating
-u App.js fajlu kreiramo funkciju handleDeleteWatched()
-u return izjavi, komponenti WatchedMoviesList dodajemo prop onDeleteWatched
-u komponenti WatchedMoviesList, funkciji WatchedMoviesList dodajemo parametar destruktuirani prop onDeleteWatched
-u return izjavi, komponenti WatchedMovies dodajemo prop onDeleteWatched
-u komponenti WatchedMovies.jsx, funkciji WatchedMovies dodajemo parametar destruktuirani prop onDeleteWatched 

153. Adding a New Effect: Changing Page Title
-u komponenti MovieDetail.jsx kreiramo React Hook useEffect() koji mijenja naziv stranice kada kliknemo na film
-svaki useEffect treba da ima jednu svrhu

154. The useEffect Cleanup Function

155. Cleaning Up the Title
-u funkciji useEffect() kreiramo anonimnu funkciju za resetovanje naslova stranice

156. Cleaning Up Data Fetching
-u App.js fajlu kreiramo varijablu const controller
-u funkciji fetch, dodajemo drugi argument objekt signal
-kreiramo anonimnu funkciju u koju dodajemo controller.abort()
-u blok koda catch dodajemo uslov if (error.name !== 'AbortError')

157. One More Effect: Listening to a Keypress
-u komponenti MovieDetails.jsx kreiramo funkciju useEffect();
-u funkciji useEffect(), kreiramo funkciju callback()
-u callback funkciji, dodajemo uslov if(event.code === 'Escape')
-kreiramo anonimnu funkciju u kojoj dodajemo dogadaj removeEventListener()
