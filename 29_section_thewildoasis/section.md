The Ultimate React Course 2023: React, Redux & More
Section 29: [Optional] Implementing More Features: Authentication, Dark Mode, Dashboard, etc


374. Section Overview

375. Client-Side Filtering: Filtering Cabins
-u ui folderu kreiramo Filter.jsx komponentu
-kreiramo stilizirano komponente
-u folderu cabins kreiramo komponentu CabinTableOperations.jsx
-u komponentu CabinTableOperations.jsx importujemo komponentu TableOperations.jsx
-importujemo komponentu Filter.jsx
-u komponentu Cabins.jsx importujemo komponentu CabinTableOperations.jsx
-u komponenti Filter.jsx kreiramo funkciju handleClick() sa parametrom value
-u return izjavi komponentama FilterButton dodajemo prop onClick
-importujemo React Hook useSearchParams
-kreiramo const [searchParams, setSearchParams] = useSearchParams()
-u funkciju handleClick dodajemo varijablu searchParams i funkciju setSearchParams()
-u komponenti CabinTable.jsx kreiramo const [searchParams, setSearchParams] = useSearchParams()
-kreiramo varijablu const filterValue 
-kreiramo varijablu let filteredCabins
-dodajemo uslov if (filterValue === 'all')
-dodajemo uslov if (filterValue === 'no-discount')
-u return izjavi, komponenti Table.Body dodajemo prop data={filteredCabins}
-u komponenti Filter.jsx, funkciji filter dodajemo parametre prop filterField, options
-u komponentu CabinTableOperations, u return izjavi komponenti Filter dodajemo prop filterField, options, 
-u komponenti Filter.jsx, u return izjavi unutar komponente StyledFilter dodajemo metodu options.map()
-kreiramo varijablu const currentFilter
-u return izjavi komponenti FilterButton dodajemo prop active i disabled

376. Client-Side Sorting: Sorting Cabins
-u ui folderu kreiramo komponentu SortBy.jsx
-u komponentu CabinTableOperations.jsx importujemo komponentu SortBy.jsx
-u return izjavi komponenti SortBy dodajemo prop options
-u ui folderu kreiramo komponentu Select.jsx
-u komponenti Select.jsx kreiramo stiliziranu komponentu const StyledSelect
-u return izjavi komponentu StyledSelect dodajemo prop value
-u komponenti StyledSelect dodajemo metodu options.map()
-u komponentu SortBy.jsx importujemo komponentu Select.jsx
-u return izjavi komponentu Select dodajemo prop options
-u komponenti Select.jsx, funkciji Select dodajemo parametar prop {...props}
-u komponenti SoryBy.jsx, u return izjavi komponenti Select dodajemo prop type
-u komponenti SortBy.jsx, kreiramo funkciju handleChange()
-u return izjavu, komponenti Select dodajemo prop onChange
-u prop onChange proslijedujemo funkciju handleChange()
-u komponenti Select.jsx, funkciji Select dodajemo parametar prop onChange
-u return izjavi, komponenti StyledSelect dodajemo prop onChange
-u komponentu Sortby.jsx importujemo React Hook useSearchParams
-kreiramo const [searchParams, setSearchParams] = useSearchParams()
-u funkciju handleChange() dodajemo varijablu searchParams i funkciju setSearchParams()
-kreiramo varijablu const sortBy
-u return izjavi komponenti Select dodajemo prop value
-u prop value proslijedujemo vrijednost varijable sortBy
-u komponenti CabinTable.jsx kreiramo varijablu const sortBy
-kreiramo varijable const [field, direction]
-kreiramo varijablu const modifier
-kreiramo varijablu const sortedCabins 
-u return izjavi, komponenti Table.Body dodajemo prop data={sortedCabins}

377. Building the Bookings Table
-u supabase bazi podataka u tabeli guests kreiramo novog gosta
-u tabli booking kreiramo novi booking
-u folderu services, u apoBooking.js fajlu kreiramo asinhronu funkciju getBookings()
-u funkciji getBookings() kreiramo varijable const { data, error }
-dodajemo uslov if (error)
-kreiramo folder bookings
-u folderu bookings kreiramo komponentu BookingTable.jsx
-u komponentu Bookings.jsx importujemo komponentu BookingTable.jsx
-u komponentu BookingsTable.jsx importujemo komponentu Empty.jsx
-u komponenti BookingsTable dodajemo uslov if (!bookings.length)
-u folderu bookings kreiramo fajl useBookings.js
-u useBookings.js fajlu kreiramo i eksportujemo funkciju useBookings()
-importujemo React Hook useQuery
-kreiramo funkciju useQuery()
-u funkciju useQuery() dodajemo objekt u kojem se nalaze queryKey i queryFn
-rezultat funkcije useQuery() pohranimo u varijable const { isLoading, data: bookings, error }
-u komponentu BookingTable.jsx importujemo useBookings.js fajl
-importujemo komponentu Spinner.jsx
-dodajemo uslov if (isLoading) 
-u folderu bookings kreiramo komponentu BookingRow.jsx
-kreiramo stilizirane komponente
-u komponentu BookingTable.jsx importujemo komponentu BookingRow.jsx
-u return izjavi, komponenti Table.Body dodajemo prop data i render
-u prop render dodajemo komponentu BookingRow
-komponenti BookingRow dodajemo prop key i booking

