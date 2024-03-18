import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  

  useEffect(() => {
    fetch("https://study-ux-server.vercel.app/blogs")
    .then((res) => res.json())
    .then((data) => {
      setBlogs(data);
    });
  }, []);

  const truncateDescription = (description) => {
    if (description.split(" ").length > 15) {
      return description.split(" ").slice(0, 15).join(" ") + "...";
    } else {
      return description;
    }
  };

  return (
    <div className="w-full mx-auto my-[10%]">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <Link to={`/detail/${blog._id}`} key={blog._id} className="w-[300px]">
            <img className="h-[200px]  rounded-xl" src={blog.post.image} alt="" />
            <p className="text-xl font-bold my-5 flex items-center h-10">{blog.title}</p>
            <p className="text-lg">{truncateDescription(blog.semiDescription)}</p>
            <p className="text-lg my-5">By <span className="font-bold">{blog.user.name}</span></p>
          </Link>
        ))}
      </div>
    </div>
  );
}
