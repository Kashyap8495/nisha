'use client'
import React from 'react'
import Image from 'next/image'
import { FiDownload, FiMail, FiMapPin } from 'react-icons/fi'

export default function Resume() {
  const projects = [
    {
      title: 'Foster Care',
      role: 'Fullstack (Next.js, Node.js)',
      desc: 'Platform to share resources & updates with current/former foster youth and resource parents.',
      url: 'https://gardenofhope.fosterkonnect.com',
    },
    {
      title: 'DCEWS',
      role: 'Fullstack (Next.js TS, Node.js)',
      desc: 'Live camera + temperature monitoring, real-time chat and WebSocket updates.',
      url: '#',
    },
    {
      title: 'Darlink',
      role: 'Frontend (React)',
      desc: 'AI companion chat experience with crypto payments and growth tracking.',
      url: 'https://www.darlink.ai',
    },
    {
      title: 'Finideas',
      role: 'Frontend (React)',
      desc: 'SEBI-registered investment advisor platform with payment integrations.',
      url: 'https://www.finideas.com',
    },
    {
      title: 'Vertelier',
      role: 'Fullstack (Next.js)',
      desc: 'Ecommerce for lab-grown fine jewelry with lifetime warranty and analytics.',
      url: 'https://www.vertelier.com',
    },
    {
      title: 'Lead Tree',
      role: 'Fullstack (Next.js)',
      desc: 'PWA for lead generation & nurturing with dashboard analytics.',
      url: 'https://lead-tree-frontend.vercel.app/dashboard',
    },
    {
      title: 'Girls First Finance',
      role: 'Frontend (React)',
      desc: 'Fintech super-app empowering young women with loans, budgeting & mentoring.',
      url: 'https://www.girlsfirstfinance.com',
    },
    {
      title: 'Code Red',
      role: 'Fullstack (Next.js TS)',
      desc: 'AI automation for Reddit engagement; uses Recharts for analytics.',
      url: 'https://red.clearanchor.co',
    },
    {
      title: 'Primex',
      role: 'Fullstack (Next.js TS)',
      desc: 'Internal dashboard for a news platform (PNN Digital).',
      url: 'https://dev.pnndigital.com',
    },
    {
      title: 'Architect Render',
      role: 'Fullstack (Next.js)',
      desc: 'Architectural showcase and rendering platform.',
      url: 'https://architect-render-git-new-ui-architectrender-s-team.vercel.app/',
    },
    {
      title: 'Money Atlas',
      role: 'Frontend (Next.js)',
      desc: 'Financial comparison platform with curated tools and guides.',
      url: 'https://www.moneyatlas.com',
    },
    {
      title: 'Troop Travel',
      role: 'Frontend (React)',
      desc: 'Meeting & event planning platform to shortlist and compare meeting options.',
      url: 'https://www.trooptravel.com',
    },
    {
      title: 'DayViewer',
      role: 'Frontend (React + TS)',
      desc: 'Online Calendar Planner & Organizer for daily planning and task management.',
      url: 'https://dayviewer.com',
    },
    {
      title: 'Rent Babe',
      role: 'Fullstack (Next.js)',
      desc: 'Social renting platform for companionship and experiences.',
      url: 'https://rentbabe.com/en/rent',
    },
    {
      title: 'Steer Health',
      role: 'Fullstack (Next.js)',
      desc: 'Patient experience management platform for healthcare providers.',
      url: 'https://steerhealth.io',
    },
    {
      title: 'Mega Millions Naija',
      role: 'Fullstack (Next.js)',
      desc: 'Platform for lottery access and prize delivery.',
      url: 'https://megamillionsnaija.com',
    },
  ]

  const skills = [
    { name: 'React', value: 90 },
    { name: 'Next.js', value: 88 },
    { name: 'TypeScript', value: 75 },
    { name: 'Node.js', value: 80 },
    { name: 'Tailwind CSS', value: 85 },
    { name: 'Postgres / MySQL / MongoDB', value: 72 },
  ]

  return (
    <div className='max-w-5xl mx-auto my-12 bg-gradient-to-br from-[#071023] to-[#0b1220] p-6 rounded-2xl text-gray-100 shadow-2xl print:bg-white print:text-black'>
      {/* Header */}
      <div className='flex items-center gap-6'>
        <div className='w-28 h-28 rounded-full overflow-hidden ring-4 ring-accent'>
          {/* Put your circular profile image at /public/profile.jpg */}
          <Image
            src='/profile.jpg'
            alt='Kashyap'
            width={112}
            height={112}
            className='object-cover'
          />
        </div>

        <div className='flex-1'>
          <h1 className='text-3xl font-extrabold'>Kashyap Patel</h1>
          <p className='text-gray-300 mt-1'>
            Fullstack Developer — Frontend specialist (React / Next.js)
          </p>

          <div className='mt-3 flex flex-wrap gap-4 items-center text-sm'>
            <a
              href='/Kashyap_Fullstack_CV.pdf'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 bg-accent text-black px-3 py-2 rounded-md shadow-md'
            >
              <FiDownload /> Download Resume
            </a>

            <div className='inline-flex items-center gap-2 text-sm text-gray-300'>
              <FiMail /> <span>patelkashyap134@gmail.com</span>
            </div>

            <div className='inline-flex items-center gap-2 text-sm text-gray-300'>
              <FiMapPin /> <span>Surat, Gujarat</span>
            </div>
          </div>
        </div>
      </div>

      {/* Layout */}
      <div className='mt-8 grid md:grid-cols-3 gap-8'>
        {/* Left column: Summary + Skills */}
        <div className='md:col-span-1 space-y-6'>
          <div className='p-4 bg-black/30 rounded-lg border border-white/6'>
            <h3 className='font-semibold text-lg mb-2'>Profile</h3>
            <p className='text-sm text-gray-300'>
              Full Stack Developer with ~3.5 years experience building scalable
              and maintainable web applications using modern tools like React,
              Next.js, Node.js and Tailwind. Passionate about clean UI,
              performant code and delivering delightful user experiences.
            </p>
          </div>

          <div className='p-4 bg-black/30 rounded-lg border border-white/6'>
            <h3 className='font-semibold text-lg mb-4'>Skills</h3>
            <div className='space-y-3'>
              {skills.map((s) => (
                <div key={s.name}>
                  <div className='flex justify-between text-sm mb-1'>
                    <span>{s.name}</span>
                    <span>{s.value}%</span>
                  </div>
                  <div className='h-2 bg-gray-800 rounded-full overflow-hidden'>
                    <div
                      className='h-2 bg-gradient-to-r from-primary to-accent'
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='p-4 bg-black/30 rounded-lg border border-white/6'>
            <h3 className='font-semibold text-lg mb-2'>Education</h3>
            <div className='text-sm text-gray-300'>
              B.Tech — Computer Engineering
              <br />
              (2017 — 2021)
            </div>
          </div>
        </div>

        {/* Right column: Experience / Projects */}
        <div className='md:col-span-2 space-y-6'>
          <div className='p-4 bg-black/20 rounded-lg border border-white/6'>
            <h3 className='font-semibold text-lg mb-4'>
              Professional Projects
            </h3>

            <div className='space-y-4'>
              {projects.map((p, idx) => (
                <div key={p.title} className='p-3 bg-black/10 rounded-md'>
                  <div className='flex items-start justify-between gap-4'>
                    <div className='text-left'>
                      <div className='flex items-center gap-3'>
                        <h4 className='font-semibold'>
                          {idx + 1}. {p.title}
                        </h4>
                        <span className='text-xs text-gray-400'>
                          — {p.role || p.tech}
                        </span>
                      </div>
                      <p className='text-sm text-gray-300 mt-1'>{p.desc}</p>
                    </div>

                    <div className='flex flex-col items-end gap-2'>
                      <a
                        href={p.url || p.link}
                        target='_blank'
                        rel='noreferrer'
                        className='text-xs px-3 py-1 bg-accent text-black rounded-full font-medium'
                      >
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='p-4 bg-black/20 rounded-lg border border-white/6'>
            <h3 className='font-semibold text-lg mb-3'>Experience Summary</h3>
            <ul className='list-disc list-inside text-sm text-gray-300 space-y-2'>
              <li>
                3.5+ years building front-end applications and fullstack
                features.
              </li>
              <li>
                Specialized in React, Next.js, Tailwind CSS and building
                production-ready UIs.
              </li>
              <li>
                Worked on realtime systems (WebSocket), payment integrations and
                analytics.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Print helper */}
      <style jsx>{`
        @media print {
          .print\\:bg-white {
            background: white !important;
          }
          .print\\:text-black {
            color: black !important;
          }
          a[href]:after {
            content: none !important;
          }
        }
      `}</style>
    </div>
  )
}
