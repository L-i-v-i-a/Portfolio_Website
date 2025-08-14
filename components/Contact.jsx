"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React,  { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "motion/react"

const Contact = () => {
  const [state, handleSubmit] = useForm("xldlzkrk");
  const [showModal, setShowModal] = useState(false);
  const [formKey, setFormKey] = useState(0); // For resetting form

  // Show modal when form succeeds
  React.useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
    }
  }, [state.succeeded]);

  const handleModalClose = () => {
    setShowModal(false);
    setFormKey((prev) => prev + 1); // Forces form to reset
  };

  return (
    <div className="relative">
      {/* Main Contact Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="contact"
        className={`w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none ${
          showModal ? "blur-sm" : ""
        }`}
      >
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg font-ovo">Connect with Me</motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl font-ovo">Get In Touch</motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </motion.p>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          key={formKey}
          className="max-w-2xl mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="grid [grid-template-columns:var(--auto-grid--)] gap-6 mt-10 mb-8">
            <motion.input
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md
               bg-white dark:bg-[rgba(var(--darkHover-rgb),0.3)] dark:border-white/90"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <motion.input
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              type="email"
              name="email"
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
               dark:bg-[rgba(var(--darkHover-rgb),0.3)] dark:border-white/90"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />

          <motion.textarea
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md
             bg-white mb-6 dark:bg-[rgba(var(--darkHover-rgb),0.3)] dark:text-gray-500 dark:border-white/90"
            rows="6"
            name="message"
            placeholder="Enter Your Message"
            required
          ></motion.textarea>

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            type="submit"
            disabled={state.submitting}
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto
             hover:bg-black cursor-pointer duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-[rgba(var(--darkHover-rgb))]"
          >
            {state.submitting ? "Sending..." : "Send Message"}
            {!state.submitting && (
              <Image
                src={assets.right_arrow_white}
                alt="Right Arrow"
                className="w-4"
              />
            )}
          </motion.button>
        </motion.form>
      </motion.div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm dark:bg-black">
            <h2 className="text-xl font-semibold mb-4">✅ Message Sent!</h2>
            <p className="mb-6">
              Your message has been sent successfully. I’ll get back to you
              soon!
            </p>
            <button
              onClick={handleModalClose}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition dark:bg-white dark:text-black"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
