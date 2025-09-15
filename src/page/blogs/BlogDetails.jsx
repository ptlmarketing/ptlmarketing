import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getDetailBlogsAPIService } from "../../service/apiService";
import Preloader from "../../components/PreLoader/Preloader";

function BlogDetails() {
  const { slug } = useParams();
  const [blogDetails, setBlogDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const getBlogDetails = async () => {
    try {
      setLoading(true); 
      const res = await getDetailBlogsAPIService(slug);
      setBlogDetails(res?.data);
    } catch (error) {
      console.error("Error fetching blog details:", error);
      setBlogDetails(null);
    }
    setLoading(false); 
  };

  useEffect(() => {
    if (slug) {
      getBlogDetails();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <Preloader />
      </div>
    );
  }
  if (!blogDetails) {
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
    <div className="min-h-screen px-6 lg:px-20 py-32 bg-gradient-to-b from-[#0c0101de] to-[#381802] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <img
            src={blogDetails.featuredImage}
            alt={blogDetails.title}
            className="w-full h-72 object-cover rounded-2xl mb-6"
          />
          <h1 className="text-4xl font-bold mb-6">{blogDetails.title}</h1>
          <p className="text-lg leading-relaxed">{blogDetails.content}</p>

          <Link
            to="/blog"
            className="mt-6 inline-block text-[#F97316] font-semibold hover:underline"
          >
            ← Back to Blogs
          </Link>
        </div>

        {/* Sidebar */}
        <aside className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-600 pb-2">
            Blog Info
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>
              <strong>Author:</strong> {blogDetails.author}
            </li>
            <li>
              <strong>Category:</strong> {blogDetails.category}
            </li>
            <li>
              <strong>Tags:</strong>{" "}
              {Array.isArray(blogDetails.tags)
                ? blogDetails.tags.join(", ")
                : blogDetails.tags}
            </li>
            <li>
              <strong>Views:</strong> {blogDetails.views}
            </li>
            <li>
              <strong>Published:</strong>{" "}
              {new Date(blogDetails.createdAt).toLocaleDateString()}
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default BlogDetails;
