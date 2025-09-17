import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogsImage from "../../assets/blog.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { getBlogsAPIService } from "../../service/apiService";
import Preloader from "../../components/PreLoader/Preloader";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loader, setLoader] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const blogsPerPage = 12; 

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const fetchBlogs = async (page = 1) => {
    try {
      setLoader(true);
      const res = await getBlogsAPIService(page, blogsPerPage);
      setBlogs(res.data || []);
      setCurrentPage(res.pagination.page);
      setTotalPages(res.pagination.pages);
    } catch (error) {
      console.error("Error fetching blog:", error);
      setBlogs([]);
    }
    setLoader(false);
  };

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage]);

  if (loader) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <Preloader />
      </div>
    );
  }

  return (
    <>
      {/* Banner */}
      <div
        className="relative h-[70vh] md:min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url(${blogsImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-3xl text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold" data-aos="fade-up">
            Our Latest Blogs
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Insights, Strategies & Trends to Help Your Business Grow Online 🚀
          </p>
        </div>
      </div>

      {/* Blogs */}
      {blogs.length === 0 ? (
        <div className="min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-bold">Blog not found</h1>
          <Link to="/blog" className="mt-4 text-[#F97316]">
            Go Back
          </Link>
        </div>
      ) : (
        <div className="min-h-screen px-2.5 md:px-20 py-12 bg-color">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500 hover:border hover:border-[#F97316]"
                data-aos="fade-up"
              >
                <img
                  src={item.featuredImage}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.content}</p>
                  <Link
                    to={`/blog/${item.slug}`}
                    className="text-[#F97316] font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10 space-x-2">
              <button
                disabled={currentPage === 1}
                onClick={() => fetchBlogs(currentPage - 1)}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => fetchBlogs(index + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === index + 1
                      ? "bg-[#F97316] text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => fetchBlogs(currentPage + 1)}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Blog;
