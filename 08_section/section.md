The Ultimate React Course 2023: React, Redux & More
Section 8: [Optional] Practice Project: Eat-'N-Split


94. Section Overview

95. Project Setup

96. Building the Static App: List of Friends
-kreiramo niz initialFriends
-kreiramo folder components
-kreiramo komponentu FriendsList.jsx
-u App.js fajl importujemo komponentu FriendsList.jsx
-kreiramo komponentu Friend.jsx
-funkciji Friend dodajemo parametar destruktuirani prop friend
-u komponentu FriendsList.jsx importujemo komponentu Friend.jsx
-u return izjavi, komponenti Friend dodajemo props friend i key
-u komponenti Friend.jsx dodajemo uslov {friend.balance < 0 && ... }
-dodajemo uslove {friend.balance > 0 && ... } i {friend.balance === 0 && ... }
-kreiramo dugme select

97. Building the Static App: Forms
-kreiramo komponentu FormAddFriend.jsx
-kreiramo komponentu Button.jsx
-funkciji Button dodajemo parametar destruktuirani prop children
-komponentu Button.jsx importujemo u komponente Friend.jsx i FormAddFriend.jsx
-u App.js fajl importujemo komponente FormAddFriend.jsx i Button.jsx
-kreiramo komponentu FormSplitBill.jsx
-u App.js fajl importujemo komponentu FormSplitBill.jsx
-u komponentu FormSplitBill.jsx importujemo komponentu Button.jsx

98. Displaying the New Friend Form
-u App.js fajlu kreiramo const [showAddFriend, setShowAddFriend] = useState(false)
-dodajemo uslov {showAddFriend &&  <FormAddFriend />}
-u komponenti Button.jsx, funkciji Button dodajemo parametar destruktuirani prop onClick
-button elementu dodajemo dogadaj onClick
-u App.js fajlu kreiramo funkciju handleShowAddFriend()
-u return izjavi, komponenti Button dodajemo prop onClick
-u prop onClick proslijedujemo vrijednost funkcije handleShowAddFriend()
-u funkciju handleShowAddFriend() dodajemo funkciju setShowAddFriend()
-u return izjavi, u komponenti Button dodajemo ternarni uslov  {showAddFriend ? 'Close' : 'Add Friend'}

99. Adding a New Friend
-u komponenti FormAddFriend kreiramo const [name, setName] = useState('') i const [image, setImage] = useState('')
-input elementima dodajemo value props i onChange dogadaje
-kreiramo funkciju handleSubmit() sa parametrom e
-form elementu dodajemo dogadaj onSubmit
-u onSubmit dogadaj proslijedujemo vrijednost funkcije handleSubmit()
-u funkciju handleSubmit() dodajemo e.preventDefault()
-u funkciji handleSubmit() kreiramo objekt newFriend
-u funkciji handleSubmit() kreiramo varijablu const id
-u funkciju handleSubmit() dodajemo uslov if (!name || !image) 
-u funkciju handleSubmit() dodajemo funkcije setName() i setImage()
-u App.js fajlu kreiramo const [friends, setFriends] = useState([initialFriends])
-u return izjavi, komponenti FriendsList dodajemo prop friends
-u komponenti FriendsList.jsx, funkciji FriendsList dodajemo parametar destruktuirani prop friends
-u App.js fajlu kreiramo funkciju handleAddFriend() sa parametrom friend
-u funkciju handleAddFriend() dodajemo funkciju setFriends()
-u return izjavi, komponenti FormAddFriend dodajemo prop onAddFriend
-u komponenti FormAddFriend, funkciji FormAddFriend dodajemo parametar destruktuirani prop onAddFriend
-u funkciju handleSubmit() dodajemo funkciju onAddFriend(newFriend)
-u App.js fajlu, u funkciji handleAddFriend(), dodajemo funkciju setShowAddFriend(false)

100. Selecting A Friend
-u App.js fajlu kreiramo const [selectedFriend, setSelectedFriend] = useState(null)
-u return izjavi dodajemo uslov {selectedFriend && <FormSplitBill />}
-kreiramo funkciju handleSelection sa parametrom friend
-u funkciju handleSelection dodajemo funkciju setSelectedFriend(friend)
-u return izjavi, komponenti FriendsList dodajemo prop onSelection
-u komponenti FriendsList.jsx, funkciji FriendsList dodajemo parametar destruktuirani prop onSelection
-u return izjavi, komponenti Friend dodajemo prop onSelection
-u komponenti Friend.jsx, funkciji Friend dodajemo parametar destruktuirani prop onSelection
-u return izjavi, komponenti Button dodajemo onClick prop
-u App.js fajlu, u return izjavi, komponenti FormSplitBill dodajemo prop selectedFriend
-u komponenti FormSplitBill.jsx, funkciji FormSplitBill dodajemo parametar destruktuirani prop selectedFriend
-u h2 element dodajemo selectedFriend.name
-dodajemo selectedFriend.name u label i option elemente
-u App.js fajlu, u return izjavi, komponenti FriendsList dodajemo prop selectedFriend
-u komponenti FriendsList.jsx, funkciji FriendsList dodajemo destruktuirani prop selectedFriend
-u return izjavi, komponenti Friend dodajemo prop selectedFriend
-u komponenti Friend.jsx, funkciji Friend dodajemo parametar destruktuirani prop selectedFriend
-kreiramo varijablu const isSelected
-u return izjavi, elementu li dodajemo ternarni uslov za dinamicko pojavljivanje klasa
-u return izjavi, komponenti Button dodajemo ternani uslov {isSelected ? 'Close' : 'Select'}
-u App.js fajlu, u funkciji handleSelection() dodajemo funkciju setShowAddFriend(false)

101. Creating Controlled Elements
-u komponenti FormSplitBill.jsx kreiramo const [bill, setBill] = useState('')
-kreiramo const [paidByUser, setPaidByUser] = useState('')
-kreiramo const [whoIsPaying, setWhoIsPaying] = useState('user')
-input elementima dodajemo value atribude i dogadaje onChange 
-select elementu dodajemo value atribut i dogadaj onChange
-kreiramo variajablu const paidByFriend i provjeravamo da li varijabla bill postoji
-u input elementu, varijablu paidByFriend proslijedujemo u value atribut
-u dogadaju onChange={(e) => setPaidByUser(... ? ... : ....)} dodajemo uslov ternarni operator

102. Splitting a Bill
-u komponenti FormSplitBill, form elementu dodajemo onSubmit dogadaj
-kreiramo funkciju handleSubmit sa parametrom e
-u onSubmit dogadaj proslijedujemo funkciju handleSubmit()
-u funkciju handleSubmit() dodajemo uslov if (!bill || !paidByUser) return
-u App.js fajlu kreiramo funkciju handleSplitBill() sa parametrom value
-u return izjavi komponenti FormSplitBill dodajemo prop onSplitBill
-u komponenti FormSplitBill, funkciji FormSplitBill dodajemo parametar destruktuirani prop onSplitBill
-u funkciju handleSubmit dodajemo funkciju onSplitBill
-u App.js fajlu, u funkciju handleSplitBill, dodajemo funkciju setFriends
-u funkciju handleSplitBill dodajemo funkciju setSelectedFriend(null)
