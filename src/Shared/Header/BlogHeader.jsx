import { LuCalendar } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { FiUser } from "react-icons/fi";
export default function BlogHeader() {
  return (
    <div className="h-40 bg-[#EEEDEB]">
        <div className="lg:flex md:flex px-4 mb-24 max-w-screen-xl mx-auto py-[3%]">
        <p className="text-2xl font-semibold text-gray-500 uppercase text-center">Waves <span className=" font-normal text-gray-400">Marathon</span></p>
        <div className="flex ml-auto gap-10">
            <div className="lg:flex md:flex lg:mt-0 md:mt-0 mt-5 space-y-2 space-x-5">
            <p className="flex items-center text-xl font-semibold gap-2"><LuCalendar/> Events </p>
            <p className="flex items-center text-xl font-semibold gap-2 pb-1"><SlLocationPin/> Find Us </p>
            </div>
            <button className="flex items-center text-xl font-semibold gap-2 border-2 border-black rounded-lg px-4 py-2 lg:mt-0 md:mt-0 mt-7 ml-auto"><FiUser/> Sing up</button>
        </div>
        </div>
    </div>
  )
}
