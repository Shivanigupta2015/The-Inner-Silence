import Link from "next/link";
import React from "react";

const Serviceslist = () => {
  return (
    <div className="bg-gray-900 py-12">
      <div>
        <div className="text-center font-sans">
          <h2 className="text-base text-teal-300 font-semibold tracking-wide uppercase">
            Start Your Journey
          </h2>
          <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            In silence, We meet our True Self!
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">test</div>
      </div>
      <div className="text-center mt-20">
        <Link className="font-serif px-4 py-2 rounded bg-white hover:bg-gray-100 transition duration-100 border-neutral-500 text-neutral-700" href={"/Courses"}>Join Free Meditation</Link>
      </div>
    </div>
  );
};

export default Serviceslist;
