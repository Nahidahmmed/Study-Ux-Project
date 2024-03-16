import { useState } from 'react';

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const getDataForItem = (item) => {
    // Implement logic to fetch data for each item
    switch (item) {
      case "Study abroad":
        return { title: "Study abroad", content: "Data related to studying abroad" };
      case "What we do?":
        return { title: "What we do?", content: "Data related to what we do" };
      case "Destinations":
        return { title: "Destinations", content: "Data related to destinations" };
      case "Find a course":
        return { title: "Find a course", content: "Data related to finding a course" };
      case "Student Essential Services":
        return { title: "Student Essential Services", content: "Data related to essential services" };
      case "IELTS":
        return { title: "IELTS", content: "Data related to IELTS" };
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="bg-black h-16">
        <nav className="flex px-4 text-white mb-24 max-w-screen-xl mx-auto">
          <ul className="hidden items-center text-center gap-10 md:flex">
            <li
              onMouseEnter={() => setHoveredItem("Study abroad")}
              
              className="cursor-pointer px-5 py-2 h-16 text-xl flex items-center transition duration-300 ease-in-out hover:bg-orange-400 hover:text-white"
            >
              Study abroad
            </li>
            <li
              onMouseEnter={() => setHoveredItem("What we do?")}
              
              className="cursor-pointer px-5 py-2 h-16 text-xl flex items-center transition duration-300 ease-in-out hover:bg-orange-400 hover:text-white"
            >
              What we do?
            </li>
            <li
              onMouseEnter={() => setHoveredItem("Destinations")}
              
              className="cursor-pointer px-5 py-2 h-16 text-xl flex items-center transition duration-300 ease-in-out hover:bg-orange-400 hover:text-white"
            >
              Destinations
            </li>
            <li
              onMouseEnter={() => setHoveredItem("Find a course")}
              
              className="cursor-pointer px-5 py-2 h-16 text-xl flex items-center transition duration-300 ease-in-out hover:bg-orange-400 hover:text-white"
            >
              Find a course
            </li>
            <li
              onMouseEnter={() => setHoveredItem("Student Essential Services")}
              
              className="cursor-pointer px-5 py-2 h-16 text-xl flex items-center transition duration-300 ease-in-out hover:bg-orange-400 hover:text-white"
            >
              Student Essential Services
            </li>
            <li
              onMouseEnter={() => setHoveredItem("IELTS")}
              
              className="cursor-pointer px-5 py-2 h-16 text-xl flex items-center transition duration-300 ease-in-out hover:bg-orange-400 hover:text-white"
            >
              IELTS
            </li>
          </ul>
        </nav>
      </div>
      {hoveredItem && <Modal2 data={getDataForItem(hoveredItem)} />}
    </div>
  );
}

const Modal2 = ({ data }) => {
  return (
    <div className="fixed z-[100] flex items-center justify-center bg-black/20  duration-100 w-1/2">
      <div className="absolute max-w-md rounded-sm bg-white p-3 pb-5 text-center drop-shadow-2xl scale-1 opacity-1 duration-300">
        <svg  className="mx-auto mr-0 w-8 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#000"></path>
          </g>
        </svg>
        <h1 className="mb-2 text-xl font-semibold">{data.title}</h1>
        <p className="px-1 mb-3 text-sm opacity-80">{data.content}</p>
      </div>
    </div>
  );
};
