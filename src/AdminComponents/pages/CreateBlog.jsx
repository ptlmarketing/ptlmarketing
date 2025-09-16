import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createBlogPostAPIService } from "../../service/apiService";
import Loader from "../../components/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      formData.append("author", data.author);
      formData.append("category", data.category);
      formData.append("content", data.content);
      formData.append("metaTitle", data.metaTitle);
      formData.append("metaDescription", data.metaDescription);
      formData.append(
        "tags",
        data.tags ? JSON.stringify(data.tags.split(",").map((t) => t.trim())) : "[]"
      );
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
      <ToastContainer position="top-right" autoClose={3000} />
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <Loader size={50} />
        </div>
      )}

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
            {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
          </div>

          {/* Author */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-200">Author</label>
            <input
              type="text"
              {...register("author", { required: "Author is required" })}
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-700 text-white border-gray-600 placeholder-gray-400"
              placeholder="Author name"
            />
            {errors.author && <span className="text-red-500 text-sm">{errors.author.message}</span>}
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
            {errors.category && <span className="text-red-500 text-sm">{errors.category.message}</span>}
          </div>

          {/* Meta Title */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-200">Meta Title</label>
            <input
              type="text"
              {...register("metaTitle", { required: "Meta Title is required" })}
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-700 text-white border-gray-600 placeholder-gray-400"
              placeholder="Meta title for SEO"
            />
            {errors.metaTitle && <span className="text-red-500 text-sm">{errors.metaTitle.message}</span>}
          </div>
        </div>

        {/* Meta Description */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-200">Meta Description</label>
          <textarea
            {...register("metaDescription", { required: "Meta Description is required" })}
            rows="3"
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-700 text-white border-gray-600 placeholder-gray-400"
            placeholder="Meta description for SEO"
          ></textarea>
          {errors.metaDescription && <span className="text-red-500 text-sm">{errors.metaDescription.message}</span>}
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
          {errors.content && <span className="text-red-500 text-sm">{errors.content.message}</span>}
        </div>

        {/* Tags */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-200">Tags (comma separated)</label>
          <input
            type="text"
            {...register("tags")}
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-700 text-white border-gray-600 placeholder-gray-400"
            placeholder="React, Tailwind"
          />
        </div>

        {/* Featured Image & Published */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-200">Featured Image</label>
            <input type="file" {...register("featuredImage")} accept="image/*" className="text-gray-200" />
            {selectedImage && selectedImage.length > 0 && (
              <p className="text-sm mt-1 text-gray-300">{selectedImage[0].name}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" {...register("published")} className="w-4 h-4 accent-blue-500" />
            <label className="font-medium text-gray-200">Published</label>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#F97316] text-white py-3 rounded-xl cursor-pointer hover:bg-[#d15d0a] transition-all font-semibold"
        >
          {loading ? <Loader /> : "Publish Blog"}
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
