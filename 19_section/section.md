The Ultimate React Course 2023: React, Redux & More
Section 19: Performance Optimization and Advanced useEffect

242. Section Overview

243. Performance Optimization and Wasted Renders

244. The Profiler Developer Tool

245. A Surprising Optimization Trick With children
-kreiramo komponentu Text.jsx
-u komponentu List.jsx importujemo komponentu Text.jsx
-u komponenti Test.jsx kreiramo komponentu Counter sa parametrom children
-u return izjavi, dodajemo komponentu Counter
-u komponentu Counter dodajemo komponentu SlowComponent

246. Understanding memo

247. memo in Practice
-u komponentu Archive.jsx importujemo funkciju memo
-funkciju Archive dodajemo u funkciju memo()

248. Understanding useMemo and useCallback

249. useMemo in Practice
-https://www.youtube.com/watch?v=THL1OPn72vo
-objektu archiveOptions dodajemo funkciju useMemo()

250. useCallback in Practice
-u komponenti PostContext.jsx kreiramo funkciju useCallback()
-u funkciju useCallback() dodajemo funkciju handleAppPost

251. Optimizing Context Re-Renders
-u komponenti PostContext.jsx kreiramo varijablu const value u koju je pohranjena vrijednost funkcije useMemo()
-u return izjavi, komponenti PostContext.Provider dodajemo prop value i proslijedujemo vrijednost varijable value

252. Back To "WorldWise" App
-u komponenti City.jsx, u funkciju useEffect(), u niz dodajemo varijablu getCity
-u komponentu CititesContext.jsx importujemo React Hook useCallback
-kreiramo varijablu getCity cija je vrijednost jednaka funkciji useCallback()

253. Optimizing Bundle Size With Code Splitting
-u terminal ukucamo komandu npm run build
-prije implementacije funkcije lazy loading:
dist/assets/index-229ba60b.css   31.64 kB │ gzip:   5.22 kB
dist/assets/index-dba5aa25.js   527.22 kB │ gzip: 149.38 kB

-dodajemo kod za splitovanje bundlea i prikazivanje spinnera
-u App.jsx komponenti kreiramo funkcije lazy()
-u return izjavu dodajemo komponentu Suspense
-komponenti Suspense dodajemo prop fallback

-nakon implementacije funkcije lazy loading:
dist/assets/Logo-1ec4a931.css           0.03 kB │ gzip:   0.05 kB
dist/assets/Login-a5179682.css          0.35 kB │ gzip:   0.22 kB
dist/assets/Product-32111d14.css        0.47 kB │ gzip:   0.27 kB
dist/assets/Pricing-33a06b29.css        0.47 kB │ gzip:   0.27 kB
dist/assets/Homepage-ac66a04c.css       0.51 kB │ gzip:   0.30 kB
dist/assets/PageNav-2e953c8f.css        0.51 kB │ gzip:   0.28 kB
dist/assets/AppLayout-4a0bd8ce.css      1.91 kB │ gzip:   0.70 kB
dist/assets/index-1f597274.css         27.51 kB │ gzip:   4.48 kB
dist/assets/PageNotFound-ec0115d5.js    0.14 kB │ gzip:   0.14 kB
dist/assets/Logo-23fb5208.js            0.20 kB │ gzip:   0.18 kB
dist/assets/PageNav-30c1bd62.js         0.47 kB │ gzip:   0.26 kB
dist/assets/Pricing-7f31ff12.js         0.63 kB │ gzip:   0.41 kB
dist/assets/Homepage-d98bd23e.js        0.65 kB │ gzip:   0.40 kB
dist/assets/Product-5936e9eb.js         0.84 kB │ gzip:   0.49 kB
dist/assets/Login-e1cb1b76.js           0.98 kB │ gzip:   0.51 kB
dist/assets/AppLayout-cc6efce7.js     157.03 kB │ gzip:  46.26 kB
dist/assets/index-05c4f212.js         368.60 kB │ gzip: 102.81 kB

254. Don't Optimize Prematurely!

255. useEffect Rules and Best Practices

256. CHALLENGE #1: Fix Performance Issues in "Workout Timer"
-u komponenti ClickSound.jsx, u export default dodajemo funkciju memo()
-u komponenti Calculator.jsx, u export default dodajemo funkciju memo()
-u komponenti App.jsx, u niz workout dodajemo funkciju useMemo()

257. Setting State Based on Other State Updates
-u komponenti Calculator.jsx kreiramo const [duration, setDuration] = useState(0)
-kreiramo funkciju useEffect()
-u funkciju useEffect() dodajemo funkciju setDuration()
-kreiramo funkciju handleIncrement()
-u funkciju handleIncrement() dodajemo funkciju setDuration()
-kreiramo funkciju handleDecrement()
-u funkciju handleDecrement() dodajemo funkciju setDuration()
-button elementima + i - dodajemo dogadaje onClick
-u dogadaje onClick proslijedujemo funkcije handleIncrement i handleDecrement

258. Using Helper Functions in Effects
-u komponenti Calculator.jsx kreiramo funkciju playSound()
-u funkcije handleIncrement() i handleDecrement() dodajemo funkciju playSound()
-kreiramo funkciju useEffect() u koju dodajemo funkciju playSound()

259. Closures in Effects
