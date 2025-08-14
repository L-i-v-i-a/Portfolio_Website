"use client";
import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20
         justify-center align-items-center"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-85 rounded-3xl"
        >
          <Image
            src={assets.user_image}
            alt="User Image"
            className="rounded-3xl w-90 h-auto sm:h-[560px] lg:h-[570px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-ovo">
            I specialize in building high-quality web and mobile applications
            and leveraging machine learning to solve complex problems in Nigeria
            with experience of about 6 years collobrating with different teams
            to build applications. Application building is fun to do.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl "
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl cursor-pointer p-6 hover:bg-[var(--lightHover--)] hover:translate-y-1 duration-500 hover:shadow-[var(--black-shadow--)] dark:border-white dark:hover:shadow-[var(--white-shadow--)] dark:hover:bg-[rgba(var(--darkHover-rgb),0.5)]"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="mt-3 w-7"
                />
                <div>
                  <h3 className="font-semibold my-4 text-gray-700 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-white/80">
                    {description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-6 text-gray-700 font-ovo dark:text-white/80"
          >
            Tools I use
          </motion.h4>

          <motion.ul 
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 1.5 }}
  className='flex items-center gap-3 sm:gap-5'
>
  {toolsData.map((tool, index) => (
    <motion.li
      whileHover={{ scale: 1.1 }}
      key={index} 
      className='relative group flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500'
    >
      <Image src={tool.icon} alt={tool.name} className='w-5 sm:w-7' />

      {/* Tooltip */}
      <span className="absolute bottom-full mb-2 px-2 py-1 text-xs rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {tool.name}
      </span>
    </motion.li>
  ))}
</motion.ul>

        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