378. Uploading Sample Data
-u komponentu Sidebar.jsx importujemo komponentu Uploader.jsx
-u supabase bazi podataka u opciji authentication, odaberemo policies
-odabaremo bookings i kreiramo new policy (insert, update, delete)
-odaberemo guests i kreiramo new policy (insert, update, delete)
-kliknemo na dugme Upload All

379. API-Side Filtering: Filtering Bookings
-u folderu bookings kreiramo komponentu BookingTableOperations.jsx
-importujemo komponente TableOperations, Filter, SortBy
-u komponentu Bookings.jsx importujemo komponentu BookingTableOperations.jsx
-u useBookings.js fajlu kreiramo const [searchParams, setSearchParams] = useSearchParams()
-kreiramo varijablu const filterValue
-u apiBookings.js fajlu, funkciji getBookings() dodajemo parametre destruktuirane prop filder, sortBy
-u useBookings.js fajlu kreiramo varijablu const filter
-u queryFn dodajemo () => getBookings({ filter })
-u apiBookings.js fajlu, u funkciji getBookings kreiramo varijablu let query
-dodajemo uslov if (filter !== null)
-u useBooking.js fajlu u queryKey dodajemo filter

380. API-Side Sorting: Sorting Bookings
-u useBookings.js fajlu kreiramo varijablu const sortByRaw
-kreiramo varijable const [field, direction] 
-kreiramo varijablu const sortBy
-u queryKey dodajemo varijablu sortBy
-u queryFn dodajemo varijablu sortBy
-u apiBookings.js fajlu dodajemo uslov if (filter)
-dodajemo uslov if(sortBy.field)

381. Building a Reusable Pagination Component
-u ui folderu kreiramo komponentu Pagination.jsx
-u komponenti Pagination.jsx kreiramo stilizirane komponente
-u komponentu BookingTable.jsx importujemo komponentu Pagination.jsx
-u return izjavi komponenti Pagination dodajemo prop count
-u komponenti Pagination.jsx, funkciji Pagination dodajemo destruktuirani prop count
-kreiramo funkcije prevPage() i nextPage()
-u return izjavi komponentama PaginationButton dodajemo prop onClick
-kreiramo const [searchParams, setSearchParams] = useSearchParams()
-kreiramo varijablu const currentPage
-kreiramo varijablu const PAGE_SIZE 
-kreiramo varijablu const pageCount
-u funkciji nextPage() kreiramo varijablu const next
-dodajemo searchParams.set('page', next);
-dodajemo setSearchParams(searchParams)
-u funkciji prevPage() kreiramo varijablu const prev
-dodajemo searchParams.set('page', prev)
-dodajemo setSearchParams(searchParams)
-u return izjavi, komponentama PaginationButton dodajemo prop disabled
-dodajemo uslov if (pageCount <= 1) return null

382. API-Side Pagination: Paginatting Bookings
-u apiBookings.js fajlu, u metodu .select() dodajemo { count: 'exact' }
-dodajemo varijablu const u const { data, error, count } = await query
-u return dodajemo varijablu count return { data, count }
-u useBookings.js fajlu u const { isLoading, data: { ... }} dodajemo varijablu count
-u return dodajemo varijablu count
-u komponenti BookingTable.jsx dodajemo u const { bookings, isLoading, count } = useBookings() dodajemo varijablu count
-u return izjavu u komponenti Pagination u prop count proslijedujemo varijablu count
-u useBookings.js fajlu kreiramo varijablu const page
-u kljuc queryKey i funkciju queryFn dodajemo varijablu page
-u apiBookings.js fajlu, u funkciju getBookings dodajemo parametar destruktuirani prop page
-dodajemo uslov if (page)
-u uslov if (page) dodajemo varijablu query
-u folderu utils.js kreiramo constants.js fajl
-kreiramo i eksportujemo varijablu const PAGE_SIZE
-u komponentu Pagination.jsx importujemo varijablu PAGE_SIZE
-u apiBookings.js fajl importujemo varijablu PAGE_SIZE
-u uslovu if (page) kreiramo varijable const from i const to

383. Prefetching With React Query
-u useBooking.js fajl importujemo React Hook useQueryClient
-kreiramo funkciju useQueryClient()
-vrijednost funkcije useQueryClient() pohranimo u varijablu const queryClient
-varijabli queryClient dodajemo metodu prefetchQuery({ ... })
-u funkciju prefetchQuery dodajemo queryKey i queryFn
-u useBookings.js fajl importujemo varijablu PAGE_SIZE
-kreiramo varijablu const pageCount
-dodajemo uslov if (page < pageCount)
-dodajemo uslov if (page > 1)

