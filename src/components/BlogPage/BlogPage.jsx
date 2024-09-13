import React from "react";
import blogs from "./BlogPageData.json";
import BlogCard from "../BlogCard/BlogCard";

function BlogPage() {
  const blogsList = blogs.blogs;

  // const getBlogsRow = (blogRow) => {
  //   let content = [];
  //   for (let blog of blogRow) {
  //     content.push(
  //       <div className="col-lg-4" key={blog.id}>
  //         <BlogCard
  //           key={blog.id}
  //           id={blog.id}
  //           path={blog.path}
  //           image={blog.image}
  //           title={blog.title}
  //           text={blog.text}
  //         />
  //       </div>
  //     );
  //   }
  //   return content;
  // };

  // const getBlogs = (blogs) => {
  //   let content = [];
  //   for (let i = 0; i < blogs.length / 3; i++) {
  //     const startIndex = i * 3;
  //     const endIndex = (i + 1) * 3 <= blogs.length ? (i + 1) * 3 : blogs.length;
  //     const blogsSlice = blogs.slice(startIndex, endIndex);
  //     content.push(
  //       <div className="row" key={startIndex}>
  //         getBlogsRow(blogsSlice)
  //       </div>
  //     );
  //   }
  //   return content;
  // };

  return (
    <div className="card-deck blog-page cards-container-new">
      {blogsList.map((blog) => (
        <BlogCard
          key={blog.id}
          id={blog.id}
          path={blog.path}
          image={blog.image}
          title={blog.title}
          text={blog.text}
        />
      ))}
    </div>
  );
}

export default BlogPage;
