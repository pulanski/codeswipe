import Image from "next/image";
import React from "react";
import { Button } from "../_components/ui/button";

export default function LandingPage() {
  return (
    <>
      <div className="flex  flex-col border-2 border-pink-300 bg-black bg-opacity-40">
        <section className="relative mt-20 max-w-[1092px] self-center text-center text-9xl font-extrabold leading-[142.7328px] text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Swipe Right
          <br />
          for Code Quality
        </section>
        <section className="relative mt-12 flex w-[233px] max-w-full flex-col self-center rounded-3xl p-0.5 shadow-sm max-md:mt-10">
          <div className="w-full grow self-stretch rounded-3xl bg-rose-600 bg-opacity-90 px-5 py-4 text-center text-xl leading-6 tracking-normal text-white">
            Create account
          </div>
        </section>
      </div>
      <footer className="flex w-full flex-col self-stretch bg-neutral-900 py-7 pl-3.5 pr-5 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.12)] max-md:max-w-full">
        <div className="flex w-full max-w-[1130px] flex-col self-center max-md:max-w-full">
          <div className="mr-14 w-[724px] max-w-full self-end text-base leading-5 text-neutral-300 max-md:mr-2.5">
            We value your privacy. We and our partners use trackers to measure
            the audience of our website and to provide you with offers and
            improve our own Tinder marketing operations.
          </div>
          <div className="ml-14 w-[413px] max-w-full self-center text-base leading-5 text-neutral-300">
            You can withdraw your consent at any time in your settings.
          </div>
          <div className="mt-4 flex w-full items-start justify-between gap-5 self-center max-md:max-w-full max-md:flex-wrap">
            <div className="flex w-[602px] max-w-full items-start justify-between gap-5 self-stretch max-md:flex-wrap">
              <div className="mt-4 shrink-0 grow basis-auto self-end text-base leading-5 text-neutral-300">
                More info on cookies and providers we use.
              </div>
              <div className="flex w-[252px] shrink-0 grow basis-auto flex-col self-end rounded-2xl p-0.5 shadow-sm">
                <div className="flex w-full grow flex-col self-stretch rounded-2xl border-2 border-solid border-gray-600">
                  <div className="w-full grow self-stretch rounded-2xl bg-gray-100 bg-opacity-10 px-5 py-2.5 text-center text-xl leading-6 tracking-normal text-neutral-300">
                    Personalize my choices
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between gap-1 self-stretch">
              <div className="flex flex-1 flex-col rounded-2xl p-0.5 shadow-sm">
                <div className="flex w-full grow flex-col self-stretch rounded-2xl border-2 border-solid border-gray-600">
                  <div className="w-full grow self-stretch whitespace-nowrap rounded-2xl bg-gray-100 bg-opacity-10 px-5 py-2.5 text-center text-xl leading-6 tracking-normal text-neutral-300 max-md:pl-px">
                    I accept
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col rounded-2xl p-0.5 shadow-sm">
                <div className="flex w-full grow flex-col self-stretch rounded-2xl border-2 border-solid border-gray-600">
                  <div className="w-full grow self-stretch whitespace-nowrap rounded-2xl bg-gray-100 bg-opacity-10 px-5 py-3 text-center text-xl leading-6 tracking-normal text-neutral-300 max-md:pl-px">
                    I decline
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
