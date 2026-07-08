import User from "@/app/models/userModel";
import connectToDb from "@/lib/connection";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const POST = async (req) => {
  const { email, password } = await req.json();

  if (!email || !password) {
    return Response.json(
      { error: "Missing required fields email or password" },
      { status: 400 },
    );


  }
  try {
    // stablish database connection
    await connectToDb();

    // find the user email 
  
    const user = await User.findOne({email});
    // test the condition if user exist

    if(!user){
        return Response.json({error: "Invalid Email and Password"}, {status: 401})
    }

    // check if user email is verified

    if(!user.isEmailVerified){
        return Response.json({error: "verify your email before signing in"}, {status: 402})
    }
   
   // compare the provided password with the stored hashed password

   const isPasswordValid = bcrypt.compareSync(password, user.password)
//    
   if(!isPasswordValid){
            return Response.json({ error: "Invalid email or password", error: true}, { status: 403 })
        }
 

         // use jwt to generate a token for the user 
        // (optional, but recommended for session management)

        const token = jwt.sign(
            {
                userId: user._id,
                role: user.userRole,
                email: user.email
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
            // or use env
            
        )

         return Response.json({
            message: "Sign-in successful", 
            error:false,
            data: {
                token,
                userRole: user.userRole
            }
        }, { status: 200 })


  } catch (error) {
    console.error("SIGN_IN API ERROR:", error);
    if (error.response) {
      set;
    }
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
};
