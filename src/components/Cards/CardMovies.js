import React from "react";
import PropTypes from "prop-types";

export default function CardMovies({
  movieSubtitle,
  movieTitle,
  movieCalendar,
  movieCalendarColor,
  movieTime,
  movieIconName,
  movieIconColor,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {movieSubtitle}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {movieTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  movieIconColor
                }
              >
                <i className={movieIconName}></i>
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            <span className={movieCalendarColor + " mr-2"}>
              <i className={ "far fa-calendar-alt " }></i>{" "}
              {movieCalendar}
            </span>
            <span className="whitespace-nowrap">{movieTime}</span>
          </p>
        </div>
      </div>
    </>
  );
}

CardMovies.defaultProps = {
  movieSubtitle: "Lotte Cinema",
  movieTitle: "Harry Potter and the Chamber of Secrets",
  movieCalendar: "14/06/2021",
  movieCalendarColor: "text-emerald-500" ,
  movieTime: "11:00 PM",
  movieIconName: "fas fa-film",
  movieIconColor:"bg-red-500", 
};

CardMovies.propTypes = {
  movieSubtitle: PropTypes.string,
  movieTitle: PropTypes.string,
  movieCalendar: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  movieCalendarColor: PropTypes.string,
  movieTime: PropTypes.string,
  movieIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  movieIconColor: PropTypes.string,
};
