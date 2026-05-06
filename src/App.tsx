import Home from "./pages/Home"
import { ThemeProvider } from "./components/theme-provider"

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App
