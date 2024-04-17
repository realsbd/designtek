import Image from "next/image";
import Link from "next/link";

const AdminHeader = () => {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden flex justify-center items-center">
          <Image
            src="/img/admin-profile-image.png"
            width={30}
            height={30}
            alt="user profile"
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p>Aisha Akintola</p>
          <Link
            href="/admin/profile"
            className="text-sm text-gray-shade-45 text-left hover:text-primary-green duration-300"
          >
            Edit profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