384. Building the Single Booking Page
-u komponentu BookingRow.jsx importujemo komponentu Menus
-u return izjavu dodajemo komponentu Menus.Menu
-u komponentu Menus.Menu dodajemo vise stiliziranih Compound komponenata
-kreiramo varijablu const navigate
-komponenti Menus.Button dodajemo prop icon i onClick
-u dogadaj onClick proslijedujemo funkciju navigate()
-u folderu pages kreiramo komponentu Booking.jsx
-u komponentu App.jsx importujemo komponentu Booking.jsx
-kreiramo novu rutu bookings/:bookingId
-u folderu bookings kreiramo komponentu BookingDetail.jsx
-u komponentu Booking.jsx importujemo komponentu BookingDetail.jsx
-u apiBookings.js fajlu kreiramo funkciju getBooking()
-u folderu bookings kreiramo useBooking.js fajl
-u useBooking.js fajlu kreiramo i eksportujemo funkciju useBooking()
-importujemo React Hook useParams()
-kreiramo varijablu const { bookingId } = useParams()
-kreiramo funkciju useQuery()
-u queryFn dodajemo funkciju getBooking(bookingId)
-u funkciju useQuery() dodajemo retry: false
-u komponentu BookingDetail.jsx importujemo funkciju useBooking()
-kreiramo varijable const { booking, isLoading } = useBooking()
-dodajemo uslov if (isLoading)
-importujemo React Hook useMoveBack
-kreiramo varijablu const moveBack
-kreiramo varijable const { status, id:bookingId } = booking
-kreiramo varijablu const statusToTagName 
-u folderu bookings kreiramo komponentu BookingDataBox.jsx
-u komponenti BookingDataBox, funkciji BookingDataBox dodajemo parametar destruktuirani prop booking
-u komponentu BookingDetail.jsx importujemo komponentu BookingDataBox.jsx

385. Checking In a Booking
-u komponenti BookingRow.jsx kreiramo novu Check in komponentu Menus.Button
-komponenti Menus.Button dodajemo prop icon
-komponenti Menus.Button dodajemo prop onClick
-u prop onClick dodajemo funkciju navigate
-dodajemo uslov {status === 'unconfirmed' && ... }
-u komponenti BookingDetail.jsx kreiramo varijablu const navigate
-u return izjavi, u komponenti ButtonGroup, dodajemo uslov {status === 'unconfirmed' && ... }
-u folderu pages kreiramo komponentu Checkin.jsx
-u folderu check-in-out kreiramo komponentu CheckinBooking.jsx
-u komponentu Checkin.jsx importujemo komponentu CheckinBooking.jsx
-u komponentu App.jsx importujemo komponentu Checkin.jsx
-kreiramo novu rutu checking/:bookingId
-u komponentu CheckinBooking.jsx importujemo funkciju useBooking()
-kreiramo varijable const { booking, isLoading } = useBooking()
-kreiramo varijablu const moveBack
-importujemo komponentu Spinner.jsx
-dodajemo uslov if (isLoading)
-kreiramo const [confirmPaid, setConfirmPaid] = useState(false)
-u ui folderu kreiramo komponentu Checkbox.jsx
-u komponentu CheckinBooking.jsx importujemo komponentu Checkbox.jsx
-u return izjavi komponenti Checkbox dodajemo prop checked, dogadaj onChange i id
-kreiramo funkciju useEffect()
-u funkciju useEffect() dodajemo funkciju setConfirmPaid()
-u return izjavu komponenti Check in booking dodajemo prop disabled
-u folderu check-in-out kreiramo useCheckin.js fajl
-u useCheckin.js fajlu kreiramo i eksportujemo funkciju useCheckin
-importujemo React Hook useMutation
-kreiramo funkciju useMutation()
-vrijednost funkcije useMutation() pohranimo u varijable checkIn i isCheckingIn
-u fajlu apiBookings.js kreiramo i eksportujemo asinhronu funkciju updateBooking()
-u useCheckin.js fajl importujemo funkckiju updateBooking()
-importujemo React Hook useQueryClient 
-importujemo React Hook useNavigate
-kreiramo varijablu const queryClient
-kreiramo varijablu const navigate
-u funkciju mutationFn dodajemo funkciju updateBooking()
-dodajemo funkciju onSuccess
-importujemo komponentu toast
-u funkciju onSuccess dodajemo varijabli queryClient metodu invalidateQueries()
-u funkciju onSuccess dodajemo funkciju navigate('/')
-dodajemo funkciju onError
-dodajemo return { checkIn, isCheckingIn }
-u komponentu CheckinBooking.jsx importujemo funkciju useCheckin
-kreiramo varijable const { checkIn, isCheckingIn } = useCheckin()
-kreiramo funkciju handleCheckin()
-u funkciju handleCheckin dodajemo uslov if(!confirmPaid) return
-u funkciju handleCheckin dodajemo funkciju checkin(bookingId)
-u return izjavi, komponentama CheckBox, dodajemo prop disabled={confirmPaid || isCheckingIn}

386. Adding Optional Breakfast
-u komponenti CheckinBooking.jsx dodajemo const [addBreakfast, setAddBreakfast] = useState(false)
-kreiramo novu komponentu Box 
-unutar komponente Box kreiramo novu komponentu CheckBox
-komponenti CheckBox dodajemo id, prop checked i prop onChange
-u prop onChange dodajemo funkcije setAddBreakfast i setConfirmPaid
-importujemo funkciju useSettings()
-kreiramo varijable const { settings, isLoading: isLoadingSettings } = useSettings()
-kreiramo varijablu const optionalBreakfastPrice
-u komponentu Checkbox dodajemo varijablu optionalBreakfastPrice
-dodajemo uslov {!hasBreakfast && (...)}
-u funkciju handleCheckin dodajemo uslov if(addBreakfast) - else
-u uslov if(addBreakfast) dodajemo funkciju checkin({ ... })
-u uslov else dodajemo funkciju checkin ({ ... })
-u useCheckin.js fajlu, funkciji mutationFn dodajemo parametar destruktuirani prop bookingId, breakfast

