"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Confetti as ConfettiIcon } from "@phosphor-icons/react";
import Confetti from "react-confetti";

function Contact() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState(""); // "sending" | "success" | "error" | ""
  const [showConfetti, setShowConfetti] = useState(false);
  const [formSize, setFormSize] = useState({ width: 0, height: 0 });
  const formRef = useRef(null);

  // measure form size for confetti area
  useEffect(() => {
    if (formRef.current) {
      const updateSize = () => {
        const rect = formRef.current.getBoundingClientRect();
        setFormSize({ width: rect.width, height: rect.height });
      };
      updateSize();
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setResult("Sending...");
    setShowConfetti(false);

    const formData = new FormData(event.target);
    formData.append("access_key", "2c539878-0eb6-4d20-912a-27e2718f4130");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");
      setResult("Form submitted successfully!");
      setShowConfetti(true);
      event.target.reset();

      // stop confetti after 4s
      setTimeout(() => setShowConfetti(false), 4000);

      // fade out success message after 5s
      setTimeout(() => {
        setResult("");
        setStatus("");
      }, 5000);
    } else {
      console.log("Error", data);
      setStatus("error");
      setResult(data.message || "Something went wrong. Try again.");

      // fade out error message after 5s
      setTimeout(() => {
        setResult("");
        setStatus("");
      }, 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Contact with me
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center mb-5 text-5xl font-Ovo"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center mt-5 mb-12 max-w-2xl mx-auto font-Ovo"
      >
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.  
        Feel free to reach out and let's connect!
      </motion.p>

      <motion.form
        ref={formRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="relative max-w-2xl mx-auto overflow-hidden"
        onSubmit={onSubmit}
      >
        {/* 🎉 Confetti burst from the top inside form */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none z-10">
            <Confetti
              width={formSize.width}
              height={formSize.height}
              numberOfPieces={160}
              gravity={0.5}
              recycle={false}
              initialVelocityY={-10} // burst upward
              confettiSource={{
                x: 0,
                y: 0,
                w: formSize.width,
                h: 0, // emit only from top
              }}
            />
          </div>
        )}

        <div className="grid grid-cols-[var(--grid-auto)] gap-6 mt-10 mb-8 relative z-20">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text"
            placeholder="Your Name"
            required
            name="name"
            className="flex-1 p-3 outline-none border-[0.5px] bg-[var(--card-bg)] rounded-md dark:bg-[var(--card-white-bg)] dark:border-[var(--border-white-90)]"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email"
            placeholder="Your Email"
            required
            name="email"
            className="flex-1 p-3 outline-none border-[0.5px] rounded-md bg-[var(--card-bg)] dark:bg-[var(--card-white-bg)] dark:border-[var(--border-white-90)]"
          />
        </div>

        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows="6"
          placeholder="Your Message"
          required
          name="message"
          className="w-full p-4 outline-none border-[0.5px] rounded-md bg-[var(--card-bg)] mb-6 dark:bg-[var(--card-white-bg)] dark:border-[var(--border-white-90)] relative z-20"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          disabled={status === "sending"}
          className="py-3 px-8 w-max mb-4 flex items-center justify-between gap-2 bg-[var(--btn-bg)] text-[var(--btn-text)] cursor-pointer rounded-full mx-auto duration-500 dark:border-[0.5px] dark:hover:bg-[var(--btn-bg)] disabled:opacity-60 relative z-20"
        >
          Send Message
          <Image
            src={assets.right_arrow_white}
            alt="Right Arrow"
            className="w-4"
          />
        </motion.button>

        <AnimatePresence>
        {result && (
          <motion.p
            key={result} // ensures animation runs each time message changes
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`mt-6 py-3 px-6 text-left rounded-md flex items-start justify-start gap-2 relative z-20 ${
              status === "sending"
                ? "bg-white text-black"
                : status === "success"
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {result}
            {status === "success" && (
              <ConfettiIcon size={32} weight="fill" className="ml-2" />
            )}
          </motion.p>
        )}
        </AnimatePresence>
      </motion.form>
    </motion.div>
  );
}

export default Contact;
