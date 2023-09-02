The Ultimate React Course 2023: React, Redux & More
Section 6: State, Events and Forms: Interactive Components

56. Section Overview

57. Let's Build a Steps Component
-u App.js fajlu, u return izjavi kreiramo HTML elemente
-HTML elementima dodajemo klase
-button elementima dodajemo inline style
-kreiramo objekt const messages
-kreiramo varijablu const step
-u p elementu dodajemo kod za dinamicko pojavljivanje teksa
-div elementima dodajemo kod za dinamicko stiliziranje klase

58. Handling Events the React Way
-button elementima dodajemo onClick dogadaje
-umjesto onclick pisemo onClick
-https://stackoverflow.com/questions/44128293/expected-onclick-listener-to-be-a-function-instead-got-type-string-unknown-even
-u onClick dogadaje proslijedujemo anonimne funkcije
-button elementu dodajemo onMouseEnter dogadaj
-kreiramo funkciju handlePrevious()
-u onClick dogadaj proslijedujemo vrijednost handlePrevious() funkcije
-kreiramo funkciju handleNext()
-u onClick dogadaj proslijedujemo vrijednost handleNext() funkcije

59. What is State in React ?
-state - stanje je vazan koncept u React-u
-sta je stanje i zasto ga trebamo
-kako koristiti stanje u praksi
-kada koristiti stanja 
-stanje su podaci koje komponenta koristi tokom vremenena
-varijabla stanja
-azuriranje stanja u komponente uzrokuje renderovanje komponente

60. Creating a State Variable With useState
-importujemo React Hook useState
-u funkciju useState() dodajemo inicijalnu vrijednost
-kreiramo const [step, setStep] = useState(1)
-u funkciju handleNext() dodajemo funkciju setStep
-u fukciju handlePrevious() dodajemo funkciju setStep
-u funkciji setStep azuriramo stanje varijable
-u funkcije dodajemo uslov if
-React Hooks mozemo koristiti samo u funkciji komponente
-https://stackoverflow.com/questions/55846641/react-hook-usestate-is-called-in-function-app-which-is-neither-a-react-funct
-https://stackoverflow.com/questions/57620799/react-hook-useeffect-is-called-conditionally

61. Don't Set State Manually!

62. The Mechanics of State
-izgled UI je azuriran renderovanjem komponente
-kad god se promjeni stanje komponenta se renderuje
-da bi azurirali izgled, azuriramo stanje
-React reaguje na promjene stanja renderovanje UI-a

63. Adding Another Piece of State
-kreiramo const [isOpen, setIsOpen] = useState(true)
-u return izjavi dodajemo uslov isOpen &&
-kreiramo button element X
-button elementu dodajemo onClick dogadaj
-u onClick dogadaj proslijedujemo vrijednost anonimne funkcije () => setIsOpen(!isOpen)
-u terminalu instaliramo react icons paket
-importujemo ikonice u App.js fajl
-https://stackoverflow.com/questions/73211253/module-not-found-cant-resolve-react-icons-ai
-https://stackoverflow.com/questions/34130539/uncaught-error-invariant-violation-element-type-is-invalid-expected-a-string

64. React Developer Tools
-instaliranje React Developer ekstenzije za Google Chrome

65. Updating State Based on Current State
-u funkciji setStep() dodajemo callback funkciju pomocu koje azuriramo stanje

66. More Thoughts About State + State Guidelines
-UI = f(state)
-UI je reprezentacija stanja u komponentama
-koristenje varijable kao stanje
-ako zelimo da nesta u komponenti bude dinamicno, kreiramo neko stanje koje se odnosi na tu stvar i onda azuriramo tu varijablu kada zelimo
-ako zelimo promjeniti izgled komponente, azuriramo stanje
-izgled komponente je reflekcija promjene stanja
-za podatke koji okidaju renderovanje komponente ne koristiti stanje

67. A Vanilla Javascript Implementation
-kreiranje vanilla.html fajla

68. Challenge #1: Date Counter (v1)
-kreiramo komponentu Counter.jsx
-importujemo React Hook useState
-kreiramo const [count, setCount] = useState(0)
-kreiramo span element unutar kojeg prikazujemo varijablu count
-kreiramo funkcije handleIncrement() i handleDecrement()
-button elementima dodajemo dogadaje onClick i proslijedujemo im ove funkcije
-u ove funkcije dodajemo funkciju setCount()
-u setCount() funkcije dodajemo callback funkcije
-kreiramo varijablu const date
-https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
-varijabli const date dodajemo metodu setDate
-u span element dodajemo varijablu date
-varijabli date dodajemo metodu toDateString()
-https://stackoverflow.com/questions/33117449/invariant-violation-objects-are-not-valid-as-a-react-child
-u span element dodajemo uslove za count
-varijablu count dodajemo Math.abs kad idemo u minus sa racunanjem datuma
-kreiramo const [step, setStep] = useState(1)
-kreiramo funkcije handleStepDecrement i handleStepIncrement
-u ove funkcije dodajemo funkciju setStep()

