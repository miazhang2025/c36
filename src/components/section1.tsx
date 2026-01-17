import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function IntroductionSection() {
  return (
    <section className="h-auto bg-[#0053A2] !py-24 !px-6 flex flex-col items-center !pb-[200px] !pt-[0px] relative">
      

         <div className="w-[90%] max-w-[1200px] h-auto !mb-[100px]">
        <div className="flex justify-between items-center gap-8 mb-20 ">
            <div className="flex-none !pb-[50px]">
                <h1 style={{ fontFamily: 'var(--font-kode-mono)' }} className="text-8xl text-[#FFFFFF] m-0 font-bold tracking-wider ">TL;DR</h1>
            </div>
            
        </div>

        <div className="flex justify-between items-center gap-8 mb-12">
            <div className="flex-none">
                
            </div>
            
            <div style={{ fontFamily: 'var(--font-roboto-mono)' }} className=" flex flex-col gap-6 max-w-[600px] text-[#FFFFFF] tracking-wide text-[18px]">
               <p className="m-0 mb-8 leading-relaxed text-base ">Core36 is a three-month, full-time program designed to prepare engineers to step into the technical core of the U.S. Treasury.</p>
                <p className="m-0 mb-8 leading-relaxed text-base">Committee-led selection by senior <span className="font-bold">technical leaders</span> from <span className="font-bold">Anthropic, Google DeepMind, Tesla, ElevenLabs, Harvard University, Stanford University</span>.</p>
                <p className="m-0 mb-8 leading-relaxed text-base">Nomination-only entry, however we know not everyone is embedded in existing networks so you can pitch to us [email]. </p>
                <p className="m-0 mb-8 leading-relaxed text-base">Built by founding engineers at <span className="font-bold">Gemini, OpenAI. </span></p>
            </div>
        </div>
    </div>

    {/* Pixelbar at the bottom */}
    <Image
      src="/pixelbar.png"
      alt="Pixelbar"
      width={1400}
      height={40}
      className="absolute bottom-0 left-0 w-screen h-[10vh] object-cover"

    />
        
    </section>
  );
}
