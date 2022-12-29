import AboutMe from "./components/AboutMe/AboutMe"
import Contact from "./components/Contact/Contact"
import Habilities from "./components/Habilities/Habilities"
import Header from "./components/Header/Header"
import Projects from "./components/Projects/Projects"
import Welcome from "./components/Welcome/Welcome"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <Header />
      <Welcome />
      <AboutMe />
      <Habilities />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
