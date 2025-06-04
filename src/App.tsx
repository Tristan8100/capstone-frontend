import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/guest/landing'
import { ModeToggle } from "./components/toggle"
import Login from "./components/auth/login"
import LoginPage from "./components/auth/auth-template"
import Register from "./components/auth/register"
import ForgotPassword from "./components/auth/forgot-password"
function App() {

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
