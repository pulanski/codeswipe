import Navbar from "../_components/Navbar";
import Footer from "../_components/footer";
import { Button } from "../_components/ui/button";

export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col bg-black bg-opacity-40">
        <Navbar />
        <section className="relative mt-20 max-w-[1092px] self-center text-center text-9xl font-extrabold leading-[142.7328px] text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Swipe Right
          <br />
          for Code Quality
        </section>
        <section className="relative mt-12 flex w-[233px] max-w-full flex-col self-center rounded-3xl p-0.5 shadow-sm max-md:mt-10">
          <Button className="w-full grow self-stretch rounded-3xl bg-rose-600 hover:bg-rose-800 bg-opacity-90 px-5 py-4 text-center text-xl leading-6 tracking-normal text-white m-4">
            Create account
          </Button>
        </section>
      </div>
      <Footer />
    </>
  );
}
