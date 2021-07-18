import { auth } from "../services/firebase";

export function signup(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function signInWithGoogle() {
  const provider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider);
}

export function signInWithGitHub() {
  const provider = new auth.GithubAuthProvider();
  return auth().signInWithPopup(provider);
}

export function logout() {
  return auth().signOut();
}

export function getCurrentUser() {
  return auth().currentUser;
}

export function updateProfile(name,url,phone = null) {
  const user = auth().currentUser;
  if (name === null) {
    name = user.displayName;
  }
  if (url === null) {
    url = user.photoURL;
  }
  if (phone === null) {
    phone = user.phoneNumber;
  }
  user.updateProfile({
    displayName: name,
    photoURL: url,
    phoneNumber: phone
  }).then(() => {
    return "success"
  }).catch((error) => {
    return error
  });
}

export class UserSession {
  constructor() {
    this.session = auth().currentUser;
  }
  get getSession() {
    return this.session;
  }
  getDisplayName() {
    return this.session.displayName;
  }
  getPhotoUrl() {
    return this.session.photoURL;
  }
}