'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProjectCard({ title, tech, img, link }) {
  return (
    <motion.a
      href={link}
      target='_blank'
      className='group block relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image */}
      <div className='relative h-56 w-full'>
        <Image
          src={img}
          fill
          alt={title}
          className='object-cover transition-all duration-500 group-hover:scale-105'
        />
      </div>

      {/* DESKTOP: Hover Gradient Overlay */}
      <div
        className='absolute inset-0 hidden md:block
        bg-gradient-to-b from-white/0 via-white/90 to-white/95 dark:from-gray-900/0 dark:via-gray-900/90 dark:to-gray-900/95
        opacity-0 group-hover:opacity-100
        transition-all duration-500'
      ></div>

      {/* DESKTOP: Hover Content */}
      <div
        className='absolute inset-0 hidden md:flex flex-col items-center justify-center
        opacity-0 group-hover:opacity-100
        transition-all duration-500 p-4 text-center'
      >
        <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
          {title}
        </h3>
        <p className='text-sm text-purple-600 dark:text-purple-400 mt-2 font-medium'>
          {tech}
        </p>
      </div>

      {/* MOBILE: Always-visible content */}
      <div
        className='absolute bottom-0 left-0 right-0 md:hidden
  p-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm
  flex flex-col items-start justify-end border-t border-gray-200 dark:border-gray-700'
      >
        <h3 className='text-base font-semibold text-gray-900 dark:text-gray-100'>
          {title}
        </h3>
        <p className='text-xs text-purple-600 dark:text-purple-400 mt-1 font-medium'>
          {tech}
        </p>
      </div>
    </motion.a>
  )
}