387. Checking Out a Booking (+Fixig a Small Bug)
-u komponenti BookingRow.jsx dodajemo uslov {status === 'checked-in' && (...)}
-u folderu check-in-out kreiramo useCheckout.js fajl
-kopiramo kod iz useCheckin.js fajla
-u funkciji mutateFn dodajemo funkciju (bookingId)
-dodajemo status: 'checked-out'
-u komponentu BookingRow.jsx importujemo funkciju useCheckout()
-kreiramo varijable const { checkout, isCheckingOut }
-u komponenti Check out Menus.Button, komponenti Menus.Button dodajemo prop onClick
-u prop onClick proslijedujemo funkciju checkout(bookingId)
-komponenti Menus.Button dodajemo prop disabled
-u komponentu BookingDetail.jsx importujemo funkciju useCheckout()
-kreiramo varijable const { checkout, isCheckingOut } = useCheckout()
-u return izjavu dodajemo uslov {status === 'checked-in' && (...)}

388. Deleting a Booking
-u komponentu BookingRow.jsx importujemo komponentu Modal.jsx
-kreiramo komponentu Modal.Open
-komponentu Menus.Open dodajemo prop delete
-u komponentu Menus.Open dodajemo komponentu Menus.Button
-komponenti Menus.Button dodajemo prop icon
-u komponentu Modal dodajemo komponentu Modal.Window
-u komponentu BookingRow.jsx importujemo komponentu ConfirmDelete.jsx
-u folderu bookings kreiramo useDeleteBooking.js fajl
-u useDeleteBooking.js fajlu kreiramo i eksportujemo funkciju useDeleteBooking()
-u komponentu BookingRow.jsx importujemo funkciju useDeleteBooking()
-kreiramo varijable const { deleteBooking, isDeleting } = useDeleteBooking()
-u return izjavi, komponenti ConfirmDelete dodajemo prop resourceName i prop onConfirm
-u prop onCofirm proslijedujemo vrijednost funkcije deleteBooking(bookingId)
-u komponentu BookingDetail.jsx importujemo komponentu Modal.jsx
-importujemo komponentu ConfirmDelete 
-komponenti ConfirmDelete dodajemo prop resourceName, prop onConfirm
-importujemo funkciju deleteBooking
-u prop onConfirm proslijedujemo funkciju deleteBooking
-importujemo funkciju useDeleteBooking
-kreiramo varijable const { deleteBooking, isDeleting } = useDeleteBooking()
-u funkciju  deleteBooking(bookingId) dodajemo objekt 
-u objekt dodajemo funkciju onSettled

389. Authentication: User Login With Supabase
-u folderu features kreiramo folder authentication
-u folderu authentication kreiramo komponentu LoginForm.jsx
-u komponenti LoginForm.jsx kreiramo const [email, setEmail] = useState("")
-kreiramo const [password, setPassword] = useState("")
-kreiramo funkciju handleSubmit()
-u komponentu Login.jsx importujemo komponentu LoginForm.jsx
-u bazi podataka supabase kreiramo novog usera
-u folderu services kreiramo apiAuth.js fajl
-u apiAuth.js fajlu kreiramo asinhronu funkciju login sa parametrima email i password
-kreiramo varijable const { data, error }
-dodajemo uslov if (error)
-u komponenti LoginForm.jsx, u funkciju handleSubmit dodajemo uslov ako nema emaila i sifre
-importujemo funkciju login
-u funkciju handleSubmit() dodajemo funkciju login({ email, password })
-u folderu authentication kreiramo useLogin.js fajl
-u useLogin.js fajlu kreiramo i eksportujemo funkciju useLogin()
-u funkciji useLogin kreiramo funkciju useMutation({...})
-rezultat funkcije useMutation() pohranimo u varijable const { mutate: login, isLoading }
-u komponentu LoginForm.jsx importujemo funkciju useLogin()
-kreiramo varijable const { login, isLoading } = useLogin()
-u funkciju handleSubmit() dodajemo funkciju login
-u komponentu Button dodajemo uslov {!isLoading ? ... : ...>}

