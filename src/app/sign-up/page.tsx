import Image from "next/image";
import React from "react";

export default function Login() {
  return (
    <div className="flex max-h-full flex-col bg-neutral-900">
      <header className="flex w-full flex-col self-stretch bg-neutral-900 pb-14 pt-6 max-md:max-w-full">
        <nav className="flex w-full flex-col self-end px-5 max-md:max-w-full">
          <div className="flex w-full max-w-[1437px] items-start gap-1.5 self-center max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <h1 className="mt-2.5 self-stretch text-3xl font-bold leading-5 text-white">
              LOGO
            </h1>
            <h1 className="my-auto text-3xl font-bold leading-5 text-white">
              CodeSwipe
            </h1>
            <div className="mt-1 flex h-10 w-[151px] flex-col self-start rounded-2xl shadow-sm" />
          </div>
        </nav>
        <hr className="mt-7 flex min-h-[1px] w-full flex-col self-stretch bg-gray-200 max-md:max-w-full" />
        <h2 className="mt-5 w-[323px] max-w-full self-center text-4xl font-medium capitalize leading-10 tracking-normal text-gray-100">
          Create account
        </h2>
      </header>
      <main className="mt-4 flex w-full max-w-[1158px] flex-row self-center  max-md:mt-10 max-md:max-w-full">
        <div className="fborder-2 flex">
          <section className="w-full max-w-[1157px] self-center px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex w-[46%] flex-col items-stretch max-md:ml-0 max-md:w-full">
                <div className="flex grow flex-col max-md:mt-10 max-md:max-w-full">
                  <label
                    htmlFor="firstName"
                    className="text-base leading-5 tracking-normal text-gray-100"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="mt-2 flex h-12 w-[510px] flex-col self-stretch rounded-md border border-solid border-gray-700 bg-black text-white max-md:max-w-full"
                  />
                  <label
                    htmlFor="email"
                    className="mt-2 self-start whitespace-nowrap text-base leading-5 tracking-normal text-gray-100"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-2 flex h-12 w-[510px] flex-col self-stretch rounded-md border border-solid border-gray-700 bg-black text-white max-md:max-w-full"
                  />
                  <label
                    htmlFor="birthday"
                    className="mt-2 text-base leading-5 tracking-normal text-gray-100"
                  >
                    Birthday
                  </label>
                  <div className="mt-3 flex w-[258px] max-w-full items-start gap-1.5 self-start">
                    <div className="flex w-[170px] max-w-full items-start gap-1.5 self-start">
                      <div className="flex  flex-1 flex-col rounded-md p-px shadow-sm">
                        <input
                          type="text"
                          id="day"
                          className="flex h-12 w-20 flex-col self-stretch rounded-lg border border-solid border-gray-700 bg-black text-white"
                        />
                      </div>
                      <input
                        type="text"
                        id="month"
                        className="flex h-12 w-20 flex-col self-stretch rounded-lg border border-solid border-gray-700 bg-black text-white"
                      />
                      <input
                        type="text"
                        id="year"
                        className="flex h-12 w-20 flex-col self-stretch rounded-lg border border-solid border-gray-700 bg-black text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="ml-5 flex w-[54%] flex-col items-stretch max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
            <label
              htmlFor="profilePhoto"
              className="text-base leading-5 tracking-normal text-gray-100"
            >
              Profile Photo
            </label>
            <div className="mt-6 flex w-[325px] max-w-full items-start gap-1 self-start max-md:ml-2 max-md:justify-center"></div>
            <div className="w-[584px] max-w-full self-start">
              <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex w-[96%] flex-col items-stretch max-md:ml-0 max-md:w-full">
                  <div className="flex grow items-start gap-1 max-md:mt-10 max-md:justify-center"></div>
                </div>
              </div>
            </div>
          </div>
          <footer className="mt-3.5 flex w-[809px] max-w-full items-start justify-between gap-1 self-start px-5 max-md:flex-wrap max-md:justify-center">
            <p className="text-center text-sm leading-5 text-neutral-300">
              Add at least 2 photos to continue
            </p>
          </footer>
        </section>
      </main>

      <div className="mt-10 flex w-[500px] max-w-full items-start gap-1 self-start px-5 max-md:flex-wrap max-md:justify-center">
        <div className="flex h-10 flex-1 flex-col rounded-2xl shadow-sm" />
        <div className="flex h-10 flex-1 flex-col rounded-2xl shadow-sm" />
        <div className="flex h-10 flex-1 flex-col rounded-2xl shadow-sm" />
      </div>
      <div className="mt-9 w-[624px] max-w-full self-start px-5">
        <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex w-2/5 flex-col items-stretch max-md:ml-0 max-md:w-full">
            <div className="flex h-10 w-[230px] flex-col rounded-2xl shadow-sm max-md:mt-10" />
          </div>
          <div className="ml-5 flex w-3/5 flex-col items-stretch max-md:ml-0 max-md:w-full">
            <div className="flex w-[343px] grow flex-col max-md:mt-10">
              <div className="flex w-[171px] max-w-full flex-col self-center rounded-3xl bg-zinc-800">
                <div className="flex w-full grow flex-col self-stretch rounded-3xl bg-gray-100 bg-opacity-20 px-5 pb-5 pt-3.5">
                  <p className="self-center whitespace-nowrap text-center text-xl leading-6 tracking-normal text-gray-500">
                    Continue
                  </p>
                </div>
              </div>
              <div className="mt-7 flex w-full grow flex-col self-stretch rounded-3xl bg-gray-100 bg-opacity-10 px-5 py-3.5">
                <p className="w-full self-center text-center text-xl leading-6 tracking-normal text-blue-500">
                  Already have an account? Log in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
