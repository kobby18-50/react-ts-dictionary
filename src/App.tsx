// router
import { Route, Routes } from "react-router-dom"

// pages
import Homepage from "./pages/Homepage"
import CustomNavbar from "./components/CustomNavbar"
import CustomFooter from "./components/CustomFooter"
import { Flowbite } from "flowbite-react"


function App() {
  

  return (
    <>
    <Flowbite>

    <CustomNavbar/>
    <Routes>
      <Route path="/" element={<Homepage/>} />
    </Routes>
    <CustomFooter/>
    </Flowbite>
    </>
  )
}

export default App
