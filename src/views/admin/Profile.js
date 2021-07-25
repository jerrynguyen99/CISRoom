import React from "react";

// components

import Profile from "components/Profile/Profile";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <Profile />
        </div>
        <div className="w-full mb-12 px-4">
          <Profile color="dark" />
        </div>
      </div>
    </>
  );
}