390. Authorization: Protecting Routes
-u ui folderu kreiramo komponentu ProtectedRoute.jsx
-u komponentu App.jsx importujemo komponentu ProtectedRoute.jsx
-u apiAuth.js fajlu kreiramo i eksportujemo asinhronu funkciju getCurrentUser()
-u funkciju getCurrentUser() dodajemo metodu await supabase.auth.getSession()
-rezultat metode await supabase.auth.getSession() pohranimo u varijablu const { data: session }
-dodajemo uslov if (!session.session) 
-u funkciju getCurrentUser() dodajemo metodu await supabase.auth.getUser()
-rezultat metode await supabase.auth.getUser() pohranjujemo u varijable const { data, error }
-dodajemo uslov if (error)
-u folderu authentication kreiramo useUser.js fajl
-u useUser.js fajlu kreiramo i eksportujemo funkciju useUser()
-importujemo React Hook useQuery
-importujemo funkciju getCurrentUser()
-kreiramo funkciju useQuery({ ... })
-u funkciju useQuery() dodajemo queryKey i queryFn
-u queryFn dodajemo funkciju getCurrentUser
-u komponentu ProtectedRoute.jsx importujemo funkciju useUser()
-kreiramo varijable const { user, isLoading, isAuthenticated } = useUser()
-importujemo komponentu Spinner.jsx
-importujemo biblioteku styled
-kreiramo stiliziranu komponentu const FullPage
-dodajemo uslov if (isLoading)
-importujemo React Hook useNavigate()
-kreiramo varijablu const navigate
-kreiramo funkciju useEffect()
-u funkciji useEffect() dodajemo uslov if(!isAuthenticated && !isLoading)
-dodajemo uslov if(isAuthenticated)
-u useLogin.js fajl importujemo React Hook useQueryClient
-kreiramo varijablu const queryClient
-u funkciju onSuccess dodajemo metodu queryClient.setQueriesData(...)
-u komponentu LoginForm.jsx, u funkciju login dodajemo funkciju onSettled

391. User Logout
-u folderu authentication kreiramo komponentu Logout.jsx
-u komponentu Logout.jsx importujemo komponentu ButtonIcon.jsx
-u komponentu Header.jsx importujemo komponentu Logout.jsx
-u apiAuth.js fajlu kreiramo i eksportujemo asinhronu funkciju logout()
-u funkciju logout() dodajemo metodu await supabase.auth.signOut()
-kreiramo varijablu const { error }
-u folderu authentication kreiramo useLogout.js fajl
-u useLogout.js fajlu kreiramo i eksportujemo funkciju useLogout
-importujemo React Hook useMutation
-u funkciji useLogout kreiramo funkciju useMutation({ ... })
-vrijednost funkcije useMutation() pohranimo u varijable const { mutate: logout, isLoading }
-importujemo funkciju logout 
-importujemo React Hook useNavigate
-kreiramo varijablu const navigate
-u funkciju useMutation dodajemo funkcije mutationFn i onSuccess
-importujemo React Hook useQueryClient()
-kreiramo varijablu const queryClient
-u funkciju onSuccess dodajemo metodu queryClient.removeQueries()
-u komponentu Logout.jsx importujemo funkciju useLogout
-kreiramo varijable const { logout, isLoading } = useLogout()
-u return izjavi komponentu ButtonIcon dodajemo prop disabled i prop onClick
-importujemo komponentu SpinnerMini
-u komponentu ButtonIcon dodajemo uslov  {!isLoading ? ... : ...}

392. Fixing an Important Bug
-u useLogin.js fajlu, u funkciji onSuccess dodajemo queryClient.setQueryData(['user'], user.user)

393. Building the Sign Up Form
-u folderu authentication kreiramo komponentu SignupForm.jsx
-u komponentu Users.jsx importujemo komponentu SignupForm.jsx
-u komponentu SignupForm importujemo React Hook useForm()
-kreiramo varijable const { register, formState }
-kreiramo varijablu const { errors } = formState
-u return izjavi komponentama Input dodajemo prop {...register}
-u komponenti Input za email validaciju dodajemo objekt pattern
-u const { register, formState } dodajemo funkciju getValues
-u komponenti Input, dodajemo prop validate
-u const { register, formState, getValues} dodajemo funkciju handleSubmit
-kreiramo funkciju onSubmit()
-komponenti Form dodajemo prop onSubmit
-u prop onSubmit dodajemo funkciju handleSubmit(onSubmit)
-u komponente FormRow dodajemo prop error

394. User Sign Up
-u apiAuth.js fajlu kreiramo i eksportujemo asinhronu funkciju signup()
-u funkciju signup() dodajemo metodu await supabase.auth.signUp
-kreiramo varijable const {data, error}
-u funkciju signup() dodajemo uslov if (error)
-u folderu authentication kreiramo useSignup.js fajl
-u useSignup.js fajlu kreiramo i eksportujemo funkciju useSignup()
-importujemo React useMutation()
-kreiramo funkciju useMutation({ ... })
-u funkciju useMutation() dodajemo mutationFn: signupApi
-kreiramo varijable const { mutate: signup, isLoading }
-u funkciju useMutation() dodajemo funkciju onSuccess
-u komponentu SignupForm.jsx importujemo funkciju useSignup
-kreiramo const { signup, isLoading } = useSignup()
-funkciji onSubmit() dodajemo parametre ({ ... })
-u funkciju onSubmit() dodajemo funkciju signup()
-u funkciju signup() dodajemo {...} i onSettled: reset
-u supabase bazi podataka, u opciji authentication, promjenimo URL Configuration
-dodajemo redirect URL
-otvorimo web stranicu https://temp-mail.org/
-kopiramo random email
-u vite React JS aplikaciji, u stranicu users kopiramo taj email
-kreiramo novog usera sa tim email-om
-otvorimo web stranicu https://temp-mail.org/ i kliknemo confirm your signup
-u komponenti SignupForm.jsx, Input i Button komponentama dodajemo prop disabled={isLoading}

