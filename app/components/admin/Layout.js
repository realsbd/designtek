import Image from "next/image";
import AdminHeader from "./AdminHeader";

const Layout = ({ children, openModal }) => {
  return (
    <div className="flex flex-col min-h-screen p-5 md:p-10">
      <div>
        <AdminHeader openModal={openModal} />
      </div>
      <main className="flex-grow">{children}</main>
      <footer className="mt-auto">
        <Image
          src="/img/logo.png"
          width="500"
          height="300"
          alt="verified logo"
          className="w-[113px]"
        />
      </footer>
    </div>
  );
};

export default Layout;
