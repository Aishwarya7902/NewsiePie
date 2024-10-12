import { useState } from "react"
import NavBar from "./components/NavBar"
import NewsBoard from "./components/NewsBoard"


function App() {
const [category,setCategory]=useState("general")

  return (
    <div>
       <NavBar setCategory={setCategory}/>
       <NewsBoard category={category}/>
    </div>
  )
}

export default App
