The Ultimate React Course 2023: React, Redux & More
Section 5: Working With Components, Props and JSX


32. Section Overview

33. Rendering the Root Component and Strict Mode
-instaliranje VS Code ReactJS Snippets ekstenzije
-kreiramo index.js fajl
-kreiramo varijablu const root
-varijabli root dodajemo metodu render()
-u metodu render() proslijedujemo komponentu App
-https://stackoverflow.com/questions/76435306/babel-preset-react-app-is-importing-the-babel-plugin-proposal-private-propert

34. Before We Start Coding: Debugging
-pokretanje aplikacije sa npm start
-https://stackoverflow.com/questions/31284169/parse-error-adjacent-jsx-elements-must-be-wrapped-in-an-enclosing-tag

35. Components as Building Blocks
-komponente u Reactu su blokovi koda koje izgraduju korisnicki interfejs
-izgradnja kompleksnog interfejsa slaganjem i kombinovanjem komponenti
-iskoristavanje iste komponente vise puta

36. Creating and Reusing a Component
-kreiramo data.js fajl
-u data.js fajlu kreiramo varijablu niz const pizzaData
-varijabli const pizzaData dodajemo export
-u niz pizzaData kreiramo vise objekata koji sadrzavaju informacije o vrstama pica
-kreiramo folder pizzas u kojem se nalaze slike pica
-kreiramo folder components
-u folderu components kreiramo komponentu Pizza.jsx
-ime komponente pocinje sa velikim pocetnim slovom
-u return izjavi pisemo HTML kod
-komponentu Pizza.jsx importujemo u App.js fajl
-u App.js fajl importujemo fajl pizzaData
-https://stackoverflow.com/questions/38467574/import-javascript-file-and-call-functions-using-webpack-es6-reactjs
-u komponentu Pizza.jsx importujemo sliku pice sa imenom po izboru
-https://stackoverflow.com/questions/43823289/how-to-import-image-svg-png-in-a-react-component
-u src atribut slike proslijedujemo ime slike

37. What is JSX ?
-jsx je deklarativna sintaksa koja opisuje kako komponenta izgleda i sta ona radi
-jsx je ekstenzija javascripta
-https://stackoverflow.com/questions/39401836/why-do-i-need-babel-js
-svaki jsx element je konvertovan u React.createElement funkciju
-razlika izmedu imperativnog i deklerativnog nacina pisanja koda
-imperativni nacin pisanja koda je korak po korak manipulacija DOM elemenata
-deklarativni nacin pisanja koda opisuje kako UI treba da izgleda koristeci jsx zasnovan na trenutnom stanju podataka
-React je abstrakcija od DOM elemenata: nikada ne diramo DOM
-izgled UI kao reflekcija trenutnih podataka

38. Creating More Components
-kreiramo komponentu Header.jsx
-kreiramo komponentu Menu.jsx
-kreiramo komponentu Footer.jsx
-u komponentama, u return izjavi pisemo HTML kod
-u komponenti Footer, u return izjavi, dodajemo javascript kod za datum
-u komponentu Menu.jsx importujemo komponentu Pizza.jsx
-u App.js fajl importujemo kreirane komponente

39. Javascript Login in Components
-u komponenti Footer.jsx kreiramo varijablu const hour
-kreiramo varijable openHour i closeHour
-kreiramo varijablu const isOpen

40. Separation of Concerns
-komponenta sadrzi podatke, logiku i izgled
-komponenta koja sadrzi jedna dio UI

41. Styling React Applications
-dodavanje atributa style HTML elementima
-https://stackoverflow.com/questions/26882177/react-js-inline-style-best-practices
-u komponenti Header.jsx kreiramo varijablu const headerStyle
-u index.js fajl importujemo index.css fajl
-https://stackoverflow.com/questions/39853646/how-to-import-a-css-file-in-a-react-component
-u App.js fajlu, roditelj div elementu dodajemo klasu className
-https://stackoverflow.com/questions/30968113/warning-unknown-dom-property-class-did-you-mean-classname
-u svakoj komponenti, HTML elmentima dodajemo klase className

