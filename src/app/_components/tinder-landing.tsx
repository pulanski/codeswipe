import Image from 'next/image';

export function TinderLanding() {
    return (
        <div className="bg-white flex flex-col">
            <header className="flex-col overflow-hidden self-stretch relative flex min-h-[750px] w-full max-md:max-w-full">
                <Image
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c6c1cea1-f159-41fb-b927-2592b82ba263?apiKey=162a1ab9881e4de786cc07e85ef5286d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6c1cea1-f159-41fb-b927-2592b82ba263?apiKey=162a1ab9881e4de786cc07e85ef5286d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6c1cea1-f159-41fb-b927-2592b82ba263?apiKey=162a1ab9881e4de786cc07e85ef5286d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6c1cea1-f159-41fb-b927-2592b82ba263?apiKey=162a1ab9881e4de786cc07e85ef5286d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6c1cea1-f159-41fb-b927-2592b82ba263?apiKey=162a1ab9881e4de786cc07e85ef5286d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6c1cea1-f159-41fb-b927-2592b82ba263?apiKey=162a1ab9881e4de786cc07e85ef5286d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6c1cea1-f159-41fb-b927-2592b82ba263?apiKey=162a1ab9881e4de786cc07e85ef5286d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6c1cea1-f159-41fb-b927-2592b82ba263?apiKey=162a1ab9881e4de786cc07e85ef5286d&" className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                />
                <nav className="relative bg-black bg-opacity-40 self-stretch flex w-full flex-col pt-8 max-md:max-w-full">
                    <div className="self-center flex w-full max-w-[1437px] flex-col px-5 max-md:max-w-full">
                        <div className="self-center flex w-full max-w-[1263px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                            <div className="flex items-start justify-between gap-5 self-start max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                                <a href="#" className="text-white text-xl leading-6 self-start">
                                    Products
                                </a>
                                <a href="#" className="text-white text-xl leading-6 self-start">
                                    Learn
                                </a>
                                <a href="#" className="text-white text-xl leading-6 self-start">
                                    Safety
                                </a>
                                <a href="#" className="text-white text-xl leading-6 self-start">
                                    Support
                                </a>
                                <a href="#" className="text-white text-xl leading-6 self-start whitespace-nowrap">
                                    Download
                                </a>
                            </div>
                            <div className="flex w-[211px] max-w-full items-start justify-between gap-5 self-start">
                                <div className="text-white text-center text-xl leading-6 tracking-normal self-stretch">
                                    Language
                                </div>
                                <div className="text-zinc-800 text-center text-xl leading-6 tracking-normal self-stretch whitespace-nowrap">
                                    Log in
                                </div>
                            </div>
                        </div>
                        <div className="text-white text-base leading-5 mt-2.5">Tinder</div>
                    </div>
                </nav>
            </header>
            <main className="self-stretch flex w-full flex-col mt-36 px-5 max-md:max-w-full max-md:mt-10">
                <h1 className="text-white text-center text-9xl leading-[142.7328px] self-center max-w-[714px] max-md:max-w-full max-md:text-4xl">
                    Swipe Right®
                </h1>
                <div className="shadow-sm self-center flex w-[233px] max-w-full flex-col mt-10 p-0.5 rounded-3xl max-md:mt-10">
                    <a href="#" className="text-white text-center text-xl leading-6 tracking-normal bg-gray-100 bg-opacity-20 self-stretch w-full grow px-5 py-4 rounded-3xl">
                        Create account
                    </a>
                </div>
                <div className="shadow-[0px_0px_5px_0px_rgba(0,0,0,0.12)] bg-neutral-900 self-stretch flex w-full flex-col mt-16 px-5 py-7 max-md:max-w-full max-md:mt-10">
                    <div className="self-center flex w-[780px] max-w-full flex-col">
                        <div className="text-neutral-300 text-base leading-5 w-[724px] max-w-full self-start">
                            We value your privacy. We and our partners use trackers to measure the audience of our website and to provide you with offers and improve our own Tinder marketing operations.
                        </div>
                        <div className="text-neutral-300 text-base leading-5 w-[413px] max-w-full ml-16 self-start max-md:ml-2.5">
                            You can withdraw your consent at any time in your settings.
                        </div>
                        <div className="flex w-full items-start justify-between gap-1 mt-4 self-start max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                            <div className="shadow-sm self-stretch flex flex-col w-[252px] p-0.5 rounded-2xl">
                                <div className="self-stretch flex w-full grow flex-col rounded-2xl border-2 border-solid border-gray-600">
                                    <a href="#" className="text-neutral-300 text-center text-xl leading-6 tracking-normal bg-gray-100 bg-opacity-10 self-stretch w-full grow px-5 py-2.5 rounded-2xl">
                                        Personalize my choices
                                    </a>
                                </div>
                            </div>
                            <div className="shadow-sm self-stretch flex flex-col w-[110px] p-0.5 rounded-2xl">
                                <div className="self-stretch flex w-full grow flex-col rounded-2xl border-2 border-solid border-gray-600">
                                    <a href="#" className="text-neutral-300 text-center text-xl leading-6 tracking-normal self-stretch bg-gray-100 bg-opacity-10 w-full grow px-5 py-2.5 rounded-2xl whitespace-nowrap max-md:pl-px">
                                        I accept
                                    </a>
                                </div>
                            </div>
                            <div className="shadow-sm self-stretch flex flex-col w-[113px] p-0.5 rounded-2xl">
                                <div className="self-stretch flex w-full grow flex-col rounded-2xl border-2 border-solid border-gray-600">
                                    <a href="#" className="text-neutral-300 text-center text-xl leading-6 tracking-normal self-stretch bg-gray-100 bg-opacity-10 w-full grow px-5 py-3 rounded-2xl whitespace-nowrap max-md:pl-px">
                                        I decline
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TinderLanding;