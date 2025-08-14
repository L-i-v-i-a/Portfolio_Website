import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";

const Projects = ({ isDarkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

 const handleShowMore = () => {
  let nextIndex = currentIndex + itemsPerPage;
  if (nextIndex >= workData.length) {
    nextIndex = 0; // loop back to start
  }
  setCurrentIndex(nextIndex);
};

const getVisibleProjects = () => {
  let nextSlice = workData.slice(currentIndex, currentIndex + itemsPerPage);

  if (nextSlice.length < itemsPerPage) {
    const remaining = itemsPerPage - nextSlice.length;
    const startPrev = Math.max(currentIndex - remaining, 0);
    nextSlice = [...workData.slice(startPrev, currentIndex), ...nextSlice];
  }

  return nextSlice;
};

const visibleProjects = getVisibleProjects();


  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id='projects'
        className='w-full px-[12%] py-10 scroll-mt-20 justify-center align-items-center'
      >
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-center mb-2 text-lg font-ovo'
        >
          My Portfolio
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='text-center text-5xl font-ovo'
        >
          My Latest Projects
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
          className='grid [grid-template-columns:var(--auto-grid--)] gap-5 my-10 dark:text-black'
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={index}
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div>
                  <h2 className='font-semibold'>{project.name}</h2>
                  <p className='text-sm text-gray-700'>{project.title}</p>
                </div>
                <div
                  onClick={() => setSelectedProject(project)}
                  className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'
                >
                  <Image src={assets.send_icon} alt='Send Icon' className='w-5' />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          onClick={handleShowMore}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 
          rounded-full py-3 px-10 mx-auto my-20 hover:bg-[var(--lightHover--)] duration-500 dark:text-white dark:border-white dark:hover:bg-[rgb(var(--darkHover-rgb))]'
        >
          Show More
          <Image
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
            alt='Right Arrow'
            className='w-4'
          />
        </motion.button>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-2xl w-full shadow-lg relative overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-4"
              >
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close" className="w-3 mb-1 cursor-pointer" />
              </button>

              <Image
                src={selectedProject.bgImage}
                alt={selectedProject.name}
                width={800}
                height={450}
                className="rounded-lg mb-4"
              />

              <h2 className="text-2xl font-bold">{selectedProject.name}</h2>
              <p className="text-gray-500">{selectedProject.title}</p>

              <p className="mt-4 text-gray-700 dark:text-white">{selectedProject.description}</p>
              <p className="mt-3 text-gray-600 dark:text-white/80">{selectedProject.details}</p>

              <div className="mt-4">
                <h4 className="font-semibold">Languages/Tools Used:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-white/80">
                  {selectedProject.languages.map((lang, i) => (
                    <li key={i}>{lang}</li>
                  ))}
                </ul>
              </div>

              {selectedProject.video && (
                <div className="mt-5">
                  <h4 className="font-semibold mb-2">Project Demo:</h4>
                  <a
                    href={selectedProject.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    Watch the demo video
                  </a>
                </div>
              )}

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition"
                >
                  Visit Site
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
