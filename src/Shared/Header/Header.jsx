import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const getDataForItem = (item) => {
    switch (item) {
      case "Study abroad":
        return {
          title: "Study abroad",
          infos: [
            {
              image: "https://i.ibb.co/NSxBnzm/56031.jpg",
              title: "Study UI in SG",
            },
            {
              image: "https://i.ibb.co/thHPVzy/3434.jpg",
              title: "Study UX in SG",
            },
            {
              image: "https://i.ibb.co/MDyfL3x/2148.jpg",
              title: "Study Nothing",
            },
          ],
        };
      case "What we do?":
        return {
          title: "What we do?",
          infos: [
            {
              image: "https://i.ibb.co/NSxBnzm/56031.jpg",
              title: "Study UI in SG",
            },
            {
              image: "https://i.ibb.co/thHPVzy/3434.jpg",
              title: "Study UX in SG",
            },
            {
              image: "https://i.ibb.co/MDyfL3x/2148.jpg",
              title: "Study Nothing",
            },
          ],
        };
      case "Destinations":
        return {
          title: "Destinations",
          content: "Data related to destinations",
        };
      case "Find a course":
        return {
          title: "Find a course",
          infos: [
            {
              image: "https://i.ibb.co/NSxBnzm/56031.jpg",
              title: "Study UI in SG",
            },
            {
              image: "https://i.ibb.co/thHPVzy/3434.jpg",
              title: "Study UX in SG",
            },
            {
              image: "https://i.ibb.co/MDyfL3x/2148.jpg",
              title: "Study Nothing",
            },
          ],
        };
      case "Student Essential Services":
        return {
          title: "Student Essential Services",
          content: "Data related to essential services",
        };
      case "IELTS":
        return { title: "IELTS", content: "Data related to IELTS" };
      default:
        return null;
    }
  };

  const handleMouseEnter = (item) => {
    setShowModal(true);
    setModalData(getDataForItem(item));
  };

  const closeModal = () => {
    setShowModal(false);
    setModalData(null);
  };

  return (
    <div>
      <div className="bg-black h-16">
        <nav className="flex px-4 text-white mb-24 max-w-screen-xl mx-auto">
          <ul className="hidden items-center text-center gap-3 md:flex">
            {[
              "Study abroad",
              "What we do?",
              "Destinations",
              "Find a course",
              "Student Essential Services",
              "IELTS",
            ].map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => handleMouseEnter(item)}
                className="cursor-pointer px-5 py-2 h-16 text-lg flex items-center transition duration-300 ease-in-out hover:bg-orange-400 hover:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="h-10 my-auto relative">
            <input
              className="py-2 pl-10 my-auto rounded-full"
              placeholder="Search"
              type="text"
            />
            <FiSearch className="absolute top-[9px] left-3 my-auto text-black text-xl" />
          </div>
        </nav>
      </div>
      {showModal && <Modal2 data={modalData} closeModal={closeModal} />}
    </div>
  );
}

const Modal2 = ({ data, closeModal }) => {
  if (!data) return null;

  return (
    <div
      className="fixed z-[100] flex justify-center bg-black/20  duration-100 w-full"
      onMouseLeave={closeModal}
    >
      <div className="absolute w-[70%] rounded-2xl bg-white pl-3 pr-0 pb-5 text-center shadow-xl shadow-gray-300 mt-3 scale-1 opacity-1 duration-300 max-w-screen-xl">
        <h1 className="my-5 text-xl font-bold text-start ml-10">
          {data.title}
        </h1>
        {data.content && (
          <p className="px-1 mb-3 text-sm opacity-80">{data.content}</p>
        )}
        {data.infos && (
          <div className="grid grid-cols-4">
            {data.infos.map((info, index) => (
              <div key={index} className="w-[80%] mx-auto">
                <div className="text-start">
                  <img
                    className=" rounded-xl cursor-pointer "
                    src={info.image}
                    alt=""
                  />
                  <p className="text-lg font-medium mt-5 cursor-pointer ">
                    {info.title}
                  </p>
                </div>
              </div>
            ))}
            <div>
              <ul className="text-start text-lg font-medium cursor-pointer space-y-2">
                <li>Study UX in SG</li>
                <li>Study UI in SG</li>
                <li>Study Nothing</li>
                <li>Study Something</li>
                <li>Faking Study</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
