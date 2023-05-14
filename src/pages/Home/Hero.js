import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://www.capetownmagazine.com/media_lib/preview/226be2bc923500290cd9505dac304c9f.preview.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            <Typewriter
              options={{
                strings: ["Welcome To cafe-BISTRO"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="mb-5">
            Welcome to our cozy coffee shop, where the aroma of freshly brewed
            coffee fills the air and the warm ambiance invites you to relax and
            unwind. Our passion for coffee is reflected in every cup we serve,
            using only the highest quality beans and carefully crafted
            techniques to bring out the rich flavors and aromas that you know
            and love.
          </p>
          <button className="btn bg-amber-950">Explore Our Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
