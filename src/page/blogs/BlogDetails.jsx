import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../AllServicesDataHere";


function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blogs) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-2xl font-bold">Blog not found</h1>
        <Link to="/blog" className="mt-4 text-[#F97316]">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 lg:px-20 py-12 bg-gradient-to-b from-[#0c0101de] to-[#381802] text-white">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-72 object-cover rounded-2xl mb-6"
      />
      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
      <p className="text-lg leading-relaxed">{blog.content}</p>
      <Link
        to="/blog"
        className="mt-6 inline-block text-[#F97316] font-semibold hover:underline"
      >
        ← Back to Blogs
      </Link>
    </div>
  );
}

export default BlogDetails;
