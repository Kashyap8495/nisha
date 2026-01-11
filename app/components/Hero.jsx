'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import profileImage from '@/app/assets/images/profile-photo.jpeg'
import Counter from './Counter'

export default function Hero() {
  return (
    <section
      id='home'
      className='pt-32 pb-10 max-w-7xl mx-auto px-6 scroll-mt-32'
    >
      <div className='grid md:grid-cols-2 gap-10 items-center'>
        {/* LEFT SIDE */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-gray-100'
          >
            Hi, I'm <br />
            <span className='bg-gradient-to-r from-[#9b5cff] to-[#4ba3ff] bg-clip-text text-transparent'>
              Nisha Jain
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mt-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-lg'
          >
            As a Full Stack Developer with 1.7+ years of experience, I build scalable, high-performance web applications using React, Next.js, Node.js, and SQL-based databases. I have strong experience in real-time systems, automation, and REST/GraphQL APIs, along with developing reliable UI components that improve performance and user experience.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-5 w-full'
          >
            <a
              href='#contact'
              className='px-8 py-3 rounded-full bg-gradient-to-r from-[#9b5cff] to-[#4ba3ff]
               text-white font-medium text-lg shadow-lg
               hover:scale-105 transition text-center'
            >
              Get in Touch →
            </a>

            <a
              href='#work'
              className='px-8 py-3 rounded-full border-2 border-[#9b5cff]
               text-gray-700 dark:text-gray-300 font-medium text-lg bg-white dark:bg-gray-800
               hover:bg-gray-50 dark:hover:bg-gray-700 transition
               flex items-center justify-center gap-2 text-center'
            >
              View My Work <FiArrowRight />
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE — IMAGE WITH GLOW */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className='relative flex justify-center'
        >
          {/* Glow effect */}
          <div className='absolute w-[320px] h-[320px] rounded-full bg-gradient-to-br from-purple-100 to-blue-100 blur-[80px] opacity-60'></div>

          {/* Profile */}
          <div className='relative w-[260px] h-[260px] rounded-full overflow-hidden border-[6px] border-[#9b5cff] dark:border-purple-500 shadow-xl bg-white dark:bg-gray-800'>
            <Image
              src={profileImage}
              alt='Nisha Jain'
              fill
              className='object-cover'
            />
          </div>
        </motion.div>
      </div>

      {/* BOTTOM STATS */}
      <div className='grid md:grid-cols-4 gap-6 mt-16 text-center'>
        {[
          { num: 1.7, suffix: '+', label: 'Years Experience' },
          { num: 7, suffix: '+', label: 'Projects Completed' },
          { num: 2, suffix: '', label: 'Professional Roles' },
          { num: 100, suffix: '%', label: 'Quality Commitment' },
        ].map((item, i) => (
          <div
            key={i}
            className='p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition'
          >
            <div className='text-3xl font-bold text-[#9b5cff] dark:text-purple-400 flex justify-center'>
              <Counter end={item.num} />
              {item.suffix}
            </div>
            <div className='mt-2 text-gray-600 dark:text-gray-300'>{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
