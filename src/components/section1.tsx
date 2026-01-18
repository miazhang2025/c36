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
               <p className="m-0 mb-8 leading-relaxed text-base ">We back founder-level engineers <span className='font-bold'>who will transform the US Treasury</span>. On February 1 they will join an intensive eight week lab. By April 15 they begin building something extraordinary - the AI-first engineering team for our $30tn economy</p>
                <p className="m-0 mb-8 leading-relaxed text-base">To be selected you must be nominated (you can also ask for nominations on X). The selection committee are <span className="font-bold">Tech Leads at Gemini, Anthropic, Tesla and Stanford</span></p>
                <p className="m-0 mb-8 leading-relaxed text-base">Core36 gives $195k to engineers building AI that rearchitects US finance. <span className="font-bold">Nominate the engineer who belongs here</span></p>
                <div className="flex justify-start !pt-8">
          <Link href="https://5adne.share.hsforms.com/2mJaj2LW8T-iKhXQGwuztlQ"  className="flex justify-center items-center border border-[#D9D9DF] text-[#D9D9DF]  text-[14px] tracking-[0.2em] font-mono hover:bg-[#D9D9DF] hover:text-[#0053A2] transition-all uppercase font-[var(--font-noto-sans)] max-w-[154px] h-[41px] w-full bg-transparent shadow-[3px_3px_0px_0px_#0053a233]">
            NOMINATION
            </Link>
          </div>
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
