import Navbar from "../Navbar"
import Footer from "../Footer"

export default function PageLayout({ children }) {
    return (
        <div className="w-10/12 mx-auto flex flex-col mt-3">
          <Navbar />
          {children}
          <Footer />
        </div>
    )
}