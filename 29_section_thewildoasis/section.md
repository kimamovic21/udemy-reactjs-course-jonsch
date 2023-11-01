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