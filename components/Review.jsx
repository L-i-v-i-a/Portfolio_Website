'use client'
import { motion, AnimatePresence } from 'motion/react';
import { reviewsData, assets } from '@/assets/assets';
import React, { useState } from 'react';
import Image from 'next/image';

const Review = ({ isDarkMode }) => {
  const [selectedReview, setSelectedReview] = useState(null);

  return (
    <>
      <motion.section
        id='testimonials'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-10 bg-gray-50 dark:bg-[var(--darkHover--)] scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-[12%]">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl font-ovo text-center mb-10"
          >
            What Our Users Say
          </motion.h2>

          <div className="overflow-hidden relative">
            <motion.div
              className="flex gap-6"
              animate={{ x: ['0%', '-100%'] }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            >
              {[...reviewsData, ...reviewsData].map((review, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex-none w-72 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-[var(--black-shadow--)] border border-gray-200 dark:border-white/20 cursor-pointer"
                  onClick={() => setSelectedReview(review)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{review.name}</h3>
                      <div className="flex items-center gap-1 text-yellow-400">
                        {Array.from({ length: review.ratings }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                        {Array.from({ length: 5 - review.ratings }).map((_, i) => (
                          <span key={i} className="text-gray-300">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-white/80 text-sm">{review.reviews}</p>
                  <button
                    onClick={() => setSelectedReview(review)}
                    className="mt-4 text-purple-600 text-sm flex items-center gap-2"
                  >
                    Read More
                    <Image src={assets.right_arrow} alt="Right Arrow" className="w-4" />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {selectedReview && (
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
                onClick={() => setSelectedReview(null)}
                className="absolute top-3 right-4 cursor-pointer"
              >
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close" className="w-6" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <Image src={selectedReview.image} alt={selectedReview.name} className='w-12 h-12 rounded-full' />
                <h2 className="text-2xl font-bold">{selectedReview.name}</h2>
              </div>

              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {Array.from({ length: selectedReview.ratings }).map((_, i) => <span key={i}>★</span>)}
                {Array.from({ length: 5 - selectedReview.ratings }).map((_, i) => <span key={i} className="text-gray-300">★</span>)}
              </div>

              <p className="text-gray-600 dark:text-white/80">{selectedReview.reviews}</p>
              <p className="mt-3 text-gray-700 dark:text-white">{selectedReview.details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Review;
