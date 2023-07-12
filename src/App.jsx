import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home";
import EndPage from "./pages/endPage/EndPage";
import Memories from "./pages/memories/Memories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Thanks from "./pages/thanks/Thanks";

function App() {
  return (
    <div className="App">
      {/* <Topbar /> */}
      <Home />
      <Memories />

      <EndPage />
      <Thanks />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuteness" element={<Home />} />
          <Route path="/memories" element={<Memories />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
