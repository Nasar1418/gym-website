import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Exercises from "./components/UI/Exercises";
import Hero from "./components/UI/Hero";
import Aos from "aos";
import "aos/dist/aos.css"; //npm i aos@next --save
import Start from "./components/UI/Start";
import Pricing from "./components/UI/Pricing";
import Testimonials from "./components/UI/Testimonials";
import Footer from "./components/UI/Footer";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("darkmode");
        localStorage.setItem("theme", "darkmode");
      } else {
        document.documentElement.classList.remove("darkmode");
        localStorage.setItem("theme", "light");
      }
      Aos.refreshHard(); // Full AOS refresh on theme change
      return newMode;
    });
  };

  return (
    <div className={isDarkMode ? "darkmode" : ""}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Hero />
      <Exercises />
      <Start />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
