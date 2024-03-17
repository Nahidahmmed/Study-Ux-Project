import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
export default function SGForm() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("+880");
  const [inputValue, setInputValue] = useState("");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setInputValue(option);
    setShowDropdown(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setShowDropdown(false);
  };
  return (
    <div>
      <div className="bg-[#dddddd] rounded-xl z-10">
        <div className="bg-[#3562c2] text-white px-10 pb-5 pt-1 rounded-t-xl">
          <p className="text-2xl font-[650] mb-2 mt-3">
            Interested in studying UX?
          </p>
          <p className="text-xl">
            SG can help - fill in your details <br /> and we'll call you back.
          </p>
        </div>
        <form className=" w-full p-5">
          <input
            className="text-xl text-gray-500 border-b-[1.5px] border-gray-500 w-full bg-transparent pb-2 px-1 placeholder-gray-500"
            placeholder="First Name*"
            type="text"
            name=""
            id=""
          />
          <input
            className="text-xl text-gray-500 border-b-[1.5px] border-gray-400 w-full bg-transparent pb-2 px-1 mt-14 placeholder-gray-500"
            placeholder="First Name*"
            type="text"
            name=""
            id=""
          />
          <input
            className="text-xl text-gray-400 border-b-[1.5px] border-gray-400 w-full bg-transparent pb-2 px-1 mt-14 placeholder-gray-500"
            placeholder="Email Address*"
            type="text"
            name=""
            id=""
          />
          <div className="relative">
            <input
              className="text-xl text-gray-500 border-b-[1.5px] border-gray-400 w-full bg-transparent pb-2 px-1 mt-14"
              placeholder="Mobile Number*"
              type="text"
              name="mobileNumber"
              id="mobileNumber"
              required
              onClick={toggleDropdown}
              value={inputValue ? inputValue : selectedOption}
              onChange={handleInputChange}
            />
            <HiChevronDown
              className="absolute right-6 top-[65px] text-xl"
              onClick={toggleDropdown}
            />
            {showDropdown && (
              <div className="absolute top-12 left-0 w-[205] bg-[#ffffff] text-gray-500 placeholder-gray-500 text-xl px-3 py-1  shadow-md rounded mt-10">
                <ul>
                  <li
                    onClick={() => handleOptionClick("+880")}
                    className="option"
                  >
                    +880
                  </li>
                  <li
                    onClick={() => handleOptionClick("+145")}
                    className="option"
                  >
                    +145
                  </li>
                  
                </ul>
              </div>
            )}
          </div>
          <div className="mt-14 relative">
            <label className="block mb-2 pl-1 text-xl text-gray-500">
              Your Preferred Study Course*
            </label>
            <select
              id="subCategory"
              name="category"
              className="w-full border-b-[1.5px] border-gray-500 bg-transparent text-xl px-1 py-2 appearance-none"
              required
            >
              <option value="">Please Select</option>
              <option value="mathToys">Web Development</option>
              <option value="languageToys">Front-End Development</option>
              <option value="scienceToys">Back-End Development</option>
            </select>
            <div className="absolute inset-y-0 right-5 top-10 flex items-center px-2 pointer-events-none">
              <HiChevronDown className=" text-xl" />
            </div>
          </div>
          <div className="mt-14 relative">
            <label className="block mb-2 pl-1 text-xl text-gray-500">
              When do You Plan to Study?*
            </label>
            <select
              id="subCategory"
              name="category"
              className="w-full border-b-[1.5px] border-gray-500 bg-transparent text-xl px-1 py-2 appearance-none"
              required
            >
              <option value="">Please Select</option>
              <option value="mathToys">Web Development</option>
              <option value="languageToys">Front-End Development</option>
              <option value="scienceToys">Back-End Development</option>
            </select>
            <div className="absolute inset-y-0 right-4  top-10 flex items-center px-2 pointer-events-none">
              <HiChevronDown className=" text-xl" />
            </div>
          </div>
          <div className="mt-14 relative">
            <label className="block mb-2 pl-1 text-xl text-gray-500">
              Nearst GS Office*
            </label>
            <select
              id="subCategory"
              name="category"
              className="w-full border-b-[1.5px] border-gray-500 bg-transparent text-xl px-1 py-2 appearance-none"
              required
            >
              <option value="">Please Select</option>
              <option value="mathToys">Web Development</option>
              <option value="languageToys">Front-End Development</option>
              <option value="scienceToys">Back-End Development</option>
            </select>
            <div className="absolute inset-y-0 right-4  top-10 flex items-center px-2 pointer-events-none">
              <HiChevronDown className=" text-xl" />
            </div>
          </div>
          <div className="mt-14 relative">
            <label className="block mb-2 pl-1 text-xl text-gray-500">
              How Would You Found your Course?*
            </label>
            <select
              id="subCategory"
              name="category"
              className="w-full border-b-[1.5px] border-gray-500 bg-transparent text-xl px-1 py-2 appearance-none"
              required
            >
              <option value="">Please Select</option>
              <option value="mathToys">Web Development</option>
              <option value="languageToys">Front-End Development</option>
              <option value="scienceToys">Back-End Development</option>
            </select>
            <div className="absolute inset-y-0 right-4  top-10 flex items-center px-2 pointer-events-none">
              <HiChevronDown className=" text-xl" />
            </div>
          </div>
          <div className="mt-14 relative">
            <label className="block mb-2 pl-1 text-xl text-gray-500">
              Preferred Study Level*
            </label>
            <select
              id="subCategory"
              name="category"
              className="w-full border-b-[1.5px] border-gray-500 bg-transparent text-xl px-1 py-2 appearance-none"
              required
            >
              <option value="">Please Select</option>
              <option value="mathToys">Web Development</option>
              <option value="languageToys">Front-End Development</option>
              <option value="scienceToys">Back-End Development</option>
            </select>
            <div className="absolute inset-y-0 right-4  top-10 flex items-center px-2 pointer-events-none">
              <HiChevronDown className=" text-xl" />
            </div>
          </div>
          <p className="mt-20 text-xl">
            SG will not share your details with others without your permission:
          </p>
          <div className="flex items-center my-6 text-xl">
            <input
              className="w-4 h-4 mr-5 focus:outline-none focus:border-red-500"
              type="checkbox"
            />
            <p>I agree to SG Terms and Privacy</p>
          </div>
          <div className="flex items-center my-6 text-xl">
            <input
              className="w-6 h-4 mr-5 focus:outline-none focus:border-red-500"
              type="checkbox"
            />
            <p>Please contact me by phone, email or SMS to assist with my enwuiry</p>
          </div>
          <div className="flex items-center my-6 text-xl">
            <input
              className="w-5 h-4 mr-5 focus:outline-none focus:border-red-500"
              type="checkbox"
            />
            <p>I would like to receive updates and offers from IDP</p>
          </div>
        </form>
      </div>
    </div>
  );
}