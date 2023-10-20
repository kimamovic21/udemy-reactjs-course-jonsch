The Ultimate React Course 2023: React, Redux & More
Section 26: Supabase Crash Course: Building a Back-End!


337. Section Overview

338. What is Supabase ?

339. Creating a New Database
-otvorimo web stranicu https://supabase.com/
-kreiramo account
-kreiramo novi projekt

340. Modeling Application State

341. Creating Tables
-kreiramo novu tabelu cabins
-kreiramo nove kolone
-insertujemo red
-kreiramo novu tabelu guests
-kreiramo nove kolone
-insertujemo red
-kreiramo novu tabelu settings
-kreiramo nove kolone
-insertujemo red

342. Relationships Between Tables
-kreiramo novu tabelu bookings
-kreiramo nove kolone
-cabinId povezemo sa edit foreign key relation sa cabins tabelom
-guestId povezemo sa edit foreign key relation sa guests tabelom
-u tabeli bookins insertujemo red

343. Adding Security Policies (RLS)
-kliknemo na api docs
-kliknemo na cabins
-odaberemo opciju Project API Key: anon(public)
-kopiramo kod u terminal
-na supabase odaberemo authentication opciju i odabaremo policies
-odaberemo cabins i kliknemo new policy
curl "https://utrogynjaauvrbhhcczt.supabase.co/rest/v1/cabins?select=*" ^
-H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0cm9neW5qYWF1dnJiaGhjY3p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3MjA0NzksImV4cCI6MjAxMzI5NjQ3OX0.9LcQvjGMHIz7t5nnFgA38kRW49s1p3DRL55_SlEeF_8" ^
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0cm9neW5qYWF1dnJiaGhjY3p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3MjA0NzksImV4cCI6MjAxMzI5NjQ3OX0.9LcQvjGMHIz7t5nnFgA38kRW49s1p3DRL55_SlEeF_8"

344. Connecting Supabase With Our React App
-u terminalu instaliramo Supabase paket
-u terminal ukucamo komandu npm install --save @supabase/supabase-js
-u folderu services kreiramo fajlove supabase.js i apiCabins.js

345. Setting Up Storage Buckets
-kreiramo storage bucket avatars
-kreiramo storage bucket cabin-images
-u storage bucket cabin-images postavimo slike 
-u komponenti Cabins.jsx kreiramo img element
