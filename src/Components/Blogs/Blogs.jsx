import { useEffect, useState } from "react";
import { FaAngleRight ,FaAngleLeft  } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;
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

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="w-full mx-auto my-[10%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentBlogs.map((blog) => (
          <Link to={`/detail/${blog._id}`} key={blog._id} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={blog.post.image} alt={blog.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{blog.title}</div>
              <p className="text-gray-700 text-base">{truncateDescription(blog.semiDescription)}</p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {blog.user.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={prevPage}
          className={`${
            currentPage === 1 ? "hidden" : ""
          } py-2 px-4 mr-2 rounded flex items-center`}
        >
          <FaAngleLeft className="mr-4"/>
          Previous
        </button>
        <nav>
          <ul className="flex list-none">
            {Array.from({ length: totalPages }).map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`${
                    currentPage === index + 1
                      ? "bg-blue-500 bg-opacity-40"
                      : "bg-gray-200 text-gray-800"
                  } py-2 px-4 mr-2 rounded`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={nextPage}
          className={`${
            currentPage === totalPages ? "hidden" : ""
          } py-2 px-4 ml-2 rounded flex items-center`}
        >
          Next
          <FaAngleRight className="ml-4" />
        </button>
      </div>
    </div>
  );
}
