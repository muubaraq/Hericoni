// import { Routes, Route } from "react-router-dom"
import Nav from "./Components/Nav";
import Video from "./Components/Video";
import Music from "./Components/Music";
import Tours from "./Components/Tours"
// import Digital from "./Components/Digital";

function App() {
 

  return (
    <>

     <header>
     <Nav/>
     </header>
     
     <main>
     <Video/>
      <Music/>
      <Tours/>
     </main>
    </>
  )
}

export default App
