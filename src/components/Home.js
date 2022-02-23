import React from "react";
// import image from "../portfolio_background.jpg";
import city from "../city.gif";
// import image from "../laptopbackground.jpg";
export default function Home() {
  return (
    <main>
      <img
        src={city}
        alt="city"
        className=" absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-left min-h-screen pt-12 lg:pt-12 px-8">
        <h1 className=" text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name ">
          Hello, I'm Elis.
        </h1>
      </section>
    </main>
  );
}
