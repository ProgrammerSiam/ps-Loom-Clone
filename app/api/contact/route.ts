import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method === "POST") {

    try {

    const {
      first_name,
      last_name,
      email,
      job_title,
      company_name,
      help,
      company_size,
      info,
    } = await req.json();


      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "tasicigor123@gmail.com",
          pass: "bwnnpzipkkvnnedx",
        },
      });

      const mailOptions = {
        from: email,
        to: "tasicigor123@gmail.com",
        subject: "Contact Form Submission",
        html: `
                    <h1>Contact Form</h1>
                    <p>First Name: ${first_name}</p>
                    <p>Last Name: ${last_name}</p>
                    <p>Email: ${email}</p>
                    <p>Job Title: ${job_title}</p>
                    <p>Company Name: ${company_name}</p>
                    <p>Help: ${help}</p>
                    <p>Company Size: ${company_size}</p>
                    <p>Info: ${info}</p>
                `,
      };

 
      await transporter.sendMail(mailOptions);

      return NextResponse.json("email has been sent");
    } catch (error) {
      return NextResponse.json("email has not been sent");
    }
  } else {
    return NextResponse.json('method not allowed');
  }

}