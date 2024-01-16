import Navbar from "../Navbar"
import FooterSection from "../FooterSection"
import Bottom from "../Bottom"

export default function PageLayout({ children }) {
    return (
        <div className="w-10/12 mx-auto flex flex-col mt-3">
          <Navbar />
          {children}
          <Bottom />
        </div>
    )
}