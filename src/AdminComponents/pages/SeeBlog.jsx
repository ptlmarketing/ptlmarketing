import React, { useEffect, useState } from "react";
import { getBlogsAPIService } from "../../service/apiService";
import { FaEye, FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import Loader from "../../components/Loader";

function SeeBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null); // For modal

  const getAllBlogPost = async () => {
    try {
      setLoading(true);
      const res = await getBlogsAPIService();
      if (res?.data) {
        const formattedBlogs = res.data.map((blog) => ({
          id: blog._id,
          title: blog.title,
          author: blog.author,
          category: blog.category,
          tags: blog.tags.length ? JSON.parse(blog.tags[0]) : [],
          content: blog.content,
          image: blog.featuredImage,
        }));
        setBlogs(formattedBlogs);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBlogPost();
  }, []);

  // Button Handlers
  const handleRead = (blog) => setSelectedBlog(blog);
  const handleCloseModal = () => setSelectedBlog(null);
  const handleEdit = (id) => console.log("Edit blog", id);
  const handleDelete = (id) => console.log("Delete blog", id);

  return (
    <div className="p-6 max-w-7xl mx-auto relative">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
        Latest Blogs
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader size={50} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-xl shadow-lg p-4 border border-white/20 dark:border-gray-700/20 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[200px] rounded-lg mb-4 shadow-md"
                />
              )}
              <h3 className="line-clamp-1 font-semibold text-gray-800 dark:text-white mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                <span className="font-semibold">Author:</span> {blog.author}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                <span className="font-semibold">Category:</span> {blog.category}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                <span className="font-semibold">Tags:</span>
                {blog.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-1 text-gray-400 text-xs">
                    {tag}
                  </span>
                ))}
              </p>
              <p className="text-gray-700 dark:text-gray-200 text-sm mt-auto mb-2 line-clamp-2">
                {blog.content.length > 80
                  ? blog.content.slice(0, 80) + "..."
                  : blog.content}
              </p>

              {/* Action Buttons */}
              <div className="flex justify-between mt-3">
                <button
                  onClick={() => handleRead(blog)}
                  className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors text-sm cursor-pointer"
                >
                  <FaEye /> Read
                </button>
                <button
                  onClick={() => handleEdit(blog.id)}
                  className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition-colors text-sm cursor-pointer"
                >
                  <FaEdit /> Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors text-sm cursor-pointer"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedBlog && (
        <div
          onClick={handleCloseModal}
          className=" fixed inset-0 bg-[#000000b9] bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <FaTimes size={20} />
            </button>
            {selectedBlog.image && (
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-64 object-cover rounded mb-4"
              />
            )}
            <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
              {selectedBlog.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <span className="font-semibold">Author:</span>{" "}
              {selectedBlog.author}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <span className="font-semibold">Category:</span>{" "}
              {selectedBlog.category}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              <span className="font-semibold">Tags:</span>
              {selectedBlog.tags.map((tag, idx) => (
                <span key={idx} className="px-2 py-1 text-gray-400 text-xs">
                  {tag}
                </span>
              ))}
            </p>
            <p className="text-gray-700 dark:text-gray-200">
              {selectedBlog.content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SeeBlog;
