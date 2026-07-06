import InvitationModel from "@/app/models/InvitationModel";
import User from "@/app/models/userModel";
import connectToDb from "@/lib/connection";

export const POST = async (req) => {
  try {
    const { email, code } = await req.json();

    if (!code || !email) {
      return Response.json({ message: "code is require" }, { status: 400 });
    }

    // call the connectToDB
    await connectToDb();

    // convert the code to upperCase
    const capitalizedCode = code.toUpperCase();
    console.log("CODE FROM REQUEST", capitalizedCode);

    const invitation = await InvitationModel.findOne({
      email,
      code: capitalizedCode,
      isUsed: false,
    });
    console.log("USER FROM DB",invitation);

    if (!invitation) {
      return Response.json(
        { message: "code invalid or email invalid" },
        { status: 400 },
      );
    }

    // check if code has expires

    if (invitation.expiresAt < Date.now()) {
      return Response.json({ message: "Code expired" }, { status: 400 });
    }
   invitation.isUsed = true;
await invitation.save();

    // verify user's email in the users table
    // const emailVerified=await User.findById(user.usedBy)
    // we willl use the email, because we do otp want make a lot of changes when we chnage the model schema

    const emailVerified = await User.findOne({ email });

    // verify user email
    emailVerified.isEmailVerified = true;
    await emailVerified.save();

    return Response.json({ message: "email verified" }, { status: 200 });
  } catch (error) {
    console.error("Error occurred while signing up:", error);
    return Response.json(
      { error: "Error occurred while signing up" },
      { status: 500 },
    );
  }
};
