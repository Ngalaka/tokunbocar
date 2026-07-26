import CarsaleModel from "@/app/models/CarsaleModel";
import connectToDb from "@/lib/connection";
import { authorizeRoles } from "@/lib/verify-roles";
import { authenticateRequest } from "@/lib/verify-token";

export const POST = async (req) => {
  const authHeader = req.headers.get("authorization");

  console.log("Authorization Header:", authHeader);

  // check for authentication
  const authResult = authenticateRequest(req);
  console.log("Authentication result:", authResult);
  if (authResult.error) {
    return authResult.error;
  }

  // check if the user is an admin or seller
  const roleResult = authorizeRoles(authResult, ["admin", "seller"]);
  if (roleResult) {
    return roleResult;
  }

  // Handle POST request
  // destructure the request body to get the property details
  const {
    usedBy,
    year,
    modern,
    featuredCar,
    body,
    transmission,
    fuel,
    price,
    location,
    carsaleImages,
  } = await req.json();

  console.log("POST request received with data:", req.body);

  //   validate the input data
  if (
    !usedBy ||
    !year ||
    !modern ||
    !body ||
    !transmission ||
    !fuel ||
    !price ||
    !location ||
    !carsaleImages
  ) {
    return Response.json(
      { message: "All fields are required" },
      { status: 400 },
    );
  }
  try {
    // call databse connection
    await connectToDb();
    const newcarSale = await CarsaleModel.create({
      listedBy: authResult.userId,
      usedBy,
      year,
      featuredCar: featuredCar || false, // default to false if not provided
      modern,
      body,
      transmission,
      fuel,
      price,
      location,
      carsaleImages,
     userId: decoded.userId,
    });

    if (!newcarSale) {
      return Response.json(
        {
          error: true,
          message: "Failed to create Car sale",
        },
        { status: 400 },
      );
    }

    return Response.json(
      {
        error: false,
        message: "Car Sale Created successfully",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("Error creating Car Sale:", error);
    return Response.json(
      {
        message: "Failed to create Car Sale",
        error: error.message,
      },
      { status: 500 },
    );
  }
};

// GET request handler to fetch all properties from the database
export const GET = async (req, res) => {
  // check for authentication
  const authResult = authenticateRequest(req);
  console.log("Authentication result:", authResult);
  if (authResult.error) {
    return authResult.error;
  }

  // check if the user is an admin or seller
  const roleResult = authorizeRoles(authResult, ["admin", "seller"]);
  if (roleResult) {
    return roleResult;
  }

  try {
    await connectToDb();

    // fetch all properties with status "approved",
    // populate the listedBy field with the user's first name and
    // email, and sort by creation date in descending order
    const carsale = await CarsaleModel.find()
      .populate("listedBy", "firstName email -_id")
      .sort({ createdAt: -1 });
    return Response.json({ carsale }, { status: 200 });
  } catch (error) {
    console.error("Error fetching cars sale:", error);
    return Response.json(
      { message: "Failed to fetch cars sale" },
      { status: 500 },
    );
  }
};
