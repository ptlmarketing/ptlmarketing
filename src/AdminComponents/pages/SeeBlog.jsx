import React from "react";

function SeeBlog({ blogs }) {
  // Example blogs if none are passed
  const defaultBlogs = [
    {
      id: 1,
      title: "Sample Blog 1",
      author: "Amit Maurya",
      category: "React",
      tags: "React, Tailwind",
      content: "This is a sample blog content 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/400x200.png?text=Blog+1",
    },
    {
      id: 2,
      title: "Sample Blog 2",
      author: "Sara Khan",
      category: "JavaScript",
      tags: "JS, Web",
      content: "This is a sample blog content 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/400x200.png?text=Blog+2",
    },
    {
      id: 3,
      title: "Sample Blog 3",
      author: "John Doe",
      category: "CSS",
      tags: "CSS, Design",
      content: "This is a sample blog content 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/400x200.png?text=Blog+3",
    },
    {
      id: 4,
      title: "Sample Blog 4",
      author: "Jane Smith",
      category: "HTML",
      tags: "HTML, Layout",
      content: "This is a sample blog content 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/400x200.png?text=Blog+4",
    },
  ];

  const displayBlogs = blogs || defaultBlogs;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
        Latest Blogs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {displayBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-xl shadow-lg p-4 border border-white/20 dark:border-gray-700/20 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full rounded-lg mb-4 shadow-md"
              />
            )}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {blog.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              <span className="font-semibold">Author:</span> {blog.author}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              <span className="font-semibold">Category:</span> {blog.category}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              <span className="font-semibold">Tags:</span> {blog.tags}
            </p>
            <p className="text-gray-700 dark:text-gray-200 text-sm mt-auto mb-2">
              {blog.content.length > 80
                ? blog.content.slice(0, 80) + "..."
                : blog.content}
            </p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition-colors">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeeBlog;
