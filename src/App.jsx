import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SideNav } from "./components/SideNav"
import { Layout } from "./components/Layout"
import { Vista1 } from "./components/Vista1"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Layout />} />
          <Route path="/sidenav" element={<SideNav />} />
          <Route path="/vista1" element={<Vista1 />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
