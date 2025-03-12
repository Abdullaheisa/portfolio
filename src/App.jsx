import { useEffect } from "react";
import { useRef } from "react";
import { Header } from "./components/1-header/Header";
import { Hero } from "./components/2-hero/Hero";
import { Main } from "./components/3-main/Main";
import { Contact } from "./components/4-contact/Contact";
import { Footer } from "./components/5-footer/Footer";
import { useState } from "react";


function App() {
  const sectionRef = useRef(null);
  const mainRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);
  const [showScrollBTN, setshowScrollBTN] = useState(false);
  



  return <div id="up" className="container">
    <Header sectionref={sectionRef} mainref={mainRef} />
    <Hero />
    <div className="divider"></div>
    <Main ref={mainRef}  />
    <div className="divider"></div>
    <Contact ref={sectionRef} />
    <div className="divider"></div>
    <Footer/>
    <a style={{ opacity: showScrollBTN? 1 : 0, transition: "1s" }} href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>

  </div>;
}

export default App;
