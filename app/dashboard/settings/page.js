import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashboardLayout from "@/app/components/Layout/DashboardLayout";

export default function Settings() {
  return (
    <DashboardLayout>
      <div>Settings</div>
    </DashboardLayout>
  );
}
