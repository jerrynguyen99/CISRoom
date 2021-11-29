import React, { Component } from "react";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.userProfile = props.profile;
    this.user = props.session;
    this.state = {
      color: 'lightBlue',
      isContinue: true,
    }
  }
  render() {

    return (
      <>
        <div className="profile-page shadow-lg rounded-lg border-0">
          <section className="relative block h-500-px">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
            <div
              className=" top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
              style={{ transform: "translateZ(0)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
          <section className="relative py-16 bg-blueGray-200">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-80">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          alt="..."
                          src={this.user.getPhotoUrl()}
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20  max-w-180-px"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0">
                        <button
                          className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Connect
                        </button>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {this.userProfile.user_friend.list.length}
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Friends
                          </span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {this.userProfile.user_photos.length}
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Photos
                          </span>
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {this.userProfile.user_friend.list.length}
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Upvote
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                      {this.user.getDisplayName()}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                      {/* @{info.user_info.user_name} */}
                      @{this.userProfile.user_info.user_name}
                    </div>
                    <div className="mb-2 text-center text-blueGray-600 mt-10">
                      <i className="fas fa-street-view mr-2 text-lg text-blueGray-400"></i>
                      Live in <strong>{this.userProfile.user_contact_info.district}, {this.userProfile.user_contact_info.city}</strong>
                      {/* Live in <strong>{info.user_contact_info.district}, {info.user_contact_info.city}</strong> */}
                    </div>
                    <div className="mb-2 text-center text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                      Study at <strong>{this.userProfile.user_major.school}</strong>
                      {/* Study at <strong>{info.user_major.school}</strong> */}
                    </div>
                    <div className="mb-2 text-center text-blueGray-600">
                      <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                      Work at  <strong>{this.userProfile.user_job.company}</strong>
                      {/* Work at <strong>{info.user_job.company}</strong> */}
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          {this.userProfile.user_favourite.quote}
                        </p>
                        <a
                          href="#pablo"
                          className="font-normal text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Show more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
