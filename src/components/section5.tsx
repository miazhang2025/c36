"use client";
import React from 'react';





const Section5: React.FC = () => {
  return (
    <section className="h-auto bg-[#0053A2] !py-24 !px-6 flex flex-col items-center !pb-[200px] !pt-[0px] relative" id="section5">
      <div className="w-[90%] max-w-[1200px]">
        <div className="flex justify-between items-center gap-8 mb-12">
          <div className="flex-none">
            <h1 style={{ fontFamily: 'var(--font-kode-mono)' }} className="text-8xl text-[#FFFFFF] m-0 font-bold tracking-wider !mb-[20px]">TL;DR</h1>
          </div>
          <div className="flex-1 max-w-[600px]">
          </div>
        </div>
        <div className="flex justify-between items-center gap-8 mb-12">
          <div className="flex-none"></div>
          <div style={{ fontFamily: 'var(--font-roboto-mono)' }} className="flex flex-col gap-6 max-w-[600px] text-[#FFFFFF] tracking-wide text-[18px] mb-[100px]">
            <div className="bg-white rounded-lg shadow-md p-6 text-[#222]">
              <h3 className="text-2xl font-bold mb-6 text-[#0053A2]">Frequently Asked Questions</h3>
              <div className="mb-6">
                <p className="font-bold mb-1">What is Animate UI?</p>
                <p>Animate UI is a library of animated UI components for React, built on top of Radix UI primitives.</p>
              </div>
              <div className="mb-6">
                <p className="font-bold mb-1">How is it different from other libraries?</p>
                <p>Animate UI focuses on smooth, customizable animations and leverages Radix UI for accessibility and composability.</p>
              </div>
              <div className="mb-6">
                <p className="font-bold mb-1">Is Animate UI free to use?</p>
                <p>Yes, Animate UI is open source and free to use.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
