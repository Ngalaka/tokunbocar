"use client";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import { IoCarSportOutline } from "react-icons/io5";

export default function CarSaleUpload() {
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

      // console.log("Cloud Name:", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);

      // console.log(
      //   "Upload Preset:",
      //   process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME,
      // );

      try {
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData,
        );

        uploadedImages.push(res.data.secure_url);
      } catch (error) {
        console.log("Cloudinary Error:");
        console.log(error.response?.data);
      }
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
        //   rooms: Number(data.rooms),
        //   bathrooms: Number(data.bathrooms),
        //   propertyType: data.propertyType,
        //   location:data.location,
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
      console.log("Cloudinary Error:", error.response?.data);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="w-full min-h-screen bg-gray-100  lg:w-full lg:h-auto lg:bg-transparent lg:px-0 lg:py-0 lg:mx-auto lg:p-6">
        <div className="w-full bg-white rounded-xl  p-4 lg:p-0 lg:w-200 lg:h-full lg:rounded-none lg:shadow-md m-auto">
          {/* Logo */}
          <div className="w-full lg:w-50 mx-auto flex flex-col items-center lg:items-start py-6">
            <h1 className="w-full text-center lg:text-left font-bold text-3xl lg:text-2xl text-blue-800">
              LAGOS
            </h1>

            <div className="w-full flex justify-center items-center gap-3">
              <span className="text-3xl lg:text-2xl text-blue-800">
                <IoCarSportOutline />
              </span>

              <span className="text-lg lg:text-xl lg:font-semibold text-blue-800">
                Used Car
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="w-full max-w-3xl mx-auto px-3 py-5 lg:p-6">
            <h1 className="text-2xl lg:text-3xl font-bold text-center lg:text-left mb-6">
              Car Sale Upload
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 lg:space-y-6"
            >
              {/* Used By */}
              <div>
                <label className="block mb-2 text-sm lg:text-base font-semibold">
                  Used By
                </label>

                <input
                  type="text"
                  placeholder="Enter Car used By"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("usedBy")}
                />
              </div>

              {/* Year

              <div>
                <label className="block mb-2 text-sm lg:text-base font-semibold">
                  Year
                </label>

                <input
                  type="text"
                  placeholder="Enter Car Year"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("year")}
                />
              </div> */}

              {/* Model */}

              {/* <div>
                <label className="block mb-2 text-sm lg:text-base font-semibold">
                  Modern
                </label>

                <input
                  type="text"
                  placeholder="Enter Car Model"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("modern")}
                />
              </div> */}

              {/* Body */}

              {/* <div>
                <label className="block mb-2 text-sm lg:text-base font-semibold">
                  Car Body
                </label>

                <input
                  type="text"
                  placeholder="Enter Car Body"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("body")}
                />
              </div> */}

              {/* Transmission */}

              {/* <div>
                <label className="block mb-2 text-sm lg:text-base font-semibold">
                  Transmission
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                  <label className="flex items-center gap-2 text-sm lg:text-base">
                    <input
                      type="radio"
                      value="manual"
                      {...register("transmission")}
                    />
                    Manual
                  </label>

                  <label className="flex items-center gap-2 text-sm lg:text-base">
                    <input
                      type="radio"
                      value="automatic"
                      {...register("transmission")}
                    />
                    Automatic
                  </label>

                  <label className="flex items-center gap-2 text-sm lg:text-base">
                    <input
                      type="radio"
                      value="electric"
                      {...register("transmission")}
                    />
                    Electric
                  </label>
                </div>
              </div> */}

              {/* Fuel */}

              {/* <div>
                <label className="block mb-2 text-sm lg:text-base font-semibold">
                  Fuel Type
                </label>

                <input
                  type="text"
                  placeholder="Enter Fuel"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("fuel")}
                />
              </div> */}

              {/* Price */}

              {/* <div>
                <label className="block mb-2 text-sm lg:text-base font-semibold">
                  Car Price
                </label>

                <input
                  type="text"
                  placeholder="Enter Price"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("price")}
                />
              </div> */}

              {/* Location */}

              {/* <div>
                <label className="block mb-2 text-sm lg:text-base font-semibold">
                  Location
                </label>

                <input
                  type="text"
                  placeholder="Enter Location"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("location")}
                />
              </div> */}

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

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white px-6 py-3 rounded-lg"
              >
                {loading ? "Uploading..." : "Upload Property"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
