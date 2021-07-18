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


