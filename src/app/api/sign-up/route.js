import InvitationModel from "@/app/models/InvitationModel";
import User from "@/app/models/userModel";
import connectToDb from "@/lib/connection";
import { generateInvitationCode } from "@/lib/helpers";
import { sendMail } from "@/lib/send-mail";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  // deserialize the request body to get the user data
  const { email, password, firstName, lastName, mobile } = await req.json();

  // validate the user data
  if (!email || !password || !firstName || !lastName || !mobile) {
    return Response.json({error: "Missing required fields- fullname or email or password or mobile "},{ status: 400 });
  }

  try {
    // store the user data in the database
    await connectToDb();
    const existingUser = await User.findOne({ email });
     // when the field in the db does no match the body from the request,
        //  we can use the field name in the db as the key and the value from the body as the value in the findOne method
        // const existingUser = await User.findOne({ userEmail:email });

    if (existingUser) {
      return Response.json({ error: "User already exists" }, { status: 400 });
    }

    if (!existingUser) {
      // hash the password before storing it in the database
      const salt = await bcrypt.genSaltSync(16);
      const hashedPassword = await bcrypt.hash(password, salt);

       const expiresAt= new Date( Date.now() +30 *60 *1000);
      // create new user instance
      const newUser = new User({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        mobile,
      });

      if (!newUser) {
        return Response.json(
          { error: "Failed to create user" },
          { status: 500 },
        );
      }

      //    send otp to the user email for verification
      const code = generateInvitationCode();

      await sendMail(email, code);

      await InvitationModel.create({
        createdFor: newUser._id,
        email: newUser.email,
        code,
        expiresAt
      });
      return Response.json({ message: "User created successfully", data: newUser }, { status: 201 });
    }
  } catch (error) {
    console.error("Error occurred while signing up:", error);
    return Response.json({ error: "Error occurred while signing up" },{ status: 500 });
  }
};
