import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full h-[400px] object-cover">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3d6cf7c4-ad17-457a-b6cf-ea952926ba74/d9cacfda-1059-447d-be22-bdb885bc1f05/AR-es-20230206-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white">My shows</h1>
        </div>
      </div>
      <SavedShows/>
    </>
  );
};

export default Account;
