The Ultimate React Course 2023: React, Redux & More
Section 28: Advanced React Patterns

361. Section Overview

362. An Overview of Reusability in React

363. Setting Up an Example

364. The Render Prop Pattern
-u komponenti List.jsx, funkciji List dodajemo parametar prop render
-u return izjavu, u ul element dodajemo {displayItems.map(render)}
-u komponenti App.jsx, u return izjavi komponenti List dodajemo prop render
-u komponentu App.jsx importujemo komponente ProductItem.jsx i CompanyItem

365. A Look at Higher-Order Components (HOC)
-kreiramo komponentu HOC.jsx
-u komponentu App.jsx importujemo komponentu HOC.jsx
-kreiramo komponentu ProductListWithToggles

366. The Compound Component Pattern
-u komponentu App2.jsx importujemo komponentu Counter.jsx
-u komponenti Counter.jsx kreiramo const [ count, setCount ] = useState(0);
-kreiramo funkcije increase() i decrease()
-kreiramo varijablu const CounterContext
-u return izjavu dodajemo komponentu CounterContext.Provider
-komponenti CounterContext.Provider dodajemo prop value
-kreiramo komponente Count, Label, Increase, Decrease

367. Building a Modal Window Using a React Portal
-u ui folderu kreiramo komponentu Modal.jsx
-u komponenti Modal.jsx kreiramo varijable StyledModal, Overlay, Button
-funkciji Modal dodajemo parametar prop children
-u folderu cabins kreiramo komponentu AddCabin.jsx
-u komponentu Cabins.jsx importujemo komponente Button, CreateCabinForm, Modal
-kreiramo const [isOpenModal, setIsOpenModal] = useState(false);
-u komponenti AddCabin.jsx, u return izjavi komponenti Modal dodajemo prop onClose
-komponenti CreateCabinForm dodajemo prop onCloseModal
-u komponenti CreateCabinForm.jsx, funkciji CreateCabinForm dodajemo parametar prop onCloseModal
-u return izjavi, komponenti Button Cancel dodajemo prop onClick
-u return izjavi, komponenti Form dodajemo prop type
-u komponentu Modal.jsx importujemo funkciju createPortal

368. Converting the Modal to a Compound Component
-u komponenti AddCabin.jsx kreiramo komponente Modal.Open, Modal.Window
-komponenti Modal.Open dodajemo prop opens
-komponenti Modal.Window dodajemo prop name
-u komponentu Modal.jsx kreiramo varijablue const ModalContext
-kreiramo komponentu Window sa parametrima prop children, name, onClose
-kreiramo komponentu Modal sa parametrom children
-u komponenti Modal kreiramo const [openName, setOpenName] = useState('')
-kreiramo komponentu Open sa parametrima prop children, opens
-u komponenti Open kreiramo varijablu const { open } 
-u komponenti Window kreiramo varijable const { openName, close }
-dodajemo uslov if (name !== openName)

369. Detecting a Click Outside the Modal
-u komponenti Modal.jsx, u komponenti Window kreiramo funkciju useEffect()
-u funkciji useEffect() kreiramo funkciju handleClick sa parametrom e
-dodajemo metodu document.addEventLister 
-dodajemo anonimnu callback funkciju
-kreiramo varijablu const ref
-u return izjavi komponenti StyledModal dodajemo prop ref
-u funkciju handleClick() dodajemo uslov if (ref.current && ...)
-u folderu hooks kreiramo useOutsideClick.js fajl
-u useOutsideClick.js fajlu kreiramo i eksportujemo funkciju useOutsideClick()
-u komponentu Modal.jsx importujemo funkciju useOutsideClick()

370. Confirming Cabin Deletions
-u komponentu CabinRow.jsx importujemo komponentu Modal.jsx
-u ui folderu kreiramo komponentu ConfirmDelete.jsx
-u komponentu CabinRow.jsx importujemo komponentu ConfirmDelete.jsx
-u komponenti ConfirmDelete.jsx komponentama Button dodajemo prop onClick

371. Building a Reusable Table
-u ui folderu kreiramo komponentu Table.jsx
-u komponenti Table.jsx kreiramo stilizirane komponente
-u komponentu CabinTable.jsx importujemo komponentu Table.jsx
-u return izjavi komponenti Table dodajemo prop columns
-u komponenti Table.jsx kreiramo komponente Table, Header, Row, Body
-kreiramo varijablu TableContext
-u funkciji Table() kreiramo komponentu TableContext.Provider
-komponenti TableContext.Provider dodajemo prop value
-u funkciji Header() kreiramo varijablu const { columns }
-u return izjavu dodajemo komponentu StyledHeader
-komponenti StyledHeader dodajemo prop role i column
-u funkciji Row() dodajemo komponentu StyledRow
-u funkciji Body() dodajemo komponentu 

372. Applying the Render Props Pattern
-u komponenti CabinTable.jsx, u return izjavu dodajemo komponentu Table.Body
-komponenti Table.Body dodajemo prop data i render
-u komponenti Table.jsx, u funkcij Body dodajemo parametre data i render
-u return izjavu dodajemo komponentu StyledBody
-u komponentu StyledBody dodajemo metodu data.map(render)
-dodajemo uslov if (!data.length)

373. Building a Reusable Context Menu
-u ui folderu kreiramo komponentu Menus.jsx
-u komponeti Menus.jsx kreiramo stilizirane komponente
-u komponentu CabinTable.jsx importujemo komponentu Menus.jsx
-u komponentu CabinRow.jsx importujemo komponentu Menus.jsx
-komponenti Menus.Toggle dodajemo prop id
-komponenti Menu.List dodajemo prop id
-u komponenti Menus kreirmao funkcije Toggle, List, Button
-kreiramo varijablu const MenusContext
-u funkciji Menu() kreiramo const [openId, setOpenId] = useState('');
-kreiramo funkcije open i close
-u return izjavu dodajemo komponentu MenusContext.Provider 
-komponenti MenusContext.Provider dodajemo prop value
-kreiramo funkciju handleClick()
-u funkciju Button(), u return izjavu dodajemo komponentu StyledButton
-u funkciju Toggle(), u return izjavu dodajemo komponentu StyledToggle
-komponenti StyledToggle dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo funkciju handleClick
-kreiramo varijable const { openId, close, open }
-u funkciji List kreiramo varijablu const { openId }
-dodajemo uslov if (openId !== id) 
-komponenti StyledList dodajemo prop position 
-u funkciji handleClick() kreiramo varijablu const rect
-u funkciji Menu() kreiramo const [position, setPosition] = useState(null)
-u funkciji Button() kreiramo funkciju handleClick()
-kreiramo varijablu const { close }
-u funkciji List() kreiramo varijablu const ref
-u komponenti CabinRow.jsx u return izjavi kreiramo komponente Menus.Menu, Menus.Toggle, Menus.List, Menus.Button
-komponenti Menus.Button dodajemo prop icon i onClick
-importujemo komponentu ConfirmDelete.jsx
-u return izjavi komponenti ConfirmDelete dodajemo prop resourceName
