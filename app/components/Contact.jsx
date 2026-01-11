'use client'

import { useState, useEffect } from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')
  const [isValid, setIsValid] = useState(false)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Update validity whenever form changes
  useEffect(() => {
    const { name, email, message } = form
    setIsValid(
      name.trim() !== '' &&
        message.trim() !== '' &&
        emailRegex.test(email.trim())
    )
  }, [form])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Final regex check
    if (!emailRegex.test(form.email.trim())) {
      setStatus('Please enter a valid email.')
      return
    }

    setLoading(true)
    setStatus('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('Message sent!')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('Failed to send message.')
      }
    } catch (err) {
      setStatus('Something went wrong.')
    }

    setLoading(false)
  }

  return (
    <section id='contact' className='mt-28 pb-24 scroll-mt-32'>
      <h2 className='text-3xl font-bold text-gray-900 dark:text-gray-100 text-center'>
        Get in Touch
      </h2>
      <p className='text-gray-600 dark:text-gray-400 mb-12 text-center'>
        Have a project in mind? Let&apos;s work together!
      </p>

      <div className='grid md:grid-cols-[30%,70%] gap-10 items-start'>
        {/* LEFT SIDE */}
        <div className='space-y-6'>
          <div className='p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-4 hover:shadow-md transition'>
            <FaEnvelope className='text-purple-600 dark:text-purple-400 text-xl' />
            <div>
              <strong className='text-gray-900 dark:text-gray-100'>Email</strong>
              <br />
              <span className='text-gray-600 dark:text-gray-300 text-sm'>
                jainnisha1314@gmail.com
              </span>
            </div>
          </div>

          <div className='p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-4 hover:shadow-md transition'>
            <FaPhoneAlt className='text-purple-600 dark:text-purple-400 text-xl' />
            <div>
              <strong className='text-gray-900 dark:text-gray-100'>Phone</strong>
              <br />
              <span className='text-gray-600 dark:text-gray-300 text-sm'>+91 8780777534</span>
            </div>
          </div>

          <div className='p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-4 hover:shadow-md transition'>
            <FaMapMarkerAlt className='text-purple-600 dark:text-purple-400 text-xl' />
            <div>
              <strong className='text-gray-900 dark:text-gray-100'>Location</strong>
              <br />
              <span className='text-gray-600 dark:text-gray-300 text-sm'>Surat, Gujarat</span>
            </div>
          </div>

          <div className='p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition'>
            <a
              href='https://linkedin.com/in/nishajaindev'
              target='_blank'
              className='text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold text-sm'
            >
              LinkedIn Profile →
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <form
          onSubmit={handleSubmit}
          className='p-8 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-5 shadow-sm'
        >
          <input
            placeholder='Your Name'
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className='p-3 rounded bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 w-full text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 outline-none'
            required
          />

          <input
            placeholder='Your Email'
            type='email'
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className='p-3 rounded bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 w-full text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 outline-none'
            required
          />

          <textarea
            rows='6'
            placeholder='Your Message'
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className='p-3 rounded bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 w-full text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 outline-none'
            required
          ></textarea>

          {/* SUBMIT BUTTON */}
          <button
            disabled={!isValid || loading}
            className={`px-6 py-3 rounded-full text-white font-semibold transition flex items-center justify-center gap-2
              ${
                isValid
                  ? 'bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600'
                  : 'bg-purple-300 dark:bg-purple-800 cursor-not-allowed'
              }`}
          >
            {loading ? (
              <span className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></span>
            ) : (
              'Send Message'
            )}
          </button>

          {status && <p className='text-gray-600 dark:text-gray-300 text-sm pt-2'>{status}</p>}
        </form>
      </div>
    </section>
  )
}
