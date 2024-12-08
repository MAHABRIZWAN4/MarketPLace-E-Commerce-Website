
import Image from "next/image"
export default function HomePage2() {
  return (
    <main className='bg-black h-[122px] flex flex-row justify-center items-center gap-[68px]'>
     <Image src="/image2.png" alt="brand_Versage"  height={100} width={100} className="w-[166.48px] h-[33.16px]" ></Image>
     <Image src="/image3.png" alt="brand_Zara"  height={100} width={100} className="w-[91px] h-[37.98px]"></Image>
     <Image src="/image4.png" alt="brand_Gucci"  height={100} width={100} className="w-[156px] h-[32.29px]"></Image>
     <Image src="/image5.png" alt="brand1_Prada"  height={100} width={100} className="w-[194px] h-[31.2px]"></Image>
     <Image src="/image6.png" alt="brand1_Calvin_Klien"  height={100} width={100} className="w-[206.79px] h-[33.35px]"></Image>

    </main>
  )
}
