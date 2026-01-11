import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'jainnisha1314@gmail.com', // your email
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}

// Dynamic experience and projects

// for the point 2 default is perfect
// abc123 ahow experience is 4 year next 5year and last 6 year and project list is same for now i'll change as per my requirement so

// for thar crate a array of object there is key is same with id and get all data from there
// year experience, projects, techstack,work experience, skills, project completed, personal role, banner description, personal detail

// for the now create a 4 object one default and given three others which are created by you and for now add the same detail only experience change that's it
