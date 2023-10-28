import Image from "next/image";
import React from "react";
import { Button } from "../_components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex flex-col bg-white">
      <header className="flex w-full flex-col self-stretch bg-white shadow-sm max-md:max-w-full">
        <nav className="flex w-full flex-col self-stretch bg-black bg-opacity-40 py-px max-md:max-w-full">
          <div className="relative flex min-h-[586px] w-full max-w-[1511px] flex-col self-center overflow-hidden pb-16 pl-4 pr-2.5 pt-3.5 max-md:max-w-full">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d26b0938-dcb0-410f-a6b3-1235ceaae25e?apiKey=cd453e3e4b264277a4022408ac10f053&"
              className="absolute inset-0 z-[-1] h-full w-full object-cover object-center"
              alt=""
              height={400}
              width={400}
            />
            <div className="relative flex w-full max-w-[1485px] items-start justify-between gap-5 self-center max-md:max-w-full max-md:flex-wrap">
              <div className="mt-2 flex items-start justify-between gap-5 self-start max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="my-auto self-start text-2xl font-bold leading-5 text-white">
                  :D
                </div>
                <div className="my-auto text-3xl font-bold leading-5 text-white">
                  CodeSwipe
                </div>
                <a
                  href="/learn"
                  className="my-auto self-center text-xl leading-6 text-white"
                >
                  Learn
                </a>
                <a
                  href="#"
                  className="my-auto self-start text-xl leading-6 text-white"
                >
                  Safety
                </a>
                <a href="#" className="my-auto text-xl leading-6 text-white">
                  Support
                </a>
              </div>
              <Button>Log in</Button>
              <div className="mt-2 flex items-start gap-5 self-start">
                <div className="flex w-[120px] flex-col self-stretch rounded-2xl shadow-sm">
                  <div className="flex w-full grow flex-col self-stretch rounded-2xl bg-white">
                    <div className="w-full grow self-stretch rounded-2xl bg-gray-100 bg-opacity-20 px-3 py-2 pr-5 text-center text-2xl font-bold leading-7 tracking-normal text-black">
                      Log in
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
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
      </main>
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
    </div>
  );
}