42. Passing and Receiving Props
-proslijedivanje podataka kroz komponente
-u komponenti Menu.jsx, u return izjavi, komponenti Pizza dodajemo prop(property)
-u komponenti Menu.jsx saljemo sliku kao props sa kljucnom rijeci require
-https://stackoverflow.com/questions/62563739/how-pass-image-as-props-in-react
-u komponenti Pizza.jsx, funkciji Pizza dodajemo parametar props
-u return izjavi pristupamo podacima iz props objekta sa props.

43. Props, Immutability and One-Way Data Flow
-props sluze za slanje podataka od vise komponente prema nizoj komponenti
-props podaci sluze kao komunikacija dvije komponente
-sa props roditelj komponenta kontrolira kako ce djete komponenta izgledati i raditi
-mnoge vrste podataka mogu biti props
-podaci koje jedna komponenta ima su props i state
-slanje podataka samo u jednom pravcu od roditelj komponente prema djecijoj komponenti

44. CHALLANGE #1: Profile Card (v1)
-kreiramo folder components
-u folderu components kreiramo jsx komponente
-u komponenti Skill.jsx, funkciji Skill dodajemo parametar props
-u komponentu SkillList.jsx importujemo komponentu Skill.jsx
-u return izjavi, komponenti Skill dodajemo props
-HTML elementima dodajemo klase sa className
-u App.js fajl importujemo kreirane komponente

45. The Rules of JSX
-u jsx komponenti mozemo pisati javascript kod koristeci {}
-ne mozemo koristit izjave if/else, for, switch
-mozemo koristiti javascript izraze
-jsx komponenta moze imati samo jedan korijen element
-pisanje komentara {/* ... */}
-pisanje inline css-a u objektu
-svaki tag mora biti zatvoren />

46. Rendering Lists
-u komponentu Menu.jsx importujemo pizzaData niz iz data.js fajla
-kreiramo HTML ul element
-u ul elementu, nizu pizzaData dodajemo metodu map() 
-u komponenti Pizza.jsx dodajemo li element kao roditelj element
-https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
-u komponenti Menu.jsx, komponenti Pizza dodajemo prop pizzaObj
-u pizzaObj prop proslijedujemo vrijednost pizza

47. Conditional Rendering With &&
-u komponenti Footer.jsx, u footer element dodajemo uslov {isOpen && ...}

48. Conditional Rendering With Ternaries
-u komponenti Menu.jsx, u return izjavi, dodajemo ternarni uslov {numPizzas > 0 ? (...) : (...)}
-u komponenti Footer.jsx u return izjavi dodajemo ternarni uslov

49. Conditional Rendering With Multiple Returns
-u komponenti Footer.jsx dodajemo uslov if (!isOpen)
-u komponenti Pizza.jsx dodajemo uslov if(props.pizzaObj.soldOut) return null

50. Extracting JSX Into a New Component
-kreiramo novu komponentu Order.jsx
-u komponenti Order.jsx, funkciji Order dodajemo parametar props
-u komponentu Footer.jsx importujemo komponentu Order.jsx
-komponenti Order.jsx dodajemo prop openHour
-instaliranje VS Code ekstenzije Sapling 

51. Destructuring Props
-u komponenti Pizza.jsx, umjesto parametra props dodajemo objekt destrukturiranje props sa { }
-isto to uradimo i u Order.jsx komponenti koja prima odredene podatke od roditelj komponente Footer.jsx
-ako pokusamo sa prop koji ne postoji pojavit ce se undefined
-https://stackoverflow.com/questions/54157962/react-functional-component-destructuring

52. React Fragments
-u komponenti Menu.jsx u uslovu {numPizzas > 0 ? (...) : (...)} dodajemo roditelj element React fragment <> </>

53. Setting Classes and Text Conditionally
-u komponenti Pizza.jsx dodajemo uslov {pizzaObj.soldOut ? (...) : (...)}
-u return izjavi, li elementu dodajemo dinamocni prikazivanje klase
-u className dodajemo ternarni uslov pizzaObj.soldOut ? 'sold-out' : ''
-https://stackoverflow.com/questions/36209432/how-to-dynamically-add-a-class-to-manual-class-names

54. Section Summary
