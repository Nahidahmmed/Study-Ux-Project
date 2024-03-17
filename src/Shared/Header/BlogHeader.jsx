import { LuCalendar } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { FiUser } from "react-icons/fi";
export default function BlogHeader() {
  return (
    <div className="h-40 bg-[#EEEDEB]">
        <div className="flex px-4 mb-24 max-w-screen-xl mx-auto py-[3%]">
        <p className="text-2xl font-semibold text-gray-500">Waves <span className=" font-normal text-gray-400">Marathon</span></p>
        <div className="flex ml-auto gap-10">
            <p className="flex items-center text-xl font-semibold gap-2"><LuCalendar/> Events </p>
            <p className="flex items-center text-xl font-semibold gap-2"><SlLocationPin/> find Us </p>
            <button className="flex items-center text-xl font-semibold gap-2 border-2 border-black rounded-lg px-4 py-2"><FiUser/> Sing up</button>
        </div>
        </div>
    </div>
  )
}
