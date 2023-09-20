The Ultimate React Course 2023: React, Redux & More
Section 14: [Optional] React Before Hooks: Class-Based React


174. Section Overview

175. Our First Class Component
-https://stackoverflow.com/questions/42813342/react-createelement-type-is-invalid-expected-a-string
-u App.js fajlu kreiramo klasu Counter
-https://stackoverflow.com/questions/36861122/react-es6-you-may-have-forgotten-to-define-render
-u klasu Counter dodajemo metodu render()
-kreiramo funkciju constructor()
-u funkciji constructor kreiramo funkciju super()
-https://stackoverflow.com/questions/63609257/what-is-a-useless-constructor-in-react
-u funkciji constructor kreiramo stanje sa this.state
-u span element dodajemo {this.state.count}

176. Working With Event Handlers
-kreiramo funkciju handleDecrement()
-button elementu dodajemo dogadaj onClick 
-u dogadaj onClick proslijedujemo vrijednost this.handleDecrement
-u funkciji constructor dodajemo this.handleDecrement
-u funkciju handleDecrement() dodajemo this.setState()
-u this.setState() dodajemo callback funkciju 
-kreiramo funkciju handleIncrement()
-drugom button elementu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo vrijednsot this.handleIncrement
-https://stackoverflow.com/questions/32317154/react-uncaught-typeerror-cannot-read-property-setstate-of-undefined
-kreiramo varijablu const date 
-varijabli date dodajemo metodu setDate()

177. Class Components vs. Function Components
-https://stackoverflow.com/questions/45995136/export-default-was-not-found
-kreiramo klasu App
-u klasu App dodajemo funkciju render()
-u funkciju render() dodajemo return()
-kreiramo funkciju constructor() sa paramterom props
-u funkciji constructor kreiramo funkciju super()
-dodajemo this.state
-u return izjavi kreiramo HTML elemente
-input elementu dodajemo atribut value
-u atribut value dodajemo this.state.value
-input elementu dodajemo dodagaj onChange
-u dogadaj onChange proslijedujemo anonimnu funkciju sa parametrom e
-kreiramo funkciju fetchWeather()
-button elementu dodajemo dogadaj onClick
-u onClick dogadaj proslijedujemo funkciju this.fetchWeather
-u funkciju constructor dodajemo this.fetchWeather

179. Fetching Weather Data
-kreiramo funkciju getWeatherIcon()
-u funkciju getWeatherIcon() dodajemo try-catch-finally blokove koda
-u return izjavi dodajemo {this.state.isLoading && ... }

180. Displaying the Weather
-kreiramo komponentu Weather.js
-u App.js fajl importujemo komponentu Weather.js
-u App.js fajlu, u return izjavi, dodajemo uslov {this.state.weather.weathercode && <Weather/>}
-u komponenti Weather.js kreiramo varijable const { ... } = this.props.weather
-u return izjavi dodajemo metodu dates.map()
-kreiramo komponentu Day.js
-u komponentu Weather.js importujemo komponentu Day.js
-u return izjavu, u metodu map(), dodajemo komponentu Day
-u komponenti Day.js kreiramo varijable const {date, max, min, code} = this.props

181. Removing Boilerplate Code With Class Fields

182. Child to Parent Communication
-kreiramo komponentu Input.js
-u App.js fajl importujemo komponentu Input.js
-u App.js fajlu kreiramo funkciju setLocation()
-komponenti Input dodajemo props

183. Lifecycle Methods
-u App.js fajlu kreiramo funkciju componentDidMount()
-kreiramo funkciju componentDidUpdate() sa dva parametra
-u funkciju fetchWeather() dodajemo uslov if (this.state.location.length < 2)
-u funkciju componentDidUpdate dodajemo localStorage.setItem('location', this.state.location)
-u funkciju componentDidMount dodajemo this.setState({ location: localStorage.getItem('location') })
-u komponentu Weather.js kreiramo funkciju componentWillUnmount() 
