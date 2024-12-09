import Image from "next/image";

export default function HomePage2() {
  return (
    <main className="bg-black sm:h-[100px] sm:flex sm:flex-row h-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[68px] p-4">
      <Image
        src="/image2.png"
        alt="brand_Versace"
        height={100}
        width={100}
        className="w-[166.48px] h-[33.16px] sm:w-[150px] sm:h-[22px]"
      ></Image>
      <Image
        src="/image3.png"
        alt="brand_Zara"
        height={100}
        width={100}
        className="w-[91px] h-[37.98px] sm:w-[150px] sm:h-[22px]"
      ></Image>
      <Image
        src="/image4.png"
        alt="brand_Gucci"
        height={100}
        width={100}
        className="w-[156px] h-[32.29px] sm:w-[150px] sm:h-[22px]"
      ></Image>
      <Image
        src="/image5.png"
        alt="brand_Prada"
        height={100}
        width={100}
        className="w-[194px] h-[31.2px] sm:w-[150px] sm:h-[22px]"
      ></Image>
      <Image
        src="/image6.png"
        alt="brand_Calvin_Klein"
        height={100}
        width={100}
        className="w-[206.79px] h-[33.35px] sm:w-[150px] sm:h-[22px]"
      ></Image>
    </main>
  );
}
