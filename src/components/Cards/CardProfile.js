import React, { Component } from "react";

// components
export default class CardProfile extends Component {

  constructor(props) {
    super(props);
    this.user = props.session;
    
    this.isContinue = !!props.session;
  }
  render() {
    return (
      <>
      <h1>meow đang đóng lại debug gòi khom hỏi nhiều</h1>
        {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <img
                    alt="..."
                    src={getCurrentUser().photoURL}
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 min-w-150-px max-w-160-px"
                  />
                </div>
              </div>
              <div className="text-center mt-28">
                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  {getCurrentUser().displayName}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                  @{info.user_info.user_name}
                </div>
                <div className="mb-2 text-left text-blueGray-600 mt-10">
                  <i className="fas fa-street-view mr-2 text-lg text-blueGray-400"></i>
                  Live in <strong>{info.user_contact_info.district}, {info.user_contact_info.city}</strong>
                </div>
                <div className="mb-2 text-left text-blueGray-600">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  Study at <strong>{info.user_major.school}</strong>
                </div>
                <div className="mb-2 text-left text-blueGray-600">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  Work at <strong>{info.user_job.company}</strong>
                </div>
              </div>
              <div className="w-full px-4 text-center mt-2">
                <div className="flex justify-center py-4 lg:pt-2 pt-2">
                  <div className="mr-4 ml-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      {info.user_friend.list.length}
                    </span>
                    <span className="text-sm text-blueGray-400">Friends</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      {info.user_photos.length}
                    </span>
                    <span className="text-sm text-blueGray-400">Photos</span>
                  </div>
                  <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      {info.user_friend.list.length}
                    </span>
                    <span className="text-sm text-blueGray-400">Upvote</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full text-justify lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    {info.user_favourite.quote}
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
        </div> */}
      </> 
    )
    // : (<Button autoFocus={true} onFocus={LoadingState}></Button>);
  
  }
}
