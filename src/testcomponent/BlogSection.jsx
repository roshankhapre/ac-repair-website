import React from "react";

const BlogSection = () => {
  const blogs = [
    { title: "How to Save Energy with Your AC", date: "Feb 10, 2025" },
    { title: "5 Signs Your AC Needs Repair", date: "Jan 15, 2025" },
    { title: "Best AC Maintenance Tips", date: "Dec 20, 2024" },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          📰 Latest Blog Posts
        </h2>
        <ul className="space-y-4">
          {blogs.map((blog, index) => (
            <li key={index} className="bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-xl font-bold">{blog.title}</h3>
              <p className="text-gray-600">{blog.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogSection;
