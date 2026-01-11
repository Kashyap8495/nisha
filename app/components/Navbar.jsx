'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaBolt } from 'react-icons/fa'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '@/app/context/ThemeContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className='fixed w-full z-40 backdrop-blur-md bg-white/95 dark:bg-gray-900/95 border-b border-gray-200 dark:border-gray-700 shadow-sm'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        <Link
          href='#home'
          className='flex items-center gap-2.5 font-extrabold text-2xl tracking-wide cursor-pointer group'
        >
          <span
            className='w-3 h-3 rounded-full bg-gradient-to-br from-[#9b5cff] to-[#4ba3ff]
                  shadow-[0_0_12px_rgba(155,92,255,0.5)] group-hover:scale-125 transition-transform'
          />

          <span
            className='bg-gradient-to-r from-[#9b5cff] to-[#4ba3ff] bg-clip-text text-transparent
                  drop-shadow-md group-hover:tracking-widest transition-all duration-300'
          >
            Nisha
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-6 items-center text-sm text-gray-700 dark:text-gray-300'>
          <a href='#home' className='hover:text-purple-600 dark:hover:text-purple-400 transition font-medium'>
            Home
          </a>
          <a href='#services' className='hover:text-purple-600 dark:hover:text-purple-400 transition font-medium'>
            Services
          </a>
          <a href='#skills' className='hover:text-purple-600 dark:hover:text-purple-400 transition font-medium'>
            Skills
          </a>
          <a href='#resume' className='hover:text-purple-600 dark:hover:text-purple-400 transition font-medium'>
            Resume
          </a>
          <a href='#technology' className='hover:text-purple-600 dark:hover:text-purple-400 transition font-medium'>
            Technology
          </a>
          <a href='#work' className='hover:text-purple-600 dark:hover:text-purple-400 transition font-medium'>
            Work
          </a>
          <a href='#contact' className='hover:text-purple-600 dark:hover:text-purple-400 transition font-medium'>
            Contact
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-gray-700 dark:text-gray-300'
            aria-label='Toggle theme'
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className='md:hidden flex items-center gap-3'>
          <button
            onClick={toggleTheme}
            className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-gray-700 dark:text-gray-300'
            aria-label='Toggle theme'
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
          <button
            className='text-gray-700 dark:text-gray-300'
            onClick={() => setOpen(!open)}
            aria-label='menu'
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='md:hidden px-6 pb-6 space-y-3 text-sm bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700'>
          <a href='#services' className='block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium'>
            Services
          </a>
          <a href='#skills' className='block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium'>
            Skills
          </a>
          <a href='#technology' className='block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium'>
            Technology
          </a>
          <a href='#work' className='block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium'>
            Work
          </a>
          <a href='#contact' className='block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium'>
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}
