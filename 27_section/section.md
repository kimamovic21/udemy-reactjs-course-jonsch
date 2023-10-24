The Ultimate React Course 2023: React, Redux & More
Section 27: React Query: Managing Remote State

346. Section Overview

347. What is React Query ?

348. Setting Up React Query
-otvorimo web stranicu https://tanstack.com/query/v4/docs/react/installation
-u terminalu instaliramo Tanstack Query Paket verziju 4
-u terminal ukucamo komandu npm i @tanstack/react-query@4
-u komponenti App.jsx importujemo funkciju queryClient
-kreiramo funkciju QueryClient()
-vrijednost funkcije QueryClient() pohranimo u varijablu const queryClient
-u return izjavu dodajemo komponentu QueryClientProvider
-komponenti QueryClientProvider dodajemo prop client
-u prop client proslijedujemo vrijednost varijable queryClient
-instaliramo paket Tanstack Query React Devtools
-u terminal ukucamo komandu npm i @tanstack/react-query-devtools@4
-u return izjavu dodajemo komponentu ReactQueryDevtools

349. Fetching Cabin Data
-u komponentu Cabins.jsx importujemo komponentu CabinTable.jsx
-u komponentu CabinTable.jsx importujemo React Hook useQuery
-importujemo funkciju getCabins()
-importujemo komponentu Spinner.jsx
-dodajemo uslov if (isLoading)
-kreiramo varijable const Table i const TableHeader
-u return izjavu dodajemo komponente Table i TableHeader
-komponentama Table i TableHeader dodajemo prop role
-u return izjavu dodajemo metodu cabins.map()
-u komponenti CabinRow.jsx kreiramo varijable
-importujemo komponentu formatCurrency
-u return izjavi dodajemo stilizirane komponente
-u terminalu instaliramo paket Date fns
-u terminalu ukucamo komandu npm i date-fns

350. Mutations: Deleting a Cabin
-u folderu services, u apiCabins.js fajlu kreiramo asinhronu funkciju deleteCabin() sa parametrom id
-u funkciji deleteCabin() kreiramo varijable data i error
-u supabase bazi podataka, odaberemo Auth -> Policies opciju
-za tabelu cabins kreiramo new policy delete
-u komponentu CabinRow.jsx importujemo React Hook useMutation
-kreiramo funkciju useMutation({ ... })
-rezultat funkcije useMutation() pohranjujemo u varijable isDeleting, mutate
-button elementu Delete dodajemo dogadaj onClick i prop disabled
-u onClick dogadaj proslijedujemo anonimnu funkciju 
-u anonimnu funkciju proslijedujemo funkciju mutate()
-importujemo React Hook useQueryClient

351. Displaying Toasts (Notifications)
-u terminalu instaliramo paket react-hot-toast
-u terminalu ukucamo komandu npm i react-hot-toast
-u komponentu CabinRow.jsx importujemo funkciju toast
-u komponenti AppLayout.jsx kreiramo varijablu const Container 
-u return izjavu dodajemo komponentu Container

352. Introducing Another Library: React Hook Form
-u folderu cabins kreiramo komponentu CreateCabinForm.jsx
-kreiramo varijable FormRow, Label, Error
-u komponentu Cabins.jsx importujemo komponentu Button.jsx
-kreiramo const [showForm, setShowForm] = useState(false);
-importujemo komponentu CreateCabinForm
-dodajemo uslov {showForm && <CreateCabinForm/>}
-u terminalu instaliramo React Hook Form paket
-u terminal ukucamo komandu npm i react-hook-form
-u komponentu CreateCabinForm.jsx importujemo React Hook useForm
-kreiramo varijable register i handleSubmit
-u return izjavi u komponente Input dodajemo {...register(...)}
-komponenti Form dodajemo prop onClick 
-u prop onClick proslijedujemo vrijednost funkcije handleSubmit
-kreiramo funkciju const onSubmit sa parametrom data

353. Creating a New Cabin
-u folderu services, u apiCabins.js fajlu kreiramo asinhronu funkciju createCabin()
-u funkciji createCabin() kreiramo varijable data, error 
-u supabase bazi podataka u authentication odabaremo policies
-kreiramo vise new policy za tabelu cabins
-u komponentu CreateCabinForm.jsx importujemo React Hook useMutation()
-kreiramo funkciju useMutation()
-vrijednost funkcije useMutation() pohranimo u varijable mutate, isCreating
-importujemo funkciju createCabin()
-importujemo funkciju toast
-importujemo React Hook useQueryClient
-kreiramo varijablu const queryClient
-u funkciju onSubmit() dodajemo funkciju mutate(data)
-u return izjavi, komponenti Button dodajemo prop disabled
-u prop disabled proslijedujemo varijablu isCreating

354. Handling Form Errors
-u komponenti CreateCabinForm.jsx, u objekt register dodajemo prop required
-kreiramo funkciju onError sa parametrom errors
-kreiramo varijablu const {errors} = formState
-u komponentu FormRow dodajemo uslov {errors?.name?.message && ... }
-u folderu ui kreiramo komponentu FormRow.jsx

