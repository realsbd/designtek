import Navbar from "../Navbar";
import Bottom from "../Bottom";

export default function PageLayout({ children }) {
  return (
    <div className="lg:w-4/6 min-[1440px]:w-[925px] mx-auto flex flex-col mt-3">
      <Navbar />
      <div>{children}</div>
      <Bottom signUp={true} />
    </div>
  );
}
