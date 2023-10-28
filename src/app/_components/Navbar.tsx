import React from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="flex h-20 w-full flex-col self-stretch border-2 py-px max-md:max-w-full">
      <div className="relative flex min-h-[586px] w-full max-w-[1511px] flex-col self-center overflow-hidden pb-16 pl-4 pr-2.5 pt-3.5 max-md:max-w-full">
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
              href="/safety"
              className="my-auto self-start text-xl leading-6 text-white"
            >
              Safety
            </a>
            <a href="/support" className="my-auto text-xl leading-6 text-white">
              Support
            </a>
          </div>

          <div className="mt-2 flex items-start gap-5 self-start">
            <Button className="bg-white text-black">Log in</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
