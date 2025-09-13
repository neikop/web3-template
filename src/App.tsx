import { AppProvider } from "components/app"
import { AdminLayout, AuthLayout } from "components/layouts"
import { BrowserRouter, Route, Routes } from "react-router"

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />} path="/auth/*" />
          <Route element={<AdminLayout />} path="/*" />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