395. Authorization on Supabase: Protecting Database (RLS) - Row Level Security
-u supabse bazi podataka, u opciji authentication promjenimo policies
-odaberemo opciju target roles authenticated
-ako pokusamo inportovani komponentu CabinTable.jsx u komponentu Login.jsx, necemo moci vidjeti kabine ako se nismo prethodno ulogovali

396. Building the App Header
-u folderu ui kreiramo komponentu HeaderMenu.jsx
-importujemo komponentu Logout.jsx
-importujemo komponentu ButtonIcon.jsx
-importujemo React Hook useNavigate
-kreiramo varijablu const navigate
-komponentu ButtonIcon dodajemo prop onClick
-u prop onClick dodajemo funkciju navigate('/account')
-u komponentu Header.jsx importujemo komponentu HeaderMenu.jsx
-u folderu authentication kreiramo komponentu UserAvatar.jsx
-u komponentu Header.jsx importujemo komponentu UserAvatar.jsx
-u komponenti UserAvatar.jsx kreiramo stilizirane komponente
-importujemo funkciju useUser()
-kreiramo varijablu const { user }
-kreiramo varijable const { fullName, avatar }

397. Updating User Data and Password
-u folderu authentication kreiramo komponente UpdateUserDataForm.jsx i UpdatePasswordForm.jsx
-u komponentu UpdateUserDataForm.jsx importujemo funkciju useUser()
-kreiramo varijablu const { user: { ... }}
-kreiramo const [fullName, setFullName] = useState(currentFullName)
-kreiramo const [avatar, setAvatar] = useState(null)
-kreiramo funkciju handleSubmit()
-u return izjavi komponentama Input i komponenti FileInput dodajemo prop onChange
-u komponentu Account.jsx importujemo komponentu UpdateUserDataForm.jsx
-u apiAuth.js fajlu kreiramo i eksportujemo asinhronu funkciju updateCurrentUser()
-funkciji updateCurrentUser dodajemo parametre { password, fullName, avatar}
-u funkciju updateCurrentUser() dodajemo metodu await supabase.auth.updateUser({ })
-kreiramo varijable const { data, error }
-kreiramo varijablu let updateData
-dodajemo uslove if (password) i if (fullName)
-dodajemo updateUser(updateData)
-dodajemo uslov if (!avatar)
-kreiramo varijablu const fileName
-dodajemo metodu await supabase.storage.from('avatars').upload(fileName, avatar)
-u supabase bazi podataka odaberemo opciju storage
-odaberemo opciju policies -> for full customization
-dozvolimo sve operacije - select, insert, update, delete
-u opciji target roles odaberemo authenticated
-kreiramo varijablu const { error: storageError }
-dodajemo uslov if (storageError) 
-dodajemo metodu await supabase.auth.updateUser({ ... })
-kreiramo varijable const { data: updatedUser, error: updatedUserError }
-u supabase bazi podataka u storage bucket avatar dodamo sliku avatar
-dodajemo uslov if (updatedUserError)
-u folderu authentication kreiramo useUpdateUser.js fajl
-u useUpdateUser.js fajlu kreiramo i eksportujemo funkciju useUpdateUser()
-u komponentu UpdateUserDataForm.jsx importujemo funkciju useUpdateUser()
-kreiramo const { updateUser, isUpdating } = useUpdateUser()
-u funkciju handleSubmit() dodajemo uslov if (!fullName)
-u funkciju handleSubmit() dodajemo funkciju updateUser()
-u return izjavu komponentama Input dodajemo prop disabled={isUpdating}
-u funkciju handleSubmit(), u funkciju updateUser({...}) dodajemo funkciju onSuccess()
-kreiramo funkciju handleCancel()
-u komponentu UpdatePasswordForm.jsx importujemo React Hook useForm
-kreiramo varijable const { register, handleSubmit, formState, getValues, reset }
-kreiramo varijablu const { errors } = formState
-importujemo funkciju useUpdateUser()
-kreiramo varijable const { updateUser, isUpdating } = useUpdateUser()
-kreiramo funkciju onSubmit() sa parametrom { password }
-u funkciju onSubmit() dodajemo funkciju updateUser()
-u return izjavi komponentama FormRow dodajemo prop label i error
-komponentama Input dodajemo prop id, type, autoComplete, disabled i {...register()}
-komponenti Button Cancel dodajemo prop onClick={reset}
-komponenti Button Update password dodajemo prop disabled={isUpdating}
-u komponentu Account.jsx importujemo komponentu UpdatePasswordForm.jsx

