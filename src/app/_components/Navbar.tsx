import Logo from "./logo";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="flex-col fill-zinc-800 overflow-hidden max-md:max-w-full flex h-20 w-full self-stretch " style={{
      background: 'linear-gradient(179.73deg, rgb(36 63 69) 0.33%, #212E38 99.85%)',
    }}>
      <div className="flex items-start align-center justify-between">
        <div className="mt-2 flex items-start justify-between align-center gap-5 self-start max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <Logo />
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
    </nav>
  );
}
