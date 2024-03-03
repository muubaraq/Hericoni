// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Info from "./Components/Info";
import Video from "./Components/Video";
import Music from "./Components/Music";
import Tours from "./Components/Tours";
import Digital from "./Components/Digital";
import Follow from "./Components/Follow";
import News from "./Components/News";

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
            <Info/>
              <Video />
              <Music />
              <Tours />
              <Follow/>
            </>} />
            <Route path="/Digital" element={<Digital />} />
            <Route path="/News" element={<News />} />
          </Routes>
        </main>
      </>
    </Router>
  );
}

export default App;
