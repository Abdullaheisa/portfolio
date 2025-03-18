import { useState } from "react";
import "./main.scss";
import React, { forwardRef } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

import { myProjects } from "./myProjects";

export const Main = forwardRef((props, ref) => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCato) => {
    setcurrentActive(buttonCato);
    const newArr = myProjects.filter((item) => {
      const arrCato = item.catogray.find((item2) => {
        return item2 == buttonCato;
      });
      return arrCato === buttonCato;
    });
    setArr(newArr);
  };
  return (
    <main ref={ref} className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>
      </section>
      <section className="flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <a href={item.linkpro} target="blank">
                <motion.article
                  layout
                  initial={{ transform: "scale(0.4)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ type: "spring", damping: 8, stiffness: 50 }}
                  key={item.id}
                  className="card"
                >
                  <img src={item.img} alt="" />
                  <div className="box">
                    <h1 className="title">{item.titlePro}</h1>
                    <p className="sub-title">
                      Lorem ipsum dolor sit amet consectetur elit adipisicing .
                      Ex tempore dolor in, accusantium laudantium accusamus.
                    </p>
                    <div className="icons flex">
                      <div style={{ gap: ".8rem" }} className="flex">
                        <a
                          href={item.gitHup}
                          className="icon-github"
                          target="blank"
                        ></a>
                      </div>
                      <a href={item.linkpro} target="blank" className="flex">
                        more
                        <span
                          style={{ alignSelf: "end" }}
                          className="icon-arrow-right"
                        ></span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              </a>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
});
