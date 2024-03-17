
import Blogs from "../../Components/Blogs/Blogs";
import SearchTab from "../../Components/SearchTab/SearchTab";

export default function Home() {
  
  return (
    <div className="max-w-screen-xl mx-auto h-screen">
      <Blogs/>
      <SearchTab/>
    </div>
  )
}
