import { assets, serviceData } from '@/assets/assets';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "motion/react";

const Service = ({isDarkMode}) => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id='services'
        className='w-full px-[12%] py-10 scroll-mt-20 justify-center align-items-center'
      >
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-center mb-2 text-lg font-ovo'
        >
          What I offer
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='text-center text-5xl font-ovo'
        >
          My Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
        >
          I am a FullStack Developer and Machine Learning Expert Based in Nigeria with 6 years of experience developing multiple applications
          by collaborating with various teams of developers
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className='grid [grid-template-columns:var(--auto-grid--)] gap-6 my-10'
        >
          {serviceData.map((service, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[var(--black-shadow--)] cursor-pointer hover:bg-[var(--lightHover--)] hover:-translate-y-1 duration-500 
              dark:hover:bg-[rgb(var(--darkHover-rgb))] dark:hover:shadow-[var(--white-shadow--)]'
            >
              <Image src={service.icon} alt={service.title} className='w-12' />
              <h3 className='text-lg my-4 text-gray-700 dark:text-white/80'>{service.title}</h3>
              <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                {service.description}
              </p>
              <button
                onClick={() => setSelectedService(service)}
                className='flex items-center cursor-pointer gap-2 text-sm mt-5 text-purple-600'
              >
                Learn More
                <Image src={assets.right_arrow} alt='Right Arrow' className='w-4' />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-lg w-full shadow-lg relative"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-4 cursor-pointer"
              >
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close" className="w-6 " />
              </button>

              <div className="flex items-center gap-4">
                <Image src={selectedService.icon} alt={selectedService.title} className='w-12 h-12' />
                <h2 className="text-2xl font-bold">{selectedService.title}</h2>
              </div>

              <p className="mt-4 text-gray-600 dark:text-white/80">{selectedService.description}</p>
              <p className="mt-3 text-gray-700 dark:text-white">{selectedService.details}</p>

              <div className="mt-4">
                <h4 className="font-semibold">Tools Used:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-white/80">
                  {selectedService.tools.map((tool, i) => (
                    <li key={i}>{tool}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Service;
