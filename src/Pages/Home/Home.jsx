import Blogs from "../../Components/Blogs/Blogs";
import Header from "../../Shared/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <Blogs />
      </div>
    </div>
  );
}
