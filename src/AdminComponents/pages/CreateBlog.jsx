import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createBlogPostAPIService } from "../../service/apiService";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";

function CreateBlog() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const selectedImage = watch("featuredImage");

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("category", data.category);
      formData.append("content", data.content);
      formData.append("published", data.published || false);
      if (data.featuredImage && data.featuredImage[0]) {
        formData.append("featuredImage", data.featuredImage[0]);
      }

      const res = await createBlogPostAPIService(formData);
      console.log("Blog created:", res);
      toast.success("Blog created successfully!");
      reset();
    } catch (error) {
      console.error("Error creating blog:", error);
      toast.error("Failed to create blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-800/90 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-3xl space-y-6 border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-gray-100 text-center mb-4">
          Create New Blog
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-200">Title</label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-700 text-white border-gray-600 placeholder-gray-400"
              placeholder="Enter blog title"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>
          {/* Category */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-200">Category</label>
            <input
              type="text"
              {...register("category", { required: "Category is required" })}
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-700 text-white border-gray-600 placeholder-gray-400"
              placeholder="Category"
            />
            {errors.category && (
              <span className="text-red-500 text-sm">
                {errors.category.message}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-200">Content</label>
          <textarea
            {...register("content", { required: "Content is required" })}
            rows="6"
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-700 text-white border-gray-600 placeholder-gray-400"
            placeholder="Write your blog content here..."
          ></textarea>
          {errors.content && (
            <span className="text-red-500 text-sm">
              {errors.content.message}
            </span>
          )}
        </div>
        {/* Featured Image & Published */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-200">
              Featured Image
            </label>
            <input
              type="file"
              {...register("featuredImage")}
              accept="image/*"
              className="text-gray-200"
            />
            {selectedImage && selectedImage.length > 0 && (
              <p className="text-sm mt-1 text-gray-300">
                {selectedImage[0].name}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register("published")}
              className="w-4 h-4 accent-blue-500"
            />
            <label className="font-medium text-gray-200">Published</label>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center items-center gap-2 py-3 rounded-xl font-semibold transition-all 
    ${
      loading
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-[#F97316] hover:bg-[#d15d0a] text-white cursor-pointer"
    }`}
        >
          {loading ? (
            <>
              <Loader />
              <span>Blog Publishing...</span>
            </>
          ) : (
            "Publish Blog"
          )}
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