398. Implementing Dark Mode With CSS Variables
-u fajlu GlobalStyles.css kreiramo klase light-mode i dark-mode
-u ui folderu kreiramo komponentu DarkModeToggle.jsx
-u komponentu DarkModeToggle.jsx importujemo komponentu ButtonIcon.jsx
-u komponentu HeaderMenu.jsx importujemo komponentu DarkModeToggle.jsx
-u folderu src kreiramo folder context
-u folderu context kreiramo komponentu DarkModeContext.jsx
-u komponenti DarkModeContext kreiramo varijablu const DarkModeContext
-kreiramo funkciju DarkModeProvider sa parametrom prop { children }
-u funkciji DarkModeProvider() kreiramo varijable const [isDarkMode, setIsDarkMode]
-kreiramo funkciju toggleDarkMode()
-u return izjavi dodajemo komponentu DarkModeContext.Provider
-komponenti DarkModeContext.Provider dodajemo prop value
-kreiramo funkciju useDarkMode()
-kreiramo varijablu const context 
-dodajemo uslov if (context === undefined) 
-eksportujemo DarkModeProvider, useDarkMode
-u komponenti DarkModeToggle.jsx kreiramo const { isDarkMode, toggleDarkMode } = useDarkMode()
-kreiramo useLocalStorageState.js fajl
-kreiramo i eksportujemo funkciju useLocalStorageState() sa parametrim initialState, key
-kreiramo varijable const [value, setValue]
-kreiramo varijablu const storedValue
-kreiramo funkciju useEffect()
-u funkciju useEffect() dodajemo metodu localStorage.setItem()
-u komponentu App.jsx importujemo komponentu DarkModeProvider
-u komponenti DarkModeToggle.jsx komponenti u return izjavi komponenti ButtonIcon dodajemo prop onClick
-dodajemo uslov  {isDarkMode ? ... : ...}
-u komponentu Logo.jsx importujemo funkciju useDarkMode
-kreiramo varijablu const { isDarkMode }
-kreiramo varijablu const imgSource
-u return izjavi komponenti Img dodajemo src={imgSource}
-u komponenti DarkModeContext.js kreiramo funkciju useEffect()
-u funkciju useEffect() dodajemo uslov if (isDarkMode)

399. Building the Dashboard Layout
-kreiramo folder dashboard
-u folderu dashboard kreiramo komponentu DashboardLayout.jsx
-u komponentu Dashboard.jsx importujemo komponentu DashboardLayout.jsx
-u folderu dashboard kreiramo komponentu DashboardFilter.jsx
-u komponentu DashboardFilter.jsx importujemo komponentu Filter.jsx
-u komponentu Dashboard.jsx importujemo komponentu DashboardFilter.jsx

400. Computing Recent Bookings and Stays
-u apiBookings.js fajlu kreiramo i eksportujemo funkciju getBookingsAfterDate()
-kreiramo i eksportujemo funkciju getStaysAfterDate()
-u folderu dashboard kreiramo useRecentBookings.js fajl
-u useRecentBookings.js fajlu kreiramo i eksportujemo funkciju useRecentBookings()
-importujemo React Hook useSearchParams
-kreiramo const [searchParams, setSearchParams] = useSearchParams()
-kreiramo varijablu const numDays
-importujemo funkciju subDays()
-kreiramo varijablu const queryDate
-importujemo React Hook useQuery()
-kreiramo varijable const { isLoading, data: bookings, error }
-importujemo funkciju getBookingsAfterDate
-u funkciju useQuery({ ... }) dodajemo queryFn, queryKey
-dodajemo return { isLoading, bookings }
-u komponentu DashboardLayout importujemo funkciju useRecentBookings()
-kreiramo varijable const { bookings, isLoading: isLoadingBookings } 
-importujemo komponentu Spinner.jsx
-dodajemo uslov if (isLoadingBookings)
-u folderu dashboard kreiramo useRecentStays.js fajl
-kopiramo kod iz useRecentBookings()
-u useRecentStays.js fajlu kreiramo i eksportujemo funkciju useRecentStays()
-kreiramo varijablu const confirmedStays
-u komponentu DashboardLayout.jsx importujemo funkciju useRecentStays()
-kreiramo varijable const { stays, confirmedStays, isLoading: isLoadingStays }
-dodajemo uslov if (isLoadingBooking || isLoadingStays)

401. Displaying Statistics
-u folderu dashboard kreiramo komponentu Stats.jsx
-u komponenti Stats.jsx, funkciji Stats dodajemo parametre destruktuirane props
-kreiramo komponentu Stat.jsx
-u komponenti Stat.jsx, funkciji Stat dodajemo parametre destruktuirane props
-u komponentu DashboardLayout.jsx importujemo komponentu Stats.jsx
-u return izjavi, komponenti Stats.jsx dodajemo prop bookings i confirmedStays
-u komponentu Stats.jsx importujemo komponentu Stat.jsx
-kreiramo varijablu const numBookings
-u return izjavi, komponentama Stat dodajemo props
-kreiramo varijablu const sales
-kreiramo varijablu const checkins
-kreiramo varijablu const occupation
-u komponentu DashboardLayout.jsx importujemo funkciju useCabins()
-kreiramo varijable const { cabins, isLoading: isLoadingCabins } 
-dodajemo uslov if (isLoadingBooking || isLoadingStays || isLoadingCabins)

402. Displaying a Line Chart With the Recharts Library
-otvorimo web stranicu https://recharts.org/en-US/
-u terminalu instaliramo Recharts paket
-u terminal ukucamo komandu npm i recharts@2
-u folderu dashboard kreiramo komponentu DashboardBox.jsx
-u folderu dashboard kreiramo komponentu SalesChart.jsx
-kreiramo stiliziranu komponentu const StyledSalesChart
-kreiramo niz const fakeData
-kreiramo varijablu const isDarkMode = true
-kreiramo varijablu const colors
-importujemo komponentu Heading.jsx
-u komponentu DashboardLayout.jsx importujemo komponentu SalesChart.jsx
-u komponentu SalesChart.jsx importujemo komponente iz Recharts paketa
-komponentama iz Recharts paketa dodajemo props
-importujemo funkciju useDarkMode()
-funkciji SalesChart dodajemo parametre destruktuirane prop { bookings, numDays }
-u komponenti DashboardLayout.jsx u return izjavi, komponenti SalesChart dodajemo prop bookings i numDays
-u komponentu SalesChart.jsx importujemo funkciju eachDayOfInterval()
-kreiramo funkciju eachDayOfInterval({ ... })
-rezultat funkcije eachDayOfInterval() pohranjujemo u varijablu const allDates
-kreiramo varijablu const data

