// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Video from "./Components/Video";
import Music from "./Components/Music";
import Tours from "./Components/Tours";
import Digital from "./Components/Digital";
import Follow from "./Components/Follow";

function App() {
  return (
    <Router>
      <>
        <header>
          <Nav />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<>
              <Video />
              <Music />
              <Tours />
              <Follow/>
            </>} />
            <Route path="/Digital" element={<Digital />} />
          </Routes>
        </main>
      </>
    </Router>
  );
}

export default App;
