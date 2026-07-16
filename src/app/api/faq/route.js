import Faq from "@/app/models/faqModel";
import connectToDb from "@/lib/connection";

export const POST = async (req) => {
  // destructure the request body to get the user data
  const { question, answer, } = await req.json();

  if (!question || !answer ) {
    return Response.json(
      { error: "Missing required fields- Question or Answer" },{ status: 400 });
  }
  try {
     
    await connectToDb();

    const existingQuestion = await Faq.findOne({
      question,
    });

    console.log("Existing Question:", existingQuestion);

    if (existingQuestion) {
      return Response.json(
        {
          error: "Question already exists.",
        },
        { status: 409 }
      );
    }

    const newFaq = await Faq.create({
      question,
      answer,
    });

    return Response.json(
      {
      
        error: "FAQ created successfully.",
        data: newFaq,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/faq:", error);

    return Response.json(
      {
        error: "Internal Server Error.",
        error: error.message,
      },
      { status: 500 }
    );
  }
};