import Navbar from "../Navbar";
import Bottom from "../Bottom";

export default function PageLayout({ children }) {
  return (
    <div className="lg:w-4/6 mx-auto flex flex-col mt-3">
      <Navbar />
      <div>
          {children}
      </div>
      <Bottom />
    </div>
  );
}
