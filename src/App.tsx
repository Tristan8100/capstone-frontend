import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/guest/landing'
import { ModeToggle } from "./components/toggle"
import Register from "./components/auth/login"
import LoginPage from "./components/auth/auth-template"

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<Register/>} />
            {/* Add more routes as needed */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
