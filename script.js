let username = "";

document.getElementById("join-btn").addEventListener("click", (event) => {
  event.preventDefault();

  username = document.getElementById("username-input").value;
  if (username.trim() != "") {
    document.querySelector(".form-username").style.display = "none";
    document.querySelector(".chatroom-container").style.display = "block";
    document.querySelector(
      ".chatroom-header"
    ).innerText = `Chatroom - ${username}`;
  } else {
    alert("Username cannot be empty");
  }
});

document.getElementById("send-btn").addEventListener("click", (event) => {
  event.preventDefault();
  var msg = document.getElementById("message-input").value;
  var msgDiv = document.createElement("div");
  msgDiv.innerText = msg;
  msgDiv.setAttribute("class", "message sent");
  //   msgDiv.setAttribute("class", "message received");
  document.querySelector("#messages-container").appendChild(msgDiv);
});

// function if some sender sends a message , receive that message and append  child
