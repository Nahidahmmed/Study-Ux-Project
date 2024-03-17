import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function SearchTab() {
  const tabs = [
    { id: 1, title: "Search for Blogs" },
    { id: 2, title: "Find an University" },
    { id: 3, title: "Pind a Scholarship" },
    { id: 4, title: "Events" },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("../../../public/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setSearchTerm(inputText);
    const filteredSuggestions =
      inputText !== ""
        ? blogs.filter((blog) =>
            blog.title.toLowerCase().startsWith(inputText.toLowerCase())
          )
        : [];

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (selectedBlog) => {
    setSearchTerm(selectedBlog.title);
  };

  return (
    <div className="text-black">
      <div className="flex bg-[#EEEDEB] rounded-t-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${
              activeTab.id === tab.id && "bg-white "
            } py-2 px-4 text-lg focus:outline-none w-36`}
            onClick={() => handleTabClick(tab)}
          >
            <p>{tab.title}</p>
          </button>
        ))}
      </div>
      <div className="mt-4 px-5 pt-5">
        {activeTab.id === 1 && (
          <div>
            <input
              type="text"
              name="search"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search Keywords"
              className="mt-2 pl-5 p-2 border-b border-gray-300 w-full focus:outline-none focus:border-blue-500 text-gray-400"
            />
            <FiSearch className="absolute top-[128px] left-3 text-xl text-gray-400" />

            {suggestions.length > 0 && (
              <ul className="text-lg mr-10 px-3 pt-3 bg-white rounded-b-xl">
                {suggestions.slice(0, 8).map((blog, index) => (
                  <li key={index} onClick={() => handleSuggestionClick(blog)}>
                    <Link
                      to={`/detail/${blog.id}`}
                      className="pb-2 text-gray-400"
                    >
                      {blog.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {activeTab.id === 2 && (
          <div>
            <input
              type="text"
              name="search"
              placeholder="University Name"
              className="mt-2 pl-5 p-2 border-b border-gray-300 w-full focus:outline-none focus:border-blue-500 text-gray-400"
            />
            <FiSearch className="absolute top-[128px] left-3 text-xl text-gray-400" />
          </div>
        )}
        {activeTab.id === 3 && (
           <div>
           <input
             type="text"
             name="search"
             placeholder="Select Study Level"
             className="mt-2 pl-5 p-2 border-b border-gray-300 w-full focus:outline-none focus:border-blue-500 text-gray-400"
           />
           <input
             type="text"
             name="search"
             placeholder="Select Destination Country"
             className="mt-2 pl-5 p-2 border-b border-gray-300 w-full focus:outline-none focus:border-blue-500 text-gray-400"
           />
           
         </div>
        )}
        {activeTab.id === 4 && (
           <div>
           <input
             type="text"
             name="search"
             placeholder="Search Keywords"
             className="mt-2 p-2 border-b border-gray-300 w-full focus:outline-none focus:border-blue-500 text-gray-400"
           />
           
         </div>
        )}
      </div>
    </div>
  );
}
