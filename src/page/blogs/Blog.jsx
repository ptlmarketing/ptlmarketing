import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../AllServicesDataHere";
import blogsImage from "../../assets/blog.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Blog() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // animate once
      }, []);
  return (
    <>
      <div
        className="relative h-[70vh] md:min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url(${blogsImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
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

      <div className="min-h-screen px-2.5 md:px-20 py-12 bg-color">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500"
              data-aos="fade-up"
              data-aos-delay={blog.id * 250}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-[#F97316] font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
