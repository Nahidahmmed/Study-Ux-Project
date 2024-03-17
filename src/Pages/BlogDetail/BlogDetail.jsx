import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const { id } = useParams(); // Extracting the id from the URL parameters
  const [blogs, setBlogs] = useState([]);
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    fetch("../../../public/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  useEffect(() => {
    const foundBlog = blogs.find((blog) => blog.id === parseInt(id));
    if (foundBlog) {
      setBlogData(foundBlog);
    } else {
      setBlogData(null);
    }
  }, [id, blogs]);
  console.log(blogData);
  return (
    <div className="max-w-screen-xl mx-auto h-screen">
      <div className="flex w-full mt-28">
        {/* blogs */}
        <div className="w-[60%] p-5  text-2xl">
          <p className="uppercase font-bold text-base text-red-500">{blogData?.type}</p>
          <p className="text-5xl font-bold my-2">{blogData?.title}</p>
          <p className="text-2xl my-5">{blogData?.semiDescription}</p>
          <div className="flex items-center my-5">
            <img
              className="w-14 border-4 rounded-full"
              src={blogData?.user.image}
              alt=""
            />
            <p className="mx-5 text-xl">By <span className="font-bold">{blogData?.user.name}</span></p>
            <p className="mx-5 text-xl">{blogData?.postingDate}</p>
          </div>
          <img className="my-10" src={blogData?.post.image} alt="" />
          <p>{blogData?.post.description}</p>
          <p className="my-10">Here's What's trending in {blogData?.type} his month</p>
          <p className="text-4xl font-semibold mb-10">1. {blogData?.article.title}</p>
          <p>{blogData?.article.description}</p>
          <img className="my-10" src={blogData?.articleImage} alt="" />
          <p>{blogData?.semiDescription}</p>
          <p className="text-4xl font-bold my-10">Conclusion</p>
          <p>{blogData?.conclusion}</p>
        </div>
        {/* form */}
        <div className="w-[40%]"></div>
      </div>
    </div>
  );
}
