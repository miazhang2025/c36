'use client';
import Image from "next/image";
import ManifestSection from "@/components/section2";
import Lottie from "lottie-react";
import treasuryAnimation from "@/treasury_animation.json";
import Link from "next/link";


export default function Home() {
  return (
    <div
      className="min-h-screen min-h-dvh bg-[#0053A2] text-white flex flex-col items-center justify-between"
      style={{
        backgroundColor: '#0053A2',
        backgroundBlendMode: 'overlay',
        opacity: 1,
      }}
    >
      {/* Header */}
      <header
        className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between w-full max-w-[1408px] px-2 sm:px-8 py-2 sm:py-12 pt-2 !pt-[50px] lg:pt-[10px] gap-2 sm:gap-4 mt-4 sm:mt-[50px] lg:mt-[30px]"
      >
        <div className="flex flex-col sm:w-[70px] sm:h-[70px] sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start text-center">
          <Image
            src="/icon.png"
            alt="Department of the Treasury Logo"
            width={48}
            height={48}
            className="object-contain w-10 h-10 xs:w-12 xs:h-12 sm:w-[70px] sm:h-[70px]"
          />
          <div className="mt-2 sm:mt-0 w-full sm:w-auto">
            <h1
              style={{ fontFamily: 'var(--font-kode-mono)' }}
              className="text-2xl xs:text-3xl sm:text-[36px] font-bold font-[var(--font-kode-mono)] text-center sm:text-left"
            >
              CORE36
            </h1>
          </div>
        </div>
        <Link
          href="https://5adne.share.hsforms.com/2mJaj2LW8T-iKhXQGwuztlQ"
          style={{ fontFamily: 'var(--font-roboto-mono)' }}
          className="hidden sm:flex border border-white border-[0.5px] px-3 py-2 sm:!px-[10px] sm:!py-[5px] text-center justify-center items-center font-[400] max-w-[154px] h-[41px] w-full text-[15px] shadow-[3px_3px_0px_0px_#2100C7] hover:bg-[white] hover:text-[#0053A2] transition-all"
        >
          NOMINATION
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="flex flex-col items-center justify-center w-full flex-1 max-w-[1157px] px-2 xs:px-4 sm:px-0">
        <div className="relative w-full flex items-center justify-center aspect-[2.5/1] max-w-full">
          <Lottie
            animationData={treasuryAnimation}
            loop={true}
            className="w-[95vw] h-[40vw] max-w-[1000px] max-h-auto sm:!w-[120vw] sm:h-auto"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center pb-40 sm:pb-20 !mb-[100px] sm:!mb-[50px]">
        <div className="flex flex-col items-center justify-center text-center mb-0 mt-0 pb-4 sm:!pb-[20px]">
          <h2 style={{ fontFamily: 'var(--font-kode-mono)' }} className="text-4xl xs:text-5xl sm:text-[40px] font-bold font-[var(--font-kode-mono)] mb-6 sm:mb-2 sm:!mb-[10px] tracking-tight">CORE36</h2>
          <p style={{ fontFamily: 'var(--font-kode-mono)' }} className="text-lg xs:text-xl sm:!text-[20px] font-[200] font-[var(--font-kode-mono)] tracking-[2px] sm:tracking-[3px] mb-8 sm:!mb-[50px]">Treasury Technical Core</p>
        </div>
      </footer>
    </div>
  );
}