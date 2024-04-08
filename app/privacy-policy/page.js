"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import Bottom from "../components/Bottom";
import ScrollToTopButton from "../components/ScrollToTopButton";

const PrivacyPage = () => {
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
            Privacy Policy: Blog
          </h1>

          <div className="flex flex-col gap-8">
            <p>Effective Date: 2, December, 2023</p>

            <div className="flex flex-col gap-8">
              <h2 className="text-primary-green font-medium">
                1. Introduction
              </h2>
              <p className="text-justify">
                Welcome to blog (&quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;). This Privacy Policy explains how we collect,
                use, disclose, and safeguard your personal information when you
                visit our website or engage with our services. By accessing or
                using our website, you consent to the practices outlined in this
                Privacy Policy.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-primary-green font-medium">
                2. Information We Collect
              </h2>
              <p>a. Personal Information</p>
              <p>
                We may collect personal information, including but not limited
                to:
              </p>

              <ul className="pl-7 list-disc text-justify">
                <li>Name</li>
                <li>Email address</li>
                <li>Contact information</li>
                <li>Demographic information</li>
                <li>
                  Other information relevant to user surveys and/or offers
                </li>
              </ul>

              <p>b. Non-Personal Information</p>

              <p>We may also collect non-personal information, such as:</p>

              <ul className="pl-7 list-disc">
                <li>Browser type</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Web pages visited</li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-primary-green font-medium">
                3. How We Use Your Information
              </h2>
              <p className="text-justify">
                We use the collected information for the following purposes:
              </p>
              <ul className="pl-7 list-disc text-justify">
                <li>To personalize your experience on our website</li>
                <li>To improve our website based on your feedback</li>
                <li>
                  To send periodic emails containing relevant content or updates
                </li>
                <li>To respond to your inquiries or requests</li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-primary-green font-medium">
                4. Cookies and Tracking Technologies
              </h2>
              <p className="text-justify">
                We may use cookies and similar tracking technologies to enhance
                your experience on our website. You have the option to accept or
                decline cookies. Most web browsers automatically accept cookies,
                but you can usually modify your browser settings to decline
                cookies.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-primary-green font-medium">5. Security</h2>
              <p className="text-justify">
                We are committed to ensuring that your information is secure. We
                implement reasonable security measures to protect against
                unauthorized access, disclosure, alteration, or destruction of
                your personal information.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-primary-green font-medium">
                6. Third-Party Links
              </h2>
              <p className="text-justify">
                Our website may contain links to third-party websites. We have
                no control over the content or privacy practices of these sites
                and are not responsible for their practices.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-primary-green font-medium">
                7. Your Choices
              </h2>
              <p className="text-justify">
                You may choose to restrict the collection or use of your
                personal information. If you have previously agreed to us using
                your personal information for direct marketing purposes, you may
                change your mind at any time by contacting us.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-primary-green font-medium">
                8. Updates to this Privacy Policy
              </h2>
              <p className="text-justify">
                We may update this Privacy Policy periodically. Please review
                this page for any changes.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-primary-green font-medium">
                9. Contact Information
              </h2>
            </div>

            <p className="text-justify">
              If you have any questions or concerns about this Privacy Policy,
              please contact us.
            </p>

            <p className="text-justify">Thank you for choosing blog.</p>
          </div>
        </main>
        <Bottom signUp={false} />
      </div>

      <ScrollToTopButton />
    </section>
  );
};

export default PrivacyPage;
