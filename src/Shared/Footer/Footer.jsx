import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="bg-[#242525]">
      <footer className="flex flex-col max-w-screen-xl mx-auto">
      <div className="flex flex-col items-start justify-around gap-5  text-white p-10 py-10 md:flex-row md:gap-0 md:items-center">
        <nav className="text-lg my-10">
          <ul className="space-y-3 h-96">
            <li>
              <a className="cursor-pointer hover:underline text-2xl font-bold">Study UX</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">How to chose your destination?</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">study abroad intakes</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">guide for parents</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">THE world University rankings</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Stuudy abroad intakes</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Qs world university rankings</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">SG Events</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Institution</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Student Essentials</a>
            </li>
          </ul>
        </nav>
        <nav className="text-lg">
          <ul className="space-y-3 h-96">
            <li>
              <a className="cursor-pointer hover:underline text-2xl font-black">Useful links</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">SG Blog</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Engineering Courses</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Heath and medicene</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Information tecnology</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Management courses</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">find Scholarships</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Student Reviews</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Ask SG</a>
            </li>
            
          </ul>
        </nav>
        <nav className="text-lg">
          <ul className="space-y-3 h-96">
            <li>
              <a className="cursor-pointer hover:underline text-2xl font-bold">IELTS</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">What is IELTS?</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">prepare for EILTS</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Computer-delivered EILTS</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">book my IELTES</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">IELTES for UKVI</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">EILTS test dates</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">About SG EILTS</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Connect with SG</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">SG in the news</a>
            </li>
            
          </ul>
        </nav>
        <nav className="text-lg">
          <ul className="space-y-3 h-96">
            <li>
              <a className="cursor-pointer hover:underline text-2xl font-bold">About SG</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">requset an appointment</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Contact us</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">About SG Corporate</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">SG Career</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Customer Grievences</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Conrporate responsibility</a>
            </li>
            
          </ul>
        </nav>
      </div>
      
    </footer>
    <aside className="bg-black py-5 text-center text-white ">
       <div className="flex  max-w-screen-xl mx-auto p-4 justify-between text-xl">
       <p>Copyright &copy; 2024 SG Education.</p>
        <p>Disclaimer | Privacy Policy | Terms Of Use | Investors</p>
        <div className="flex items-center gap-2 text-xl">
          <FaFacebookF/>
          <FaInstagram/>
          <FaLinkedinIn/>
          <FaYoutube/>
        </div>
       </div>
      </aside>
    </div>
  );
}
