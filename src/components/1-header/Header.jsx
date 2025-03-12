import React, { useEffect, useState } from "react";
import "./header.scss";
export const Header = ({ mainref, sectionref }) => {
  const [showModel, setshowModel] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode")??"dark");
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else{
      document.body.classList.add("dark");
      document.body.classList.remove("light");

  }
  }, [theme]);

  const handleScrollMain=()=>{
    mainref.current?.scrollIntoView({behavior:"smooth"})
  }
  const handleScrollContact=()=>{
    sectionref.current?.scrollIntoView({behavior:"smooth"})
  }

  return (
    <header className="flex">
      <button
        onClick={() => setshowModel(true)}
        className="menu icon-th-menu"
      ></button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a onClick={handleScrollMain}>Projects</a>
          </li>
          <li>
            <a href="#">Speaking</a>
          </li>
          <li>
            <a onClick={handleScrollContact}>Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          // Send value to LS
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
           // get value from LS
          
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode "
      >
        {theme==="dark" ?(<span className="icon-moon-o"></span>):(<span className="icon-sun-stroke"></span>)}
      </button>
      {showModel && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                onClick={() => setshowModel(false)}
                className="icon-cross"
              ></button>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a onClick={() => { handleScrollMain(); setshowModel(false); }}>Projects</a>
            </li>
            <li>
              <a href="#">Speaking</a>
            </li>
            <li>
              <a onClick={()=>{handleScrollContact();setshowModel(false);}}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
