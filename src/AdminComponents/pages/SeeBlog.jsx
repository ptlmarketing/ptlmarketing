import React, { useEffect, useState } from "react";
import {
  deleteBlogPostAPIService,
  getBlogsAPIService,
  updateBlogPostAPIService, // 👈 ye API service banani hogi
} from "../../service/apiService";
import { FaEye, FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";

function SeeBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [editBlog, setEditBlog] = useState(null); // 👈 edit ke liye state

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

  // Handlers
  const handleRead = (blog) => setSelectedBlog(blog);
  const handleCloseModal = () => setSelectedBlog(null);

  const handleEdit = (blog) => setEditBlog(blog);
  const handleCloseEdit = () => setEditBlog(null);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;
    try {
      setLoading(true);
      const res = await deleteBlogPostAPIService(id);
      if (res?.message) {
        toast.success(res.message);
        setBlogs((prev) => prev.filter((blog) => blog.id !== id));
      } else {
        toast.error("Failed to delete the blog.");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Something went wrong while deleting the blog.");
    } finally {
      setLoading(false);
    }
  };

  // 👇 Blog update
  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await updateBlogPostAPIService(editBlog.id, editBlog); // API call
      console.log(res)
      if (res?.success) {
        toast.success(res?.message);
        setBlogs((prev) =>
          prev.map((b) => (b.id === editBlog.id ? editBlog : b))
        );
        handleCloseEdit();
      } else {
        toast.error("Failed to update the blog.");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Something went wrong while updating the blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto relative">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
        Latest Blogs
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader size={50} />
        </div>
      ) : blogs.length === 0 ? (
        <div className="text-center text-gray-600 dark:text-gray-300 mt-20 text-xl">
          No blogs found.
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
              <p className="text-gray-700 dark:text-gray-200 text-sm mt-auto mb-2 line-clamp-2">
                {blog.content.length > 80
                  ? blog.content.slice(0, 80) + "..."
                  : blog.content}
              </p>

              <div className="flex justify-between mt-3">
                <button
                  onClick={() => handleRead(blog)}
                  className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors text-sm cursor-pointer"
                >
                  <FaEye /> Read
                </button>
                <button
                  onClick={() => handleEdit(blog)}
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

      {/* View Blog Modal */}
      {selectedBlog && (
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 bg-[#000000b9] bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              ✖
            </button>
            {selectedBlog.image && (
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full object-cover rounded mb-4"
              />
            )}
            <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
              {selectedBlog.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <span className="font-semibold">Author:</span> {selectedBlog.author}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <span className="font-semibold">Category:</span>{" "}
              {selectedBlog.category}
            </p>
            <p className="text-gray-700 dark:text-gray-200 whitespace-pre-line">
              {selectedBlog.content}
            </p>
          </div>
        </div>
      )}

      {/* Edit Blog Modal */}
      {editBlog && (
        <div
          onClick={handleCloseEdit}
          className="fixed inset-0 bg-[#000000b9] bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseEdit}
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              ✖
            </button>

            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Edit Blog
            </h3>

            <form onSubmit={handleUpdateBlog} className="space-y-4">
              <input
                type="text"
                value={editBlog.title}
                onChange={(e) =>
                  setEditBlog({ ...editBlog, title: e.target.value })
                }
                className="w-full border rounded p-2"
                placeholder="Title"
              />
              <input
                type="text"
                value={editBlog.category}
                onChange={(e) =>
                  setEditBlog({ ...editBlog, category: e.target.value })
                }
                className="w-full border rounded p-2"
                placeholder="Category"
              />
              <textarea
                value={editBlog.content}
                onChange={(e) =>
                  setEditBlog({ ...editBlog, content: e.target.value })
                }
                className="w-full border rounded p-2 h-40"
                placeholder="Content"
              ></textarea>

              <button
                type="submit"
                className="bg-[#F97316] text-white px-4 py-2 rounded hover:bg-[#d15d0a] cursor-pointer"
              >
                Update Blog
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SeeBlog;
