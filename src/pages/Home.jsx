import React from "react";
import Hero from "../components/Hero"; // existing
import About from "../components/About"; // NEW

const Home = () => {
  return (
    <div>
      <Hero /> {/* existing */}
      <About /> {/* ADD THIS */}
    </div>
  );
};

export default Home;
