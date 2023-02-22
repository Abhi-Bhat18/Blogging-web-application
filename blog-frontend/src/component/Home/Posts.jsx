import React from "react";
import PostCard from "./PostCard";
import android from "../../assets/Images/android dev.jpg";
import development from "../../assets/Images/development.jpg";
import ARvr from "../../assets/Images/ARvr.jpg";
import blgHero from "../../assets/Images/blg-hero.jpg";
const Posts = () => {
  return (
    <div className="flex w-[85vw] justify-between items-center flex-wrap lg:px-5 my-5 space-y-5  bg-black py-5 rounded-md">
      <h2 className="text-center text-2xl w-full font-mono">
        Trendig Software Discussions
      </h2>

      <PostCard imageURL={android}/>
      <PostCard imageURL={development}/>
      <PostCard imageURL={blgHero} />
      <PostCard imageURL={ARvr}/>
    </div>
  );
};

export default Posts;