355. Uploading Images to Supabase
-u komponenti FileInput.jsx varijabli FileInput dodajemo styled.input.attrs()
-u komponenti CreateCabinForm.jsx u funkciju onSubmit() dodajemo mutate({ ...data, image: data.image.at(0)})
-u apiCabins.js fajlu, u funkciju createCabin() kreiramo varijablu const imageName
-kreiramo varijablu const imagePath 
-importujemo varijablu supabaseUrl
-u supabase bazi podataka odaberemo opciju storage bucket
-odaberemo opciju policies
-odaberemo cabin-images i kliknemo opciju new policy
-u fajlu apiCabins.js, u funkciji createCabin, kreiramo varijablu const { error: storageError } 
-dodajemo uslov if(storageError)

356. Editing a Cabin
-u komponenti CabinRow.jsx kreiramo const [showForm, setShowForm] = useState(false);
-kreiramo button element Edit
-importujemo komponentu CreateCabinForm.jsx
-u return izjavi dodajemo uslov {showForm && <CreateCabinForm />}
-u return izjavi komponenti CreateCabinForm dodajemo prop cabinToEdit
-u komponenti CreateCabinForm, funkciji CreateCabinForm dodajemo parametar prop cabinToEdit
-kreiramo varijable const { id: editId, ...editValue}
-kreiramo varijablu const isEditSession
-u funkciju useForm dodajemo prop defaultValues
-return izjavi u komponentu Button dodajemo uslov {isEditSession ? ... : ...}
-u return izjavi, u komponentu FileInput, u prop required, dodajemo uslov isEditSession ? false : '...'
-u apiCabins.js fajlu, u funkciji createEditCabin, kreiramo varijablu const hasImagePath
-u komponenti CreateCabinForm.jsx kreiramo varijablu const isWorking 
-u funkciju onSubmit() dodajemo uslov if else
-kreiramo varijablu const image 

357. Abstracting React Query Into Custom Hooks
-u folderu cabins kreiramo useDeleteCabin.js fajl
-u useDeleteCabin.js fajlu kreiramo funkciju useDeleteCabin()
-u komponentu CabinRow.jsx importujemo funkciju useDeleteCabin()
-u folderu cabins kreiramo useCreateCabin.js fajl
-u useCreateCabin.js fajlu kreiramo funkciju useCreateCabin()
-u komponentu CreateCabinForm.jsx importujemo funkciju useCreateCabin()
-u folderu cabins kreiramo useEditCabin.js fajl
-u useEditCabin.js fajlu kreiramo funkciju useEditCabin()
-u komponentu CreateCabinForm.jsx importujemo funkcijue useEditCabin()
-u folderu cabins kreiramo fajl useCabins.js
-u fajlu useCabins.js kreiramo funkciju useCabins()
-u komponentu CabinTable.jsx importujemo funkciju useCabins()

358. Duplicating Cabins
-u komponentu CabinRow.jsx importujemo funkciju useCreateCabin()
-kreiramo funkciju handleDuplicate()
-kreiramo button element za dupliciranje
-button elementu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo vrijednost funkcije handleDuplicate()

359. Fetching Application Settings
-u folderu services kreiramo apiSettings.js fajl
-u apiSettings.js fajlu kreiramo asinhrone funkcije getSettings() i updateSetting()
-u supabase bazi podataka odaberemo opciju authentication
-odaberemo opciju policies
-kreiramo za tabelu settings new policy
-kreiramo folder settings
-u folderu settings kreiramo komponentu UpdateSettingsForm.jsx
-u komponentu UpdateSettingsForm.jsx importujemo komponente Form, FormRow, Input
-kreiramo varijable isLoading, error, settings
-u folderu settings kreiramo useSettings.js fajl
-u useSettings.js fajlu kreiramo i eksportujemo funkciju useSettings()
-importujemo React Hook useQuery
-importujemo funkciju getSettings()
-kreiramo funkciju useQuery()
-u funkciju useQuery() dodajemo objekt u kojem se nalaze queryKey i queryFn
-vrijednost funkcije useQuery() pohranimo u varijable isLoading, error, data: settings
-u komponentu UpdateSettingsForm importujemo funkciju useSettings()
-u komponentu Settings.jsx importujemo komponente Row.jsx i UpdateSettingsForm.jsx
-u komponenti UpdateSettingsForm.jsx, u return izjavi komponentama Input dodajemo prop defaultValue
-importujemo komponentu Spinner.jsx
-dodajemo uslov if (isLoading)

360. Updating Application Settings
-u folderu settings kreiramo useUpdateSetting.js fajl
-importujemo React Hooks useMutation, useQueryClient
-importujemo komponentu toast i funkciju updateSetting
-u useUpdateSetting.js fajlu kreiramo i eksportujemo funkciju useUpdateSettings()
-kreiramo varijablu queryClient
-kreiramo funkciju useMutation()
-vrijednost funkcije useMutation() pohranjujemo u varijable updateSetting i isUpdating
-u komponentu UpdateSettingsForm.jsx importujemo funkciju useUpdateSetting
-kreiramo varijable isUpdating, updateSettings
-kreiramo funkciju handleUpdate() sa parametrima e i field
-u funkciji handleUpdate() kreiramo varijablu const { value }
-dodajemo uslov if (!value)
-dodajemo funkciju updateSetting
-u return izjavi komponentama Input dodajemo prop onBlur
-u prop onBlur proslijedujemo anonimnu funkciju
-u anonimnu funkciju proslijedujemo funkciju handleUpdate()
-u return izjavi komponentama Input dodajemo prop disabled
