
import { Resend } from 'resend';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
const formEmail = process.env.FORM_EMAIL;

export async function POST(request) {
  try {
    const { data, error } = await resend.emails.send({
      from: formEmail,
      to: 'rsrihariyadav@gmail.com',  // <-- replace with your email for testing
      subject: 'Hello from Portfolio',
      
    });

    if (error) {
      console.error(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (err) {
    console.error(err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}