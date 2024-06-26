import Navbar from "../Navbar";
import Bottom from "../Bottom";

export default function PageLayout({ children }) {
  return (
    <div className="w-full lg:w-4/6 mx-auto flex flex-col mt-3">
      <Navbar />
      <div>{children}</div>
      <Bottom signUp={true} />
    </div>
  );
}
