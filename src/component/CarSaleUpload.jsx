"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCarSportOutline } from "react-icons/io5";

export default function PropertyForm() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + selectedImages.length > 7) {
      alert("Maximum of 7 images allowed");
      return;
    }

    setSelectedImages((prev) => [...prev, ...files]);

    const imagePreviews = files.map((file) => URL.createObjectURL(file));

    setPreviewImages((prev) => [...prev, ...imagePreviews]);
  };

  const removeImage = (index) => {
    const updatedFiles = [...selectedImages];
    updatedFiles.splice(index, 1);

    const updatedPreviews = [...previewImages];
    updatedPreviews.splice(index, 1);

    setSelectedImages(updatedFiles);
    setPreviewImages(updatedPreviews);
  };

  const uploadImagesToCloudinary = async () => {
    const uploadedImages = [];

    for (let image of selectedImages) {
      const formData = new FormData();

      formData.append("file", image);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME,
      );

      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData,
      );

      uploadedImages.push(res.data.secure_url);
    }

    return uploadedImages;
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      if (selectedImages.length === 0) {
        alert("Please select images");
        setLoading(false);
        return;
      }

      const imageUrls = await uploadImagesToCloudinary();

      const payload = {
        usedBy: data.usedBy,
        year: data.year,
        modern: data.modern,
        body: data.body,
        transmission: data.transmission,
        fuel: data.fuel,
        price: Number(data.price),
        location: data.location,
        images: imageUrls,
      };

      console.log("Payload to be sent to backend:", payload);

      //   const res = await axios.post("/api/properties", payload);

      //   if (res.status === 201) {
      //     alert("Property Uploaded Successfully");

      //     reset();

      //     setSelectedImages([]);
      //     setPreviewImages([]);
      //   }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full  lg:w-full h-auto  lg:mx-auto lg: p-6">
        <div className="w-full h-auto shadow-sm bg-white  lg:w-200 lg:h-full m-auto lg:shadow-xl ">
          <div className="w-full lg:w-50 mx-auto h-auto flex flex-col justify-start items-start text-center py-4">
            <h1 className="w-full font-bold text-2xl cursor-pointer py-2 px-12 text-blue-800 ">
              LAGOS
            </h1>

            <div className="w-full h-auto flex justify-center items-center gap-4">
              <span className=" text-2xl text-blue-800">
                <IoCarSportOutline />
              </span>
              <span className="text-center text-xl lg:text-center lg:font-semibold text-blue-800">
                {" "}
                Used Car
              </span>
            </div>
          </div>
          <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Car Sale Upload</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* ROOMS */}
              <div>
                <label className="block mb-2 font-medium">Used By</label>

                <input
                  type="text"
                  placeholder="Enter Car used By"
                  className="w-full border p-3 rounded-lg"
                  {...register("usedBy", {
                    required: "usedBy field is required",
                  })}
                />

                {errors.usedBy && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.usedBy.message}
                  </p>
                )}
              </div>

              {/* Year */}
              <div>
                <label className="block mb-2 font-medium">Year</label>

                <input
                  type="text"
                  placeholder="Enter Car year"
                  className="w-full border p-3 rounded-lg"
                  {...register("year", {
                    required: "Year field is required",
                  })}
                />

                {errors.year && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.year.message}
                  </p>
                )}
              </div>

              <div className="mt-3">
                <label className="block mb-2 font-medium">Modern</label>
                <input
                  type="text"
                  placeholder="Enter Car Modern"
                  className="w-full border p-3 rounded-lg"
                  {...register("modern", {
                    required: "Modern is required",
                  })}
                />

                {errors.modern && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.modern.message}
                  </p>
                )}
              </div>

              <div className="mt-3">
                <label className="block mb-2 font-medium">Car body</label>
                <input
                  type="text"
                  placeholder="Enter Car body "
                  className="w-full border p-3 rounded-lg"
                  {...register("body", {
                    required: "Car body is required",
                  })}
                />

                {errors.body && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.body.message}
                  </p>
                )}
              </div>

              {/* PROPERTY TYPE */}
              <div>
                <label className="block mb-2 font-medium">Transmission</label>

                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="manual"
                      {...register("transmission", {
                        required: "Select transmission type",
                      })}
                    />
                    Manual
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="automatic"
                      {...register("transmission", {
                        required: "Select Transmission type",
                      })}
                    />
                    Automatic
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="electric"
                      {...register("transmission", {
                        required: "Select Transmission type",
                      })}
                    />
                    Electric
                  </label>
                </div>

                {errors.transmission && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.transmission.message}
                  </p>
                )}
              </div>

              <div className="mt-3">
                <label className="block mb-2 font-medium">Fuel Type</label>
                <input
                  type="text"
                  placeholder="Enter Fuel"
                  className="w-full border p-3 rounded-lg"
                  {...register("fuel", {
                    required: "Fuel is required",
                  })}
                />

                {errors.fuel && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fuel.message}
                  </p>
                )}
              </div>

              <div className="mt-3">
                <label className="block mb-2 font-medium">Car price</label>
                <input
                  type="text"
                  placeholder="Enter Price"
                  className="w-full border p-3 rounded-lg"
                  {...register("price", {
                    required: "Price is required",
                  })}
                />

                {errors.price && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.price.message}
                  </p>
                )}
              </div>

              <div className="mt-3">
                <label className="block mb-2 font-medium">Location</label>
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-full border p-3 rounded-lg"
                  {...register("location", {
                    required: "Location is required",
                  })}
                />

                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.location.message}
                  </p>
                )}
              </div>

              {/* IMAGE INPUT */}
              <div>
                <label className="block mb-2 font-medium">Upload Images</label>

                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full border p-3 rounded-lg"
                />

                <p className="text-sm text-gray-500 mt-2">
                  Maximum of 7 images
                </p>
              </div>

              {/* IMAGE PREVIEW */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {previewImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-40 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />

                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white w-7 h-7 rounded-full"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-auto bg-blue-900 hover:bg-blue-400 transition-all duration-300 ease-in-out text-white px-6 py-3 rounded-lg"
              >
                {loading ? "Uploading..." : "Upload Car information"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
