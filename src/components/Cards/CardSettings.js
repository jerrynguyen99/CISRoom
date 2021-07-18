import {getCurrentUser, updateProfile} from "helpers/auth";
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBoxes, faImages} from "@fortawesome/free-solid-svg-icons";
import {Loader, Button, MessageList} from "@chatscope/chat-ui-kit-react";
import {userProfile} from "../../helpers/UserProfile";
import LoadingCard from "./LoadingCard";

// components
export default function CardSettings() {
    const [color] = useState('lightBlue');
    const [error, setError] = useState('');
    const [isContinue, setIsContinue] = useState(!!(userProfile));
    console.log(isContinue)
    const user = getCurrentUser();
    const [info, setInfo] = useState(userProfile);
    const [firstName, setFirstName] = useState(user.displayName.split(' ').slice(0, -1).join(' '));
    const [lastName, setLastName] = useState(user.displayName.split(' ').slice(-1).join(' '));
    const [email] = useState(user.email);

    const saveBtnClicked = async (event) => {
        event.preventDefault();
        setTimeout(() => {
            // window.location.reload();
        }, 3000);
        try {
            let userFullName = firstName.replace(/\s+/g, " ").trim() + " " + lastName.replace(/\s+/g, " ").trim();
            let userUrlPhoto = "https://i.redd.it/tfi7qlekduo31.jpg";
            let userPhoneNumber = "0868817287"
            await updateProfile(userFullName, userUrlPhoto, userPhoneNumber);
        } catch (e) {
            setError(e.message);
        }
        setError("Your setting has been saved. Reload automatically in 3..2..1 ")

    }

    const ChangePhotoURLButtonClicked = async (event) => {
        event.preventDefault();
        setTimeout(() => setError(""), 3000);
        setError(" //TO-DO: Your profile picture has changed successfully");
    }

    const ChangePhotoToDefaultButtonClicked = async (event) => {
        event.preventDefault();
        setTimeout(() => setError(""), 3000);
        setError(" //TO-DO: Your profile picture has changed to default");
    }

    const LoadingState = async (event) => {
        event.preventDefault();
        setTimeout(() => {setError(""); setIsContinue(true)}, 1000);
        setError("Loading your profile...")
        while (!info) {
            setInfo(userProfile);
            console.log("step bro, i'm stuck in loop")
        }
    }

    return (
        <>
            <div
                className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
                        <div className="relative">
                            {error ? (
                                <span className={
                                    "text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-" +
                                    color + "-600 bg-" +
                                    color + "-200 uppercase last:mr-0 mr-1"}
                                >
                                    {error}
                                 </span>
                            ) : null}
                        </div>
                        <Button border icon={<FontAwesomeIcon icon={faBoxes}/>} onClick={saveBtnClicked}>Update</Button>
                    </div>
                </div>
                {!isContinue ? (<><Button autoFocus={true} onFocus={LoadingState}></Button> <LoadingCard /> </>) : (
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
                                            defaultValue={info.user_info.user_name}
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
                                            onChange={(e) => setFirstName(e.target.value)}
                                            defaultValue={firstName}
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
                                            onChange={(e) => setLastName(e.target.value)}
                                            defaultValue={lastName}
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
                                            defaultValue={email}
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
                                                    src={user.photoURL}
                                                    alt={user.displayName}
                                                    className="shadow rounded-full picture-setting align-middle border-none max-w-160-px"/>
                                            </div>
                                            <div className="change-picture-button">
                                                <Button className="w-full lg:w-10/12" border
                                                        icon={<FontAwesomeIcon icon={faImages}/>}
                                                        onClick={ChangePhotoURLButtonClicked}>Change image</Button>
                                            </div>
                                            <div className="default-picture-button">
                                                <Button className="w-full lg:w-10/12" border
                                                        icon={<FontAwesomeIcon icon={faImages}/>}
                                                        onClick={ChangePhotoToDefaultButtonClicked}>Get default</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-6 border-b-1 border-blueGray-300"/>

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
                                            defaultValue={userProfile.address}
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
                                            defaultValue={userProfile.user_contact_info.city}
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
                                            defaultValue={userProfile.user_contact_info.country}
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
                                            defaultValue={userProfile.phone_number}
                                        />
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-6 border-b-1 border-blueGray-300"/>

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
                                            defaultValue={userProfile.user_favourite.quote}
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
