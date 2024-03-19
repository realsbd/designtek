'use client';

import { useState } from 'react';
import ModalFullLayout from "@/app/components/Layout/ModalFullLayout";
import ForgotPassword from "@/app/components/ForgotPassword";

export default function PasswordModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="forgot-password my-3 text-right">
            <button
                onClick={openModal}
                className="text-right border-0 hover:text-primary-green"
            >
                Forgot password?
            </button>
            <ModalFullLayout>
                <ForgotPassword />
            </ModalFullLayout>
        </div>
    );
}