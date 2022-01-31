import React from "react";
import PropTypes from "prop-types";

export default function CardGames({
  playerName,
  playerCredit,
  playerArrow,
  playerPercentage,
  playerPercentColor,
  playerDescripiron,
  playerIconName,
  playerIconColor,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {playerName}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {playerCredit}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  playerIconColor
                }
              >
                <i className={playerIconName}></i>
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            <span className={playerPercentColor + " mr-2"}>
              <i
                className={
                  playerArrow === "up"
                    ? "fas fa-arrow-up"
                    : playerArrow === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "}
              {playerPercentage}%
            </span>
            <span className="whitespace-nowrap">{playerDescripiron}</span>
          </p>
        </div>
      </div>
    </>
  );
}

CardGames.defaultProps = {
  playerName: "Player 1",
  playerCredit: "0",
  playerArrow: "up",
  playerPercentage: "0",
  playerPercentColor: "text-emerald-500",
  playerDescripiron: "No data received",
  playerIconName: "fas fa-trophy",
  playerIconColor: "bg-red-500",
};

CardGames.propTypes = {
    playerName: PropTypes.string,
    playerCredit: PropTypes.string,
    playerArrow: PropTypes.oneOf(["up", "down"]),
    playerPercentage: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  playerPercentColor: PropTypes.string,
  playerDescripiron: PropTypes.string,
  playerIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  playerIconColor: PropTypes.string,
};
