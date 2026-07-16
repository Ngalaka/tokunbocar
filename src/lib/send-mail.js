
import nodemailer from "nodemailer";

// Function to send OTP via email using Nodemailer
export const sendMail = async (email, code) => {
  try {
    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service:"gmail",
      port: 562,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Beautiful HTML template
    const htmlTemplate = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2>Welcome to TokunboCar verification code</h2>
                <p>your code to verify your email is  .</p>
             
                <p>The Invitation Code:</p>
                <h3 style="background-color: #f0f0f0; padding: 15px; text-align: center;">
                ${code}
                </h3>
               
            </div>
              `;;

    // Mail options
    const mailOptions = {
      from:  process.env.EMAIL_ADDRESS,
      to: email,
      subject: "Your Invitation Code",
      html: htmlTemplate,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);

  } catch (error) {
    console.error("❌ Error sending email:", error);
  }

};