403. Displaying a Pie Chart
-u komponenti SalesChart.jsx, u return izjavi, u komponenti Heading dodajemo funkcije format()
-u folderu dashboard kreiramo komponentu DurationChart.jsx
-u komponenti DurationChart.jsx kreirmao stiliziranu komponentu ChartBox
-kreiramo niz const startDataLight i unutar niza objekte
-kreiramo niz const startDataDark
-kreiramo funkciju prepareData()
-u funkciji prepareData() kreiramo funkciju incArrayValue()
-kreiramo funkciju DurationChart() sa parametrom destruktuiranim prop confirmedStays
-u komponentu DashboardLayout.jsx importujemo komponentu DurationChart.jsx
-u return izjavi komponenti DurationChart dodajemo prop confirmedStays
-u komponetu DurationChart.jsx importujemo komponentu Heading.jsx
-importujemo komponente iz paketa Recharts
-komponentama iz paketa Recharts dodajemo props
-importujemo funkciju useDarkMode()
-kreiramo varijablu const { isDarkMode } = useDarkMode()
-kreiramo varijablu const startData 
-kreiramo varijablu const data 

404. Displaying Stays for Current Day
-u folderu check-in-out kreiramo komponentu TodayActivity.jsx
-u komponentu DashboardLayout.jsx importujemo komponentu TodayActivity.jsx
-u apiBookings.js fajlu kreiramo funkciju getStaysTodayActivity()
-u funkciji getStaysTodayActivity() kreiramo varijable { data, error }
-u folderu check-in-out kreiramo useTodayActivity.js fajl
-u useTodayActivity.js fajlu kreiramo funkciju useTodayActivity()
-importujemo React Hook useQuery()
-kreiramo varijable const { isLoading, data: activities }
-importujemo funkciju getStaysTodayActivity()
-u komponenti TodayActivity.jsx kreiramo varijable const const { activities, isLoading }
-importujemo funkciju useTodayActivity()
-importujemo komponentu Spinner.jsx
-dodajemo uslov {!isLoading ? ... : ...}
-u ckeck-in-out folderu kreiramo komponentu TodayItem.jsx
-u komponentu TodayActivity.jsx importujemo komponentu TodayItem.jsx
-u return izjavi, u komponenti TodayList dodajemo metodu activities.map()
-u komponenti TodayItem.jsx, funkciji TodayItem() dodajemo parametar destruktuirani prop { activity }
-importujemo komponentu Tag.jsx
-kreiramo varijable const { id, status, guests, numNights }
-kreiramo uslove { status === '...' }
-importujemo komponentu Flag.jsx
-importujemo komponentu Button.jsx
-dodajemo uslov {status === 'unconfirmed' && (...)}
-u return izjavi, komponenti Button dodajemo props
-dodajemo uslov {status === 'checked-in' && (...)}
-u komponentu CheckoutButton.jsx importujemo funkciju useCheckout()
-kreiramo varijable const { checkout, isCheckingOut }
-u return izjavi, komponenti Button dodajemo props 

405. Error Boundaries
-u terminalu instaliramo React Error Boundary Paket
-u terminal ukucamo komandu npm i react-error-boundary
-u ui folderu kreiramo komponentu ErrorFallback.jsx
-u komponenti ErrorFallback.jsx, funkcji ErrorFallback dodajemo parametar destruktuirani prop error
-importujemo komponentu GlobalStyles
-kreiramo stilizirane komponente
-u komponentu main.jsx importujemo komponentu ErrorFallback.jsx
-importujemo komponentu ErrorBoundary
-u return izjavi komponenti ErrorBoundary dodajemo prop FallbackComponent
-u komponentu ErrorFallback.jsx importujemo komponentu Button.jsx
-u komponenti main.jsx, u return izjavi, komponenti ErrorBoundary dodajemo prop onReset
-u komponenti ErrorFallback.jsx, funkciji ErrorFallback() dodajemo parametar destruktuirani prop resetErrorBoundery
-u return izjavi komponenti Button dodajemo prop onClick
-u prop onClick proslijedujemo funkciju resetErrorBoundary

406. Final Touches + Fixing Bugs
-u komponenti Menus.jsx uredujemo varijablu const ref = useOutsideClick(close, false)
-u funkciju handleClick() dodajemo e.stopPropagation()
-u komponentu BookingDetail.jsx dodajemo uslov if (!booking)
-importujemo komponentu Empty.jsx
-u konzolu ukucamo komandu window.matchMedia('(prefers-color-schema: dark)').matches
-u komponentu DarkModeContext.jsx u const [isDarkMode, setIsDarkMode] dodajemo metodu window.matchMedia()
-u komponenti CabinRow.jsx, u return izjavi komponenti Menus.Button dodajemo prop disabled
