import Logo from "./components/Logo";
import Navigation from "./components/Navigation"

export const metadata = {
  title: 'The Wild Oasis',
}

const RootLayout = ({ children }) => {
  console.log(children);
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>
          {children}
        </main>
        <footer>Copyright by The Wild Oasis.</footer>
      </body>
    </html>
  )
}

export default RootLayout