69. Starting a New Project: The "Far Away" Travel List

70. Building the Layout
-kreiramo folder components
-u folderu components kreiramo cetiri jsx komponente
-u svakoj komponenti kreiramo HTML elemente
-HTML elementima dodajemo klase
-u App.js fajl importujemo komponente

71. Rendering the Items List
-u komponenti PackingList.jsx kreiramo niz const initialItems
-nizu initialItems dodajemo metodu map()
-kreiramo komponentu Item.jsx
-u PackingList.jsx komponentu importujemo komponentu Item.jsx
-u return izjavi dodajemo komponentu Item
-u komponenti Item, funkciji Item dodajemo destruktuirani parametar props
-komponenti Item dodajemo prop item
-u prop item proslijedujemo objekt item
-u komponenti Item.jsx, span elementu dodajemo style objekt
-u style objektu dodajemo ternarni uslov item.packed za dinamicko pojavljivanje klase

72. Building a Form and Handling Submissions
-u komponenti Form.jsx kreiramo HTML elemente za formu
-u elementu select kreiramo objekt Array
-objektu Array dodajemo metode .from() i map()
-u komponenti Form.jsx kreiramo funkciju handleSubmit() sa parametrom e
-u funkciju handleSubmit() dodajemo e.preventDefault()
-form elementu dodajemo onSubmit dogadaj
-onSubmit dogadaju proslijedujemo vrijednost handleSubmit funkcije
-https://stackoverflow.com/questions/70426718/getting-syntheticbaseevent-object-instead-of-the-simple-event-when-using-react

73. Controlled Elements
-kreiramo const [description, setDescription] = useState('')
-input elementu dodajemo atribut value
-u atribut value proslijedujemo vrijednost description varijable
-https://stackoverflow.com/questions/43556212/failed-form-proptype-you-provided-a-value-prop-to-a-form-field-without-an-on
-input elemenut dodajemo dogadaj onChange
-u dogadaj onChange proslijedujemo funkciju (e) => setDescription(e.target.value)
-kreiramo const [quantity, setQuantity] = useState(10)
-select elementu dodajemo atribut value i dogadaj onChange
-u value atribut proslijedujemo vrijednost quantity varijable
-u dogadaj onChange proslijedujemo funkciju (e) =>setQuantity(e.target.value)
-vrijednost e.target.value je uvijek string
-u funkciji handleSubmit() kreiramo objekt const newItem
-dodajemo uslov if (!description) return da se funkcija prekine ako nema unesenog teksta
-u funkciju handleSubmit dodjemo funkciju setDescription('') da resetujemo polje unosa
-u funkciju handleSubmit dodajemo funkciju setQuantity(1)

74. State vs Props
-stanja su interni podaci koje posjeduje komponenta
-stanja se mogu azurirati
-stanja cine komponentu interaktivnijom
-props sluze samo sa proslijedivanje podataka od roditelj komponente prema djete komponenti

75. EXERCISE #1: Flashcards
-kreiramo komponentu FlashCards.jsx
-u komponenti FlashCards.jsx kreiramo niz const questions
-nizu questions dodajemo metodu map()
-kreiramo const [selectedId, setSelectedId] = useState(null)
-u p element dodajemo ternarni uslov i provjeravamo da li je question.id === selectedId
-u return izjavi metode map(), roditelj div elementu dodajemo klasu
-u klasu dodajemo kod za dinamicno prikazivanje klase i provjeravamo da li je question.id === selectedId
-kreiramo funkciju handleClick() sa parametrom id
-div elementu dodajemo onClick dogadaj
-u funkciju handleClick dodajemo funkciju setSelectedId sa argumentom id
-u onClick dogadaj proslijedujemo anonimnu funkciju i unutar anonimne funkcije vrijednost handleClick() funkcije
-u funkciji handleClick, u funkciji setSelectedId dodajemo ternarni uslov id !== selectedId ? id : null
-https://stackoverflow.com/questions/55265604/uncaught-invariant-violation-too-many-re-renders-react-limits-the-number-of-re

76. CHALLENGE #2: Date Counter (v2)
-kopiramo pocetni kod od prethodnog izazova
-u komponenti Counter.jsx kreiramo input type="range" element
-input elementu dodajemo value atribut
-u value atribut proslijedujemo vrijednost varijable step
-input elementu dogadaj onChange
-u dogadaj onChange proslijedujemo vrijednost anonimne funkcije
-u anonimnu funkciju proslijedujemo vrijednost setStep funkcije
-kreiramo novi input type='text' element
-input elementu dodajemo atribut value i proslijedujemo vrijednost varijable count
-input elementu dodajemo dogadaj onChange i proslijedujemo vrijednost anonimne funkcije
-u anonimnu funkciju proslijedujemo vrijednost funkcije setCount
-kreiramo button element za resetovanje 
-kreiramo funkciju handleReset()
-button elementu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo vrijednost handleReset() funkcije
-u funkciju handleReset() dodajemo funkcije setCount() i setStep()
-dodaojemo ternarni uslov count !== 0 || step !== 0 za prikazivanje button elementa
