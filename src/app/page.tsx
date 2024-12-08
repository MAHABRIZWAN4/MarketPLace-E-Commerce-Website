import HomePage2 from './pages/Homepage2';
import HomePage3 from './pages/Homepage3';
import HomePage4 from './pages/Homepage4';
import HomePage5 from './pages/Homepage5';
import Homepage6 from './pages/Homepage6';
import { Anton } from 'next/font/google';
const anton = Anton({ subsets: ['latin'], weight: ["400"] });



export default function Home() {
  return (
<>
    <div className='bg-[#F2F0F1]'>
    <main className='max-w-7xl mx-auto'>
      <div className="h-[550px] bg-[#F2F0F1] flex items-end">
        {/* div of content and pic */}
        <div className="relative h-[500px] mx-16 w-[100%] flex ">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center mt-[-50px]"
            style={{
              backgroundImage: 'url("/image1.png")',
              height: '550px', // Set custom height
              width: '100%',   // Set custom width (adjust as per your need)
            }}
          ></div>

          {/* div of content */}
          <div className="relative h-[400px] flex-1 flex flex-col gap-4  z-10">
            <h1 className={`text-[60px] ${anton.className} w-[400px] ml-24 leading-[1.2]`} style={{ transform: 'scaleX(1.5)' }}>
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </h1>
            <p className='text-gray-800'>Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
            <button className="bg-black w-44 h-12 rounded-3xl text-[14px] text-white">
              Shop Now
            </button>
          </div>
          {/* End div of content */}
        </div>



        
      </div>
    </main>


</div>



{/* HOME PAGE 2 */}
<HomePage2/>




{/* HOME PAGE 3 */}
<HomePage3/>



{/* HOME PAGE 4 */}
<HomePage4/>





{/* HOME PAGE 5 */}
<HomePage5/>






{/* HOME PAGE 6 */}
<Homepage6/>
    



    


    </>

  );
}

