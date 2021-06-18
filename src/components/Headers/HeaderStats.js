import React from "react";

// components

import CardMovies from "components/Cards/CardMovies";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12 ease-linear transition-all duration-150">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}  
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardMovies
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardMovies
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardMovies
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardMovies
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
