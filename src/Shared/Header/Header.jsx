import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import SearchTab from "../../Components/SearchTab/SearchTab";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);
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
          
            {open && <Tabs open={open} close={close} />}
          <div
            ref={dropDownMenuRef}
            onClick={() => setDropDownState(!dropDownState)}
            className="relative flex transition-transform md:hidden lg:mt-0 md:mt-0 mt-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer"
            >
              {" "}
              <line x1="4" x2="20" y1="12" y2="12" />{" "}
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />{" "}
            </svg>
            {dropDownState && (
              <ul className=" z-10  gap-2  bg-[#393E46]  absolute left-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
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
            )}
          </div>
          <div className="h-10 my-auto relative ml-auto lg:p-0 md:p-0 pt-3">
            <div className="flex">
              <input
                className="py-2 pl-10 my-auto rounded-full"
                placeholder="Search"
                type="text"
                onClick={() => setOpen(true)}
              />
            </div>
            <FiSearch className="absolute top-[9px] left-3 my-auto text-black text-xl lg:mt-0 md:mt-0 mt-3" />
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
      className="absolute z-[100] flex justify-center bg-black/20  duration-100 w-full"
      onMouseLeave={closeModal}
    >
      <div className="absolute lg:w-[50%] md:w-[50%] w-[95%] rounded-2xl bg-white pl-3 pr-0 pb-5 text-center shadow-xl shadow-gray-300 mt-3 scale-1 opacity-1 duration-300 max-w-screen-xl">
        <h1 className="my-5 text-xl font-bold text-start ml-10">
          {data.title}
        </h1>
        {data.content && (
          <p className="px-1 mb-3 text-sm opacity-80">{data.content}</p>
        )}
        {data.infos && (
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2">
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
              <ul className="text-start text-lg font-medium cursor-pointer space-y-2 lg:mt-0 md:mt-0 mt-3 lg:ml-0 md:ml-0 ml-4">
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

const Tabs = ({ open, close }) => {
  if (!open) return null;
  return (
    <div
      className={`fixed z-[100] flex items-center justify-center ${
        open ? "opacity-1 visible" : "invisible opacity-0"
      } inset-0 bg-black/25 backdrop-blur-sm duration-100`}
    >
      <div
        className={`absolute xl:w-[30.2%] lg:w-[30.2%] md:w-[32%] w-[95%] bg-white rounded-xl pb-5 text-center drop-shadow-2xl ${
          open
            ? "scale-1 opacity-1 duration-300"
            : "scale-0 opacity-0 duration-150"
        } `}
      >
        {open && (
          <div className="absolute right-0 -top-14 border-2 w-10 h-10 rounded-full flex items-center ml-4 cursor-pointer">
            <HiOutlineXMark
              className="text-white text-2xl mx-auto"
              onClick={close}
            />
          </div>
        )}

        <SearchTab />
        <div className="ml-auto w-10 h-10 rounded-full border-2 flex items-center mt-5 mx-5">
          <HiOutlineArrowRight className="text-gray-400 text-2xl mx-auto items-center" />
        </div>
      </div>
    </div>
  );
};
