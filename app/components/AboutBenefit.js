import Image from "next/image";

const AboutBenefit = () => {
  const benefits = [
    {
      title: "Write & Get paid",
      description:
        "Whether you are writing to get paid or writing for fun, Veerified is a platform for you to write financial related content while you earn and build your portfolio.",
    },
    {
      title: "Free Trade Signal",
      description:
        "There is no limit to your wealth when you take foreign exchange trades using the free trade signals provided by our world leading expert traders. ",
    },
    {
      title: "Become a partner",
      description:
        "Are you an experienced trader? Veerified is the platform for you partner with and manage investors’ portfolios.",
    },
    {
      title: "Financial Literacy",
      description:
        "With our researched and well written financial blog posts, you can be sure to become financially smart and work your way to a financially secured and verified future.",
    },
    {
      title: "Become an investor",
      description:
        "Our platform allows you to invest and grow your wealth with our dedicated and seasoned expert traders who professionally ensures growth on portfolios managed.",
    },
    {
      title: "Dedicated support",
      description:
        "We offer dedicated support to help you with any questions or concerns you may have. We are availabe 24/7 to attend to your quest.",
    },
  ];

  return (
    <section className="max-lg:p-8">
      <div>
        <h2 className="text-center text-3xl font-bold">
          More benefits from us
        </h2>
        <p className="text-center text-[16px]">
          A little comparison to show the value we bring to the table
        </p>
      </div>
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div>
              <Image
                src="/img/good-benefit-icon.svg"
                width={48}
                height={48}
                alt="icon for good benefit"
              />
            </div>
            <p className="text-[20px] font-bold">{benefit.title}</p>
            <p className="text-sm text-justify">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutBenefit;
