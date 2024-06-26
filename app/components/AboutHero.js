import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="max-lg:px-8">
      <div className="w-[600px] h-[600px] bg-secondary-green rounded-full flex justify-center items-center absolute -top-10 right-0 -z-10">
        <div className="w-[550px] h-[550px] bg-white rounded-full"></div>
      </div>
      <div className="flex items-center gap-14 justify-between">
        <div>
          <h1 className="text-[42px] text-black font-bold leading-tight">
            That smile when you get <br className="hidden min-[1318px]:block" />
            <span className="text-primary-green bg-secondary-green">
              Verified.
            </span>
          </h1>
          <p className="text-[18px] my-5">
            Our platform offers various financial content globally for a
            financial inclusive and verified future.
          </p>

          <div>
            <button className="text-white border border-solid border-primary-green duration-300 bg-primary-green hover:bg-white hover:text-primary-green px-5 py-2 rounded-lg">
              Download
            </button>
          </div>
          <p className="py-5 text-[12px]">
            OUR SERVICES ARE TRUSTED BY NOTABLE BRANDS LIKE:
          </p>

          <div className="flex gap-3 items-center">
            <Image
              src="/img/xbox-1.svg"
              width={134}
              height={40}
              alt="xbox logo"
            />
            <Image
              src="/img/google-1.svg"
              width={122}
              height={40}
              alt="google logo"
            />
          </div>
        </div>
        <div className="flex items-center gap-3 max-md:hidden">
          <div className="h-[400px] w-[170px]">
            <Image
              src="/img/about-hero-1.png"
              width={218}
              height={485}
              alt="about hero one"
              className="h-full w-full"
            />
          </div>
          <div className="h-[300px] w-[150px]">
            <Image
              src="/img/about-hero-2.png"
              width={190}
              height={340}
              alt="about hero two"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
