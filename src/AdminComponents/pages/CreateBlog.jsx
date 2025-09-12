import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "../../components/Loader";

function CreateBlog() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false); // ✅ Loading state
  const selectedImage = watch("image");

  const onSubmit = async (data) => {
    setLoading(true); // start loading
    console.log("Blog Data:", data);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Blog submitted!");
    setLoading(false); // stop loading
    reset(); // Clear the form
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Create New Blog
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-4"
      >
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
            Title
          </label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog title"
          />
          {errors.title && (
            <span className="text-red-500 text-sm">{errors.title.message}</span>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
            Category
          </label>
          <input
            type="text"
            {...register("category", { required: "Category is required" })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Blog category"
          />
          {errors.category && (
            <span className="text-red-500 text-sm">{errors.category.message}</span>
          )}
        </div>

        {/* Tags */}
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
            Tags (comma separated)
          </label>
          <input
            type="text"
            {...register("tags")}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. React, Tailwind"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
            Content
          </label>
          <textarea
            {...register("content", { required: "Content is required" })}
            rows="6"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your blog content here..."
          ></textarea>
          {errors.content && (
            <span className="text-red-500 text-sm">{errors.content.message}</span>
          )}
        </div>

        {/* Image */}
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
            Image
          </label>
          <input
            type="file"
            {...register("image")}
            className="w-full"
            accept="image/*"
          />
          {selectedImage && selectedImage.length > 0 && (
            <p className="text-sm mt-1">{selectedImage[0].name}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center items-center gap-2 text-white px-6 py-2 rounded button-color transition-colors ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <>
              <Loader/>
              Submitting...
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
