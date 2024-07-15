import Banner from "./components/Banner";
import Header from "./components/Header";
import GlobalStyles from "./components/EstiloGlobal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NuevoVideo from "./components/NuevoVideo";
import styled from "styled-components"
import Footer from "./components/Footer";
import Secciones from "./components/Secciones";

const ContenedorEstilizado = styled.div`
  position: relative;
  z-index: 1;
  background-color: #191919;
`;

function App() {
  return (
    <ContenedorEstilizado>
      <GlobalStyles />
      <Router>
        <Header oscuro={false} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Secciones />
                <Footer />
              </>
            }
          />
          <Route path="/nuevo_video" element={<NuevoVideo />} />
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </Router>
    </ContenedorEstilizado>
  );
}

export default App;
