'use client';
import Image from "next/image";
import ManifestSection from "@/components/section2";
import Lottie from "lottie-react";
import treasuryAnimation from "@/treasury_animation.json";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#0053A2] text-white flex flex-col items-center"
      style={{
       backgroundColor: '#0053A2',
       backgroundBlendMode: 'overlay',
       opacity: 1 
     }}>
     
      {/* Header - Fixed: justify-between and exact max-width matching the GIF area */}
      <header className="flex items-center justify-between w-full max-w-[1408px] px-8 py-12 !pt-[30px] p-[20px]" >
        <div className="flex items-center gap-4">
          <Image
            src="/icon.png"
            alt="Department of the Treasury Logo"
            width={70}
            height={70}
            className="object-contain"
          />
          <div className="!mt-[0px]">
            <h1 style={{ fontFamily: 'var(--font-kode-mono)' }} className="text-[36px] font-bold font-[var(--font-kode-mono)]">CORE36</h1>
          </div>
        </div>
        <Link href="https://5adne.share.hsforms.com/2mJaj2LW8T-iKhXQGwuztlQ"  
        style={{ fontFamily: 'var(--font-roboto-mono)' }}
        className="
          flex
          border border-white border-[0.5px] 
          !px-[10px] !py-[5px] 
          text-center
          justify-center
          items-center
          !font-[400]
          max-w-[154px] h-[41px] w-full !text-[15px]
          shadow-[3px_3px_0px_0px_#2100C7]
          hover:bg-[white] hover:text-[#0053A2] transition-all"
          
      
        >NOMINATION
        </Link>
      </header>

      {/* Main Content Area - Increased padding to match screenshot gap */}
      <main className="flex flex-col items-center justify-center w-full max-w-[1157px]">
        <div className="relative w-full aspect-[2.5/1]">
        <Lottie 
             animationData={treasuryAnimation} 
             loop={false} 
             className="w-full h-full"
           />
        </div>
      </main>

      {/* Footer - Centered text and large vector at the bottom */}
      <footer className="w-full flex flex-col items-center mt-auto">
        <div className="text-center mb-0 mt-[0px] !pb-[20px]">
          <h2 style={{ fontFamily: 'var(--font-kode-mono)' }} className="text-[40px] font-bold font-[var(--font-kode-mono)] !mb-[10px] tracking-tight">CORE36</h2>
          <p style={{ fontFamily: 'var(--font-kode-mono)' }} className="!text-[20px] font-[200] font-[var(--font-kode-mono)] tracking-[3px]">Treasury Technical Core</p>
        </div>
        
        {/* Vector and Dot Pattern Area */}
        {/* <div className="w-full relative flex flex-col items-center top-[25px]">
          <Image
            src="/Vector (1).png"
            alt="Vector Graphic"
            width={1400}
            height={300}
            className="w-full h-auto opacity-80"
          />
          
          
        </div> */}
      </footer>
      
    </div>
    
  );
}