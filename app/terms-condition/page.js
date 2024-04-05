"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import Bottom from "../components/Bottom";
import ScrollToTopButton from "../components/ScrollToTopButton";

const TermsPage = () => {
  const router = useRouter();

  return (
    <section className="py-10 md:px-24">
      <div className="px-4 md:px-0">
        <button
          href=""
          className="w-9 h-9 rounded-full bg-primary-green flex items-center justify-center"
          onClick={() => router.back()}
        >
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ffffff" }} />
        </button>
      </div>
      <div className=" xl:w-[966px] flex flex-col justify-center mx-auto">
        <main className="px-4 md:px-16">
          <h1 className="text-[32px] font-medium text-center my-10">
            Veerified - Terms and Conditions
          </h1>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8">
              <h2 className="text-primary-green font-semibold">
                1. Acceptance of Terms.
              </h2>
              <p className="text-justify">
                1.1 Welcome to Verified! You acknowledge that these Terms and
                Conditions (the &quot;Terms&quot;) govern your use of our
                website (the &quot;Service&quot;) and that you will abide by
                them. Use of our Service is prohibited if you disagree with
                these Terms.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-primary-green font-semibold">
                2. Content and Services
              </h2>
              <p className="text-justify">
                2.1 Verified provides information, news, and updates related to
                finance, cryptocurrency, and fiat currency. The content is for
                informational purposes only and should not be considered
                financial advice.
              </p>
              <p className="text-justify">
                2.2 We reserve the right to modify, suspend, or discontinue the
                Service at any time without prior notice.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-primary-green font-semibold">
                3. User Accounts
              </h2>
              <p className="text-justify">
                3.1 To access certain features of the Service, you may be
                required to create an account. You agree to provide accurate,
                current, and complete information during the registration
                process.
              </p>
              <p className="text-justify">
                3.2 You are responsible for maintaining the confidentiality of
                your account and password and for restricting access to your
                computer or device. You agree to accept responsibility for all
                activities that occur under your account.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-primary-green font-semibold">
                4. User Conduct
              </h2>
              <p className="text-justify">
                4.1 You agree to use the Service in accordance with all
                applicable laws and regulations.
              </p>
              <p className="text-justify">
                4.2 You may not engage in any conduct that could be considered
                disruptive, unlawful, harmful, or offensive while using the
                Service.
              </p>
              <p className="text-justify">
                4.3 You are solely responsible for the content you publish on
                our platform. We reserve the right to remove any content that
                violates these Terms or is deemed inappropriate.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-primary-green font-semibold">
                5. Intellectual Property
              </h2>
              <p className="text-justify">
                5.1 The content on Verified Blog, including text, graphics,
                logos, and images, is the intellectual property of Verified Blog
                and is protected by copyright laws.
              </p>
              <p className="text-justify">
                5.2 You may not reproduce, distribute, display, or create
                derivative works of the content without our prior written
                permission.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-primary-green font-semibold">
                6. Third-Party Links
              </h2>
              <p className="text-justify">
                6.1 The Service may contain links to third-party websites or
                services that are not owned or controlled by Verified. We are
                not responsible for the content or privacy practices of these
                third-party sites.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-primary-green font-semibold">
                7. Disclaimer of Warranties
              </h2>
              <p className="text-justify">
                7.1 The Service is provided &quot;as is&quot; and &quot;as
                available&quot; without any explicit or implied warranties of
                any kind, including, but not limited to, implied warranties of
                merchantability, fitness for a certain purpose, and
                non-infringement.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-primary-green font-semibold">
                8. Limitation of Liability
              </h2>
              <p className="text-justify">
                8.1 In no event shall Verified be liable for any indirect,
                incidental, special, consequential, or punitive damages, or any
                loss of profits or revenues, whether incurred directly or
                indirectly, or any loss of data, use, goodwill, or other
                intangible losses.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-primary-green font-semibold">
                9. Governing Law
              </h2>
              <p className="text-justify">
                9.1 These Terms shall be governed by and construed in accordance
                with the laws of Nigeria.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-primary-green font-semibold">
                10. Changes to Terms
              </h2>
              <p className="text-justify">
                10.1 These Terms are subject to amendment or modification at any
                time by us. It is advised that you frequently examine the Terms.
                You agree to the updated Terms if you keep using the Service
                after such changes have been made.
              </p>
            </div>

            <p className="text-justify">
              If you have any questions or concerns about these Terms and
              Conditions, please contact us at info@verified.com.
            </p>

            <p className="text-justify">
              <span className="text-primary-green font-semibold">
                Last updated:
              </span>{" "}
              10, January, 2024.
            </p>

            <p className="text-justify">Thank you for using Verified!</p>
          </div>
        </main>

        <Bottom signUp={false} />
      </div>

      <ScrollToTopButton />
    </section>
  );
};

export default TermsPage;
