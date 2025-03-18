import devanimation from "../../../public/animations/animation.json";
import "./hero.scss";
import Lottie from "lottie-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            className="avatar"
            src="./pro.png"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>
        <div>
          <div className="info">
            <span className="sub-info">Available for Freelance Work</span>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="title"
            >
              Abdullah Eissa
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Front-End Developer
            </motion.h2>
            <p className="subtitle">
              I craft responsive websites where technologies meet creativity.
              Building exceptional digital experiences with modern frontend
              frameworks.
            </p>
          </div>
          <div className="all-icons flex">
            <a  className="icon icon-instagram" />
            <div className="icon icon-linkedin"></div>
            <div className="icon icon-facebook"></div>
            <a href="https://github.com/Abdullaheisa" target="blank" className="icon icon-github"/>
          </div>
        </div>
      </div>
      <div className="right-section">
        <Lottie
          className="animation"
          style={{ height: 270 }}
          animationData={devanimation}
        />
      </div>
    </section>
  );
};
