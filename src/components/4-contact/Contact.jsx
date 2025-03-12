import Lottie from "lottie-react";
import React, { forwardRef } from "react";
import "./contact.scss";
import { useForm, ValidationError } from "@formspree/react";
import doneAnimation from "../../../public/animations/done.json";

import mailanimation from "../../../public/animations/email.json";
export const Contact = forwardRef((props, ref) => {
  const [state, handleSubmit] = useForm("xyzeykwq");
 


  return (
    <section ref={ref} className="contact-us">
      <h1 className="title">
        <span className="icon-envelope-o"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className="flex" style={{ justifyContent: "space-between" }}>
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit">Submit</button>
          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌
            </p>
          )}
        </form>
        <div className=" animation">
          <Lottie style={{ height: 300 }} animationData={mailanimation} />
        </div>
      </div>
    </section>
  );
});



