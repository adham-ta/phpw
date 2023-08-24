var firebaseConfig = {
  apiKey: "AIzaSyBVwqd2cbwPtEqQyY0kvTs-9_0whZzDxAQ",
  authDomain: "chat-bd059.firebaseapp.com",
  databaseURL: "https://chat-bd059-default-rtdb.firebaseio.com",
  projectId: "chat-bd059",
  storageBucket: "chat-bd059.appspot.com",
  messagingSenderId: "471746540933",
  appId: "1:471746540933:web:3067c6783deb24ef4b00ec",
  measurementId: "G-GQPEDW7XWW"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

const username = prompt("Please Tell Us Your Name");

function sendMessage(e) {
  e.preventDefault();

  // get values to be submitted
  const timestamp = Date.now();
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value;

  // clear the input box
  messageInput.value = "";

  //auto scroll to bottom
  document
    .getElementById("messages")
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  // create db collection and send in the data
  db.ref("messages/" + timestamp).set({
    username,
    message,
  });
}

const fetchChat = db.ref("messages/");

fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const message = `<li class=${
    username === messages.username ? "sent" : "receive"
  }><span>${messages.username}: </span>${messages.message}</li>`;
  // append the message on the page
  document.getElementById("messages").innerHTML += message;
});

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVwqd2cbwPtEqQyY0kvTs-9_0whZzDxAQ",
  authDomain: "chat-bd059.firebaseapp.com",
  databaseURL: "https://chat-bd059-default-rtdb.firebaseio.com",
  projectId: "chat-bd059",
  storageBucket: "chat-bd059.appspot.com",
  messagingSenderId: "471746540933",
  appId: "1:471746540933:web:3067c6783deb24ef4b00ec",
  measurementId: "G-GQPEDW7XWW"
};
