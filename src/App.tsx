import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Explore from "./page/Explore";
import Detail from "./page/Detail";
import AllBlog from "./page/AllBlog";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/allblog" element={<AllBlog />} />
        <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}
