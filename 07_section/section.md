The Ultimate React Course 2023: React, Redux & More
Section 7: Thinking in React: State Management


77. Section Overview

78. What is "Thinking in React" ?
-kreiranje UI-a u vise komponenti
-staticka verzija React-a (bez stanja)
-kada koristiti stanja
-tipovi stanja: lokalni i globalni
-gdje staviti svaki komad stanja
-jedan pravac u protoku podataka
-roditelj-djete komunikacija
-pristupanje globalnom stanju
-lokalno stanje i globalno stanje
-lokalno stanje potrebno samo u jednoj ili nekoliko komponenti
-stanje koje je definisano samo u jedno komponenti se moze korisiti samo tu ili u djecijim komponentama
-globalno stanje je stanje koje je potrebno za vise komponenti
-dijeljenje stanja je pristupacno svakoj komponenti u citavoj aplikaciji
-dijeliti podatke u vise komponenti mozemo pomocu context api-a i redux biblioteke

79. Fundamentals of State Management 
-upravljanje stanjem - odlucivanje kada kreirati dio stanja
-koji tip stanja je potreban
-gdje smjestiti stanje 
-kako podaci proticu kroz aplikaciju
-potreba za skladistenjem podataka
-pitanje hoce li se podaci promjeniti u jednom trenutku

80. Thinking About State and Lifting State Up
-kopiramo kod iz faraway projekta
-u komponenti Form.jsx kreiramo const [items, setItems] = useState([])
-kreiramo funkciju const handleAddItems() sa parametrom item
-u funkciji handleSubmit(e) dodajemo funkciju handleAddItems sa parametrom newItem
-u funkciju handleAddItems dodajemo funkciju setItems()
-u funkciju setItems() dodajemo callback funkciju sa parametrom items
-u App.js fajlu premjestamo const [items, setItems] = useState([])
-u App.js fajlu, u return izjavi, komponenti PackingList dodajemo prop items
-u props items proslijedujemo vrijednost varijable items
-u komponenti PackingList.jsx, funkciji PackingList dodajemo parametar destruktuirani props items
-umjesto initialItems.map() dodajemo items.map()
-funkciju handleAddItems() premjestamo u App.js fajl
-u App.js fajlu, u return izjavi, komponenti Form dodajemo prop onAddItems
-u prop onAddItems proslijedujemo vrijednost funkcije handleAddItems
-u komponenti Form.jsx, funkciji Form dodajemo destruktuirani prop onAddItems
-u funkciju handleSubmit() dodajemo funkciju onAddItems(newItem)

81. Reviewing "Lifting Up State"
-podizanje stanja na zajednicki roditelj element
-podizanjem stanja smo omogucili dijeljenje stanja kroz vise komponenti u razlicitim pozicijama

82. Deleting an Item: More Child-to-Parent Communication!
-kreiramo funkciju handleDeleteItem() sa parametrom id
-u funkciju handleDeleteItem() dodajemo funkciju setItems()
-u funkciji setItems() nizu items dodajemo filter metodu
-https://stackoverflow.com/questions/9334636/how-to-create-a-dialog-with-ok-and-cancel-options
-https://stackoverflow.com/questions/63311845/unexpected-use-of-confirm-no-restricted-globals
-u return izjavi, komponenti PackingList dodajemo prop onDeleteItem
-u prop onDeleteItem proslijedujemo vrijednost funkcije handleDeleteItem
-u komponenti PackingList.jsx, funkciji PackingList dodajemo destruktuirani prop onDeleteItem
-u return izjavi, komponenti Item dodajemo prop onDeleteItem
-u komponenti Item.jsx, funkciji Item dodajemo destruktuirani prop onDeleteItem
-button elementu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo anonimnu funkciju
-u anonimnu funkciju proslijedujemo funkciju onDeleteItem

83. Updating an Item: Complex Immutable Data Operation
-u komponenti Item.jsx kreiramo input checkbox element
-input elementu dodajemo atribut value
-input elementu dodajemo dogadaj onChange unutar kojeg proslijedujemo anonimnu funkciju
-u App.js fajlu kreiramo funkciju handleToggleItem() sa parametrom id
-u funkciju handleToggleItem() dodajemo funkciju setItems()
-u funkciji setItems(), u callback funkciji nizu items dodajemo metodu map()
-u return izjavi, komponenti PackingList dodajemo prop onToggleItem
-u prop onToggleItem proslijedimo vrijednost funkcije handleToggleItem 
-u komponenti PackingList.jsx, u funkciji PackingList dodajemo parametar destruktuirani prop onToggleItem
-u return izjavi, komponenti Item dodajemo prop onToggleItem
-u prop onToggleItem proslijedijemo vrijednost funkcije onToggleItem
-u komponenti Item.jsx, u funkciju Item dodajemo parametar destruktuirani prop onToggleItem
-u dogadaju onChange, u anonimnu funkciju, proslijedujemo funkciju onToggleItem

