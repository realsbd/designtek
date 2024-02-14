import Navbar from "../Navbar"
import Bottom from "../Bottom"

export default function PageLayout({ children }) {
    return (
        <div className="w-full lg:w-4/5 mx-auto flex flex-col mt-3">
          <Navbar />
          <div className="w-11/12 lg:w-4/5 mx-auto">{children}</div>
          <Bottom />
        </div>
    )
}