import { updateProfile } from "helpers/auth";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxes, faImages } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@chatscope/chat-ui-kit-react";
import LoadingCard from "./LoadingCard";

// components
export default class CardSettings extends Component {
    constructor(props) {
        super(props);
        this.userProfile = props.profile;
        this.user = props.session;
        this.state = {
            color: 'lightBlue',
            error: '',
            isContinue: true,
            firstName: this.user.getDisplayName().split(' ').slice(0, -1).join(' '),
            lastName: this.user.getDisplayName().split(' ').slice(-1).join(' '),
            email: this.user.email,
        }
    }

    saveBtnClicked = async (event) => {
        event.preventDefault();
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        try {
            let userFullName = this.firstName.replace(/\s+/g, " ").trim() + " " + this.lastName.replace(/\s+/g, " ").trim();
            let userUrlPhoto = "https://i.redd.it/tfi7qlekduo31.jpg";
            let userPhoneNumber = "0868817287"
            await updateProfile(userFullName, userUrlPhoto, userPhoneNumber);
        } catch (e) {
            this.setState({ error: e.message });
        }
        this.setState({ error: "Your setting has been saved. Reload automatically in 3..2..1 " });

    }

    ChangePhotoURLButtonClicked = async (event) => {
        event.preventDefault();
        setTimeout(() => this.setState({ error: "" }), 3000);
        this.setState({ error: "//TO-DO: Your profile picture has changed successfully" });
    }

    ChangePhotoToDefaultButtonClicked = async (event) => {
        event.preventDefault();
        setTimeout(() => this.setState({ error: "" }), 3000);
        this.setState({ error: "//TO-DO: Your profile picture has changed to default"});
    }

    // LoadingState = async (event) => {
    //     event.preventDefault();
    //     setTimeout(() => { setError(""); setIsContinue(true) }, 1000);
    //     setError("Loading your profile...")
    //     while (!info) {
    //         setInfo(userProfile);
    //         console.log("step bro, i'm stuck in loop")
    //     }
    // }

    render() {

        return (
            <>
                <div
                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
                            <div className="relative">
                                {this.state.error ? (
                                    <span className={
                                        "text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-" +
                                        this.state.color + "-600 bg-" +
                                        this.state.color + "-200 uppercase last:mr-0 mr-1"}
                                    >
                                        {this.state.error}
                                    </span>
                                ) : null}
                            </div>
                            <Button border icon={<FontAwesomeIcon icon={faBoxes} />} onClick={this.saveBtnClicked}>Update</Button>
                        </div>
                    </div>
                    {!this.state.isContinue ? (<><Button autoFocus={true} onFocus={this.LoadingState}></Button> <LoadingCard /> </>) : (
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form>
                                <h6 className="text-blueGray-400 text-sm mt-3 mb-2 font-bold uppercase">
                                    User Information
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Username
                                            </label>
                                            <input
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                defaultValue={this.userProfile.user_info.user_name}
                                            />
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                onChange={(e) => this.setState({firstName: e.target.value})}
                                                defaultValue={this.state.firstName}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                onChange={(e) => this.setState({lastName: e.target.value})}
                                                defaultValue={this.state.lastName}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                defaultValue={this.state.email}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Input for change"
                                                autoComplete="off"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3 justify-center">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Profile Picture
                                            </label>
                                            <div className="profile-picture-setting">
                                                <div className="picture-setting">
                                                    <img
                                                        src={this.user.getPhotoUrl()}
                                                        alt={this.user.getDisplayName()}
                                                        className="shadow rounded-full picture-setting align-middle border-none max-w-160-px" />
                                                </div>
                                                <div className="change-picture-button">
                                                    <Button className="w-full lg:w-10/12" border
                                                        icon={<FontAwesomeIcon icon={faImages} />}
                                                        onClick={this.ChangePhotoURLButtonClicked}>Change image</Button>
                                                </div>
                                                <div className="default-picture-button">
                                                    <Button className="w-full lg:w-10/12" border
                                                        icon={<FontAwesomeIcon icon={faImages} />}
                                                        onClick={this.ChangePhotoToDefaultButtonClicked}>Get default</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr className="mt-6 border-b-1 border-blueGray-300" />

                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    Contact Information
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                defaultValue={this.userProfile.address}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                City
                                            </label>
                                            <input
                                                type="email"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                defaultValue={this.userProfile.user_contact_info.city}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Country
                                            </label>
                                            <input
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                defaultValue={this.userProfile.user_contact_info.country}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Phone number
                                            </label>
                                            <input
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                defaultValue={this.userProfile.phone_number}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <hr className="mt-6 border-b-1 border-blueGray-300" />

                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    About Me
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Favorite Quote
                                            </label>
                                            <textarea
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                defaultValue={this.userProfile.user_favourite.quote}
                                                rows="4"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </>
        );
    }
}
