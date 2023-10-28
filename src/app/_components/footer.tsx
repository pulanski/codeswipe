import Logo from "./logo";

export function Footer() {
    return (
        <>
            <footer className="bg-[#152028] flex flex-col px-5 border-y-2 border-gray-700">
                <div className="self-center flex w-full max-w-[1290px] items-start justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                    <Logo />
                    <nav className="flex flex-col mt-1">
                        <h2 className="text-white text-xs font-bold leading-[133.33%] tracking-wide uppercase">
                            Articles
                        </h2>
                        <a
                            href="#"
                            className="text-slate-400 text-sm leading-[171.43%] tracking-normal mt-3.5"
                        >
                            Blog
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 text-sm leading-[171.43%] tracking-normal w-[118px] max-w-full mt-px"
                        >
                            Sandbox to Local
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 text-sm leading-[171.43%] tracking-normal w-[109px] max-w-full mt-1"
                        >
                            Realtime Collab
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 text-sm leading-[171.43%] tracking-normal mt-1"
                        >
                            Web-based IDE
                        </a>
                    </nav>
                    <nav className="flex flex-col mt-1">
                        <h2 className="text-white text-xs font-bold leading-[133.33%] tracking-wide uppercase">
                            Resources
                        </h2>
                        <a
                            href="#"
                            className="text-slate-400 text-sm leading-[171.43%] tracking-normal mt-3.5"
                        >
                            Docs
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 text-sm leading-[171.43%] tracking-normal mt-1"
                        >
                            Support
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 text-sm leading-[171.43%] tracking-normal mt-px"
                        >
                            Status
                        </a>
                    </nav>
                    <nav className="flex flex-col mt-1">
                        <h2 className="text-white text-xs font-bold leading-[133.33%] tracking-wide uppercase">
                            Contact
                        </h2>
                        <a
                            href="#"
                            className="text-slate-400 text-sm leading-[171.43%] tracking-normal mt-3.5"
                        >
                            GitHub
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 text-sm leading-[171.43%] tracking-normal w-16 max-w-full mt-1"
                        >
                            Discord
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 text-sm leading-[171.43%] tracking-normal mt-1"
                        >
                            Newsletter
                        </a>
                    </nav>
                    <nav className="flex flex-col mt-1">
                        <h2 className="text-white text-xs font-bold leading-[133.33%] tracking-wide uppercase">
                            Legal
                        </h2>
                        <a
                            href="#"
                            className="text-slate-400 text-sm leading-[171.43%] tracking-normal mt-3.5"
                        >
                            Security
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 text-sm leading-[171.43%] tracking-normal mt-px"
                        >
                            Privacy policy
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 text-sm leading-[171.43%] tracking-normal"
                        >
                            Terms of service
                        </a>
                    </nav>
                </div><p className="text-slate-400 text-center text-xs leading-[133.33%] tracking-normal self-center mt-32 mb-8">
                    Copyright © 2023 koalab
                </p>
            </footer>
        </>
    );
}

export default Footer;
