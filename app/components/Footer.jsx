import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='pt-16 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-12 px-6'>
        {/* Brand Section */}
        <div>
          <h3 className='text-2xl font-bold bg-gradient-to-r from-[#9b5cff] to-[#4ba3ff] text-transparent bg-clip-text'>
            Nisha Jain
          </h3>

          <p className='mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed'>
            Full Stack Developer specializing in React, Next.js, Node.js, and scalable architectures. Passionate about creating robust, high-performance applications.
          </p>

          {/* Social Icons */}
          <div className='flex gap-4 mt-4 text-xl'>
            <a
              href='https://linkedin.com/in/nishajaindev'
              target='_blank'
              className='hover:text-purple-600 dark:hover:text-purple-400 transition text-gray-600 dark:text-gray-400'
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4'>
            Quick Links
          </h3>

          <ul className='space-y-3 text-sm'>
            <li>
              <a href='#home' className='hover:text-purple-600 dark:hover:text-purple-400 text-gray-600 dark:text-gray-400 transition'>
                Home
              </a>
            </li>
            <li>
              <a href='#services' className='hover:text-purple-600 dark:hover:text-purple-400 text-gray-600 dark:text-gray-400 transition'>
                Services
              </a>
            </li>
            <li>
              <a href='#skills' className='hover:text-purple-600 dark:hover:text-purple-400 text-gray-600 dark:text-gray-400 transition'>
                Skills
              </a>
            </li>
            <li>
              <a href='#resume' className='hover:text-purple-600 dark:hover:text-purple-400 text-gray-600 dark:text-gray-400 transition'>
                Resume
              </a>
            </li>
            <li>
              <a href='#technology' className='hover:text-purple-600 dark:hover:text-purple-400 text-gray-600 dark:text-gray-400 transition'>
                Technology
              </a>
            </li>
            <li>
              <a href='#work' className='hover:text-purple-600 dark:hover:text-purple-400 text-gray-600 dark:text-gray-400 transition'>
                Work
              </a>
            </li>
            <li>
              <a href='#contact' className='hover:text-purple-600 dark:hover:text-purple-400 text-gray-600 dark:text-gray-400 transition'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4'>
            Contact
          </h3>

          <ul className='space-y-3 text-sm text-gray-600 dark:text-gray-400'>
            <li>
              <strong>Email:</strong> jainnisha1314@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91 8780777534
            </li>
            <li>
              <strong>Location:</strong> Surat, Gujarat
            </li>
            <li>
              <a
                href='https://linkedin.com/in/nishajaindev'
                target='_blank'
                className='text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition'
              >
                LinkedIn Profile →
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-200 dark:border-gray-800 mt-12 py-6'>
        <p className='text-center text-sm text-gray-500 dark:text-gray-400'>
          © {new Date().getFullYear()} Nisha Jain. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
