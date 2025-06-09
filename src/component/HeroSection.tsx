import Link from "next/link";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          The Inner Silence
        </h1>
        <div className="m-4 font-sans text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          <p>
            Inner silence refers to a state of deep mental stillness where the
            usual stream of thoughts, worries, judgments, and mental chatter is
            quieted or completely absent. It is a form of mental peace where
            you&apos;re fully present, aware, and not being pulled by past regrets or
            future anxieties
          </p>
          <div className="m-4">
            <Link href={"/Services"}>
              <button className="border rounded-xl p-2 shadow-2xl shadow-gray-600">Look out here</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
