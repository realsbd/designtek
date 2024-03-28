import Image from "next/image";

const AboutCheck = () => {
  return (
    <section className="max-lg:p-8">
      <div>
        <h2 className="text-center text-3xl font-bold">We check every box</h2>
        <p className="text-center text-[16px]">
          A little comparison to show the value we bring to the table
        </p>
      </div>

      <div className="max-md:overflow-auto">
        <div className="p-3 max-md:w-[800px] border border-solid border-gray-shade-0 rounded-lg mt-10 table-container">
          <table className="w-full">
            <thead>
              <tr>
                <th></th>
                <th className="bg-secondary-green">Veerified</th>
                <th>Typical Services</th>
                <th>Some Marketplaces</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="bg-gray-shade-35">Trade signal accuracy</th>
                <td className="bg-secondary-green border-secondary-green">
                  98%
                </td>
                <td className="bg-gray-shade-35">40%</td>
                <td className="bg-gray-shade-35">5%</td>
              </tr>
              <tr>
                <th>Finance blog post</th>
                <td className="bg-secondary-green border-secondary-green">
                  Always true
                </td>
                <td>Sometimes true</td>
                <td>False</td>
              </tr>
              <tr>
                <th className="bg-gray-shade-35">Investment</th>
                <td className="bg-secondary-green border-secondary-green">
                  Highly profitable
                </td>
                <td>Sometimes profitable</td>
                <td>Huge loss</td>
              </tr>
              <tr>
                <th>Escrow service</th>
                <td className="bg-secondary-green border-secondary-green">
                  Highly secure
                </td>
                <td>Sometimes secure</td>
                <td>
                  <div className="flex justify-center items-center w-full h-full">
                    <Image
                      src="/img/negative-icon.svg"
                      width={24}
                      height={24}
                      alt="negative icon"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th className="bg-gray-shade-35">Meet an investor</th>
                <td className="bg-secondary-green border-secondary-green">
                  <div className="flex justify-center items-center w-full h-full">
                    <Image
                      src="/img/positive-icon.svg"
                      width={24}
                      height={24}
                      alt="positive icon"
                    />
                  </div>
                </td>
                <td>
                  <div className="flex justify-center items-center w-full h-full">
                    <Image
                      src="/img/negative-icon.svg"
                      width={24}
                      height={24}
                      alt="negative icon"
                    />
                  </div>
                </td>
                <td>
                  <div className="flex justify-center items-center w-full h-full">
                    <Image
                      src="/img/negative-icon.svg"
                      width={24}
                      height={24}
                      alt="negative icon"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th>Crypto & fiat Transactions</th>
                <td className="bg-secondary-green border-secondary-green">
                  <div className="flex justify-center items-center w-full h-full">
                    <Image
                      src="/img/positive-icon.svg"
                      width={24}
                      height={24}
                      alt="positive icon"
                    />
                  </div>
                </td>
                <td>
                  <div className="flex justify-center items-center w-full h-full">
                    <Image
                      src="/img/negative-icon.svg"
                      width={24}
                      height={24}
                      alt="negative icon"
                    />
                  </div>
                </td>
                <td>
                  <div className="flex justify-center items-center w-full h-full">
                    <Image
                      src="/img/negative-icon.svg"
                      width={24}
                      height={24}
                      alt="negative icon"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th className="bg-gray-shade-35">Fast payment process</th>
                <td className="bg-secondary-green border-secondary-green">
                  <div className="flex justify-center items-center w-full h-full">
                    <Image
                      src="/img/positive-icon.svg"
                      width={24}
                      height={24}
                      alt="positive icon"
                    />
                  </div>
                </td>
                <td>
                  <div className="flex justify-center items-center w-full h-full">
                    <Image
                      src="/img/negative-icon.svg"
                      width={24}
                      height={24}
                      alt="negative icon"
                    />
                  </div>
                </td>
                <td>
                  <div className="flex justify-center items-center w-full h-full">
                    <Image
                      src="/img/negative-icon.svg"
                      width={24}
                      height={24}
                      alt="negative icon"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AboutCheck;
