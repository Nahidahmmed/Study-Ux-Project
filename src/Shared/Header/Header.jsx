import { useState } from 'react';
import { FaTimes } from "react-icons/fa";
export default function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
    setShowModal(true); 
  };

  return (
    <div>
      <div className="bg-black h-16">
        <nav className="flex px-4 text-white mb-24 max-w-screen-xl mx-auto">
          <ul className="hidden items-center text-center gap-10 md:flex">
            <li
              onMouseEnter={() => handleMouseEnter("Study abroad")}

              className="cursor-pointer px-5 py-2 h-16 text-xl flex items-center transition duration-300 ease-in-out hover:bg-orange-400 hover:text-white"
            >
              Study abroad
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("What we do?")}

              className="cursor-pointer px-5 py-2 h-16 text-xl flex items-center transition duration-300 ease-in-out hover:bg-orange-400 hover:text-white"
            >
              What we do?
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("Destinations")}

              className="cursor-pointer px-5 py-2 h-16 text-xl flex items-center transition duration-300 ease-in-out hover:bg-orange-400 hover:text-white"
            >
              Destinations
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("Find a course")}

              className="cursor-pointer px-5 py-2 h-16 text-xl flex items-center transition duration-300 ease-in-out hover:bg-orange-400 hover:text-white"
            >
              Find a course
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("Student Essential Services")}

              className="cursor-pointer px-5 py-2 h-16 text-xl flex items-center transition duration-300 ease-in-out hover:bg-orange-400 hover:text-white"
            >
              Student Essential Services
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("IELTS")}

              className="cursor-pointer px-5 py-2 h-16 text-xl flex items-center transition duration-300 ease-in-out hover:bg-orange-400 hover:text-white"
            >
              IELTS
            </li>
          </ul>
        </nav>
      </div>
      {hoveredItem && <Modal2 data={getDataForItem(hoveredItem)} showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}

const Modal2 = ({ data, showModal, setShowModal }) => {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    showModal && (
      <div className="fixed z-[100] flex items-center justify-center bg-black/20  duration-100 w-full">
        <div  className="absolute w-[900px] mt-32 rounded-sm bg-white p-3 pb-5 text-center drop-shadow-2xl scale-1 opacity-1 duration-300 max-w-screen-xl">
          <FaTimes onClick={closeModal} className="cursor-pointer absolute top-2 right-2 text-gray-500" />
          <h1 className="mb-2 text-xl font-semibold">{data.title}</h1>
          <p className="px-1 mb-3 text-sm opacity-80">{data.content}</p>
        </div>
      </div>
    )
  );
};