84. Derived State
-derivirano stanje - stanje koje je derivirano od druge komponente

85. Calculating Statistics as Derived State
-u App.js fajlu, u return izjavi, komponenti Stats dodajemo prop items
-u komponenti Stats.jsx kreiramo varijablu const numItems
-funkciji Stats dodajemo destruktuirani prop parametar items
-u return izjavi, dodajemo varijablu numItems
-kreiramo varijablu const numPacked
-u return izjavi, dodajemo varijablu numPacked
-kreiramo varijablu const numPercentage
-u return izjavu dodajemo varijablu numPercentage
-dodajemo uslov if (!items.length)
-u return izjavi dodajemo uslov ternarni operator numPercentage === 100
-u return izjavi dodajemo uslov ternarni operator numItems === 1

86. Sorting Items
-u komponenti PackingList.jsx, u return izjavi kreiramo div element sa klasom actions
-kreiramo select element
-kreiramo options elemente
-kreiramo const [sortBy, setSortBy] = useState('input')
-select elementu dodajemo atribut value
-u atribut value proslijedujemo vrijednost varijable sortBy
-select elementu dodajemo dogadaj onChange
-u dogadaj onChange proslijedujemo anonimnu funkciju
-kreiramo varijablu let sortedItems
-dodajemo uslov if (sortBy === 'input')
-https://stackoverflow.com/questions/69080597/%C3%97-typeerror-cannot-read-properties-of-undefined-reading-map
-dodajemo uslov if (sortBy === 'description')
-https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values
-dodajemo uslov if (sortBy === 'packed')
-https://stackoverflow.com/questions/9592740/how-can-you-sort-an-array-without-mutating-the-original-array

87. Clearing the List
-u App.js fajlu kreiramo funkciju handleClearList()
-u funkciju handleClearList() dodajemo setItems([])
-u komponenti PackingList.jsx kreiramo button Clear list
-u return izjavi, komponenti PackingList dodajemo prop onClearList
-u prop onClearList proslijedujemo vrijednost handleClearList() funkcije
-u PackingList.jsx komponenti, funkciji PackingList dodajemo parametar destruktuirani prop onClearList
-button elementu dodajemo onClick dogadaj
-u onClick dogadaj proslijedujemo vrijednost funkcije onClearlist
-u App.js fajlu, funkciji handleClearList kreiramo varijablu const confirmed
-dodajemo uslov if (confirmed)

88. Moving Components Into Separate Files
-kreiramo posebno komponente
-u App.js fajl importujemo komponente

89. EXERCISE #1: Accordion Component (v1)
-kreiramo komponentu Accordion.jsx
-kreiramo komponentu AccordionItem.jsx
-u komponenti AccordionItem.jsx, funkciji AccordionItem dodajemo parametre destruktuirani props
-u return izjavi kreiramo HTML elemente
-HTML elementima dodajemo klase
-u HTML elemente dinamicki prikazujemo varijable
-u komponentu Accordion.jsx importujemo komponentu AccordionItem.jsx
-u App.js fajl importujemo komponentu Accordion.jsx
-u App.js fajlu kreiramo niz const faqs 
-u App.js fajlu, komponenti Accordion dodajemo prop data
-u komponenti Accordion.jsx, funkciji Accordion dodajemo parametar destruktuirani props
-u return izjavi, dodajemo varijabli data dodajemo metodu map()
-https://stackoverflow.com/questions/48458334/functions-are-not-valid-as-a-react-child-this-may-happen-if-you-return-a-compon
-u metodi map() dodajemo komponentu AccordionItem
-komponenti AccordionItem dodajemo props
-u p elementu dodajemo uslov ako je number < 9 
-kreiramo const [isOpen, setIsOpen] = useState(false)
-dodajemo uslov {isOpen && ... }
-kreiramo funkciju handleToggle()
-u funkciju handleToggle() dodajemo funkciju setIsOpen()
-div elementu sa klasom icon dodajemo onClick dogadaj
-u onClick dogadaj proslijedujemo vrijednost funkcije handleToggle
-div elementu sa klasom item dodajemo uslov za dinamicko prikazivanje klase
