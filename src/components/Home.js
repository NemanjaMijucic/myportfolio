import React from "react";
import image from "../krs.jpeg";

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt="me"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-blue-100 font-bold cursive leading-none lg:leading-snug home-name">
          Aloha, I'am Nemanja.
        </h1>
      </section>
    </main>
  );
};

export default Home;
