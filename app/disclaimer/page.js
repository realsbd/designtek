"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import Bottom from "../components/Bottom";
import ScrollToTopButton from "../components/ScrollToTopButton";

const DisclaimerPage = () => {
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
          <h1 className="text-4xl font-medium text-center my-10">
            Disclaimer: Blog
          </h1>

          <div className="flex flex-col gap-8 text-justify">
            <p>
              The content provided on the blog is for informational purposes
              only and does not constitute financial, investment, or legal
              advice. The information on this blog is based on personal
              opinions, research, and experiences, and it is recommended that
              readers conduct their own research and seek professional advice
              before making any financial decisions.
            </p>

            <p>
              Blog strives to provide accurate and up-to-date information;
              however, we make no representations or warranties of any kind,
              express or implied, regarding the completeness, accuracy,
              reliability, or suitability of the information presented. Any
              reliance on the information provided is at the reader&apos;s own
              risk.
            </p>

            <p>
              The views and opinions expressed on the blog are those of the
              author(s) and do not necessarily reflect the official policy or
              position of any financial institution, company, or organization
              mentioned. We are not responsible for the content or privacy
              practices of third-party websites linked to from our blog.
            </p>

            <p>
              The blog is not responsible for any errors or omissions in the
              content or for any losses, injuries, or damages arising from the
              use of the information provided on the blog. We do not endorse any
              specific products, services, or companies unless explicitly
              stated.
            </p>

            <p>
              All content on the blog is protected by copyright law.
              Unauthorized use or reproduction of the content without permission
              is prohibited.
            </p>

            <p>
              The blog reserves the right to modify, update, or remove any
              content on the blog without prior notice.
            </p>

            <p>
              By using the blog, you agree to the terms of this disclaimer. If
              you have any questions or concerns, please contact us.
            </p>
          </div>
        </main>

        <Bottom signUp={false} />
      </div>

      <ScrollToTopButton />
    </section>
  );
};

export default DisclaimerPage;
