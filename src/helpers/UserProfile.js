import {getCurrentUser} from "./auth";

const {fs} = require("../services/firebase");
export let userProfile = ''

async function getProfile() {
    if (!getCurrentUser()) {
        return
    }

    const profileRef = fs.collection('users').doc(getCurrentUser().uid);
    const profile = await profileRef.get();
    if (!profile.exists) {
        console.log('Cannot find the profile!');
    } else {
        return profile.data();
    }

    console.log('oh no!');

}



const setUserProfileState = (profile) => {
    userProfile = profile;
}

export function getUserProfile() {

    if (getCurrentUser()) {
        getProfile().then(data => {
            setUserProfileState(data)
        }).then(() => console.log("profile updated!"))
    }
}