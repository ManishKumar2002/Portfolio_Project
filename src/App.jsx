import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}
