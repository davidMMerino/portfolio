import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios.' });
    }

    try {
      // Configurar el transportador de Nodemailer
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Crear el correo electrónico
      const mailOptions = {
        from: `"Formulario de Contacto" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, // Tu correo
        subject: 'Nuevo mensaje desde el formulario de contacto',
        text: `Has recibido un nuevo mensaje.\n\nNombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
      };

      // Enviar el correo
      await transporter.sendMail(mailOptions);

      res.status(200).json({ success: true, message: 'Mensaje enviado correctamente.' });
    } catch (error) {
      console.error('Error enviando el correo:', error);
      res.status(500).json({ success: false, message: 'Hubo un error al enviar el mensaje.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ success: false, message: 'Método no permitido.' });
  }
}
