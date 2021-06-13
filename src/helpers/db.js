import { db } from "../services/firebase";

export function readChats() {
  let abc = [];
  db.ref("messengers").on("value", snapshot => {
    snapshot.forEach(snap => {
      abc.push(snap.val())
    });
    return abc;
  });
}

export function writeChats(message) {
  return db.ref("messengers").push({
    content: message.content,
    timestamp: message.timestamp,
    uid: message.uid
  });
}

export function readInfo() {
  let abc = [];
  db.ref("users").on("value", snapshot => {
    snapshot.forEach(snap => {
      abc.push(snap.val())
    });
    return abc;
  });
}

export function writeInfo(info) {
  return db.ref("users").push({
    username: info.username,
    dob: info.dob,
    uid: info.uid
  });
}

