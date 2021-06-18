/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:auto z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-2 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          
          {/* Brand */}
          <Link className={
            "py-2 flex items-center text-xl uppercase font-bold leading-snug text-blueGray-500 hover:text-blueGray-600"
          }
            to="/"
          >
            <i className={
              "fas fa-gamepad text-lg text-blueGray-300 opacity-75"
            }
            ></i>
          </Link>

          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Profile */}
            <Link className={
              "py-2 flex items-center text-xl uppercase font-bold leading-snug " +
              (window.location.href.indexOf("/user/profile") !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-500 hover:text-blueGray-600")
            }
              to="/user/profile"
            >
              <i className={
                "fas fa-user-tie   text-lg " +
                (window.location.href.indexOf("/user/profile") !== -1
                  ? "opacity-75"
                  : "text-blueGray-300"
                )
              }
              ></i>
            </Link>

            {/* Contact */}
            <Link className={
              "py-2 flex items-center text-xl uppercase font-bold leading-snug " +
              (window.location.href.indexOf("/user/contact") !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-500 hover:text-blueGray-600")
            }
              to="/user/contact"
            >
              <i className={
                "fas fa-address-book text-lg " +
                (window.location.href.indexOf("/user/contact") !== -1
                  ? "opacity-75"
                  : "text-blueGray-300"
                )
              }
              ></i>
            </Link>


            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Mesenger */}
            <Link className={
              "py-2 flex items-center text-xl uppercase font-bold leading-snug " +
              (window.location.href.indexOf("/user/messenger") !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-500 hover:text-blueGray-600")
            }
              to="/user/messenger"
            >
              <i className={
                "fas fa-comment-dots text-lg " +
                (window.location.href.indexOf("/user/messenger") !== -1
                  ? "opacity-75"
                  : "text-blueGray-300"
                )
              }
              ></i>
            </Link>


            {/* Cinema */}
            <Link className={
              "py-2 flex items-center text-xl uppercase font-bold leading-snug " +
              (window.location.href.indexOf("/user/cinema") !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-500 hover:text-blueGray-600")
            }
              to="/user/cinema"
            >
              <i className={
                "fas fa-tv text-lg " +
                (window.location.href.indexOf("/user/cinema") !== -1
                  ? "opacity-75"
                  : "text-blueGray-300"
                )
              }
              ></i>
            </Link>


            {/* Music */}
            <Link className={
              "py-2 flex items-center text-xl uppercase font-bold leading-snug " +
              (window.location.href.indexOf("/user/music") !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-500 hover:text-blueGray-600")
            }
              to="/user/music"
            >
              <i className={
                "fas fa-music text-lg " +
                (window.location.href.indexOf("/user/music") !== -1
                  ? "opacity-75"
                  : "text-blueGray-300"
                )
              }
              ></i>
            </Link>


            {/* Maps */}
            <Link className={
              "py-2 flex items-center text-xl uppercase font-bold leading-snug " +
              (window.location.href.indexOf("/user/maps") !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-500 hover:text-blueGray-600")
            }
              to="/user/maps"
            >
              <i className={
                "fas fa-map-marked text-lg " +
                (window.location.href.indexOf("/user/maps") !== -1
                  ? "opacity-90"
                  : "text-blueGray-300"
                )
              }
              ></i>
            </Link>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Settings */}
            <Link className={
              "py-2 flex items-center text-xl uppercase font-bold leading-snug " +
              (window.location.href.indexOf("/user/settings") !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-500 hover:text-blueGray-600")
            }
              to="/user/settings"
            >
              <i className={
                "fas fa-tools text-lg " +
                (window.location.href.indexOf("/user/settings") !== -1
                  ? "opacity-75"
                  : "text-blueGray-300"
                )
              }
              ></i>
            </Link>


            {/* Light toggle */}
            <Link className={
              "py-2 flex items-center text-xl uppercase font-bold leading-snug " +
              (window.location.href.indexOf("/user/settings") !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-500 hover:text-blueGray-600")
            }
              to="/user/settings"
            >
              <i className={
                "fas fa-lightbulb text-lg " +
                (window.location.href.indexOf("/user/settings") !== -1
                  ? "opacity-75"
                  : "text-blueGray-300"
                )
              }
              ></i>
            </Link>

          </div>
        </div>
      </nav>
    </>
  );
}
