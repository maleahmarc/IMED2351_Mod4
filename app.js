function generateMessage() {
  let userName = document.getElementById("userName").value;
  let userAge = Number(document.getElementById("userAge").value);
  let userStatus = document.getElementById("userStatus").value;
  let userCollection = document.getElementById("userCollection").value;
  let userMedia = document.getElementById("userMedia").value;

  console.log({ userName, userAge, userStatus, userCollection });

  let displayName = userName.toUpperCase(); // String method
  let isWholeAge = Number.isInteger(userAge); // Number method

  console.log(`Display Name: ${displayName}`);
  console.log(`Is Whole Age: ${isWholeAge}`);

  let greeting =
    "Hello, " + displayName + "! Let's see if you're also a collector...";

  let message = greeting + "<br><br>";
  //If statement
  if (userAge < 18 && userStatus === "Yes") {
    message +=
      "Ah you have started young. I pray for your wallet and storage space as you age. ";
  } else if (userAge < 18 && userStatus === "No") {
    message +=
      "Good on you for saving money. If you do decide to start, curated collections are always the best. ";
  } else if (userAge < 18 && userStatus === "Sometimes") {
    message +=
      "Good on you, you have struck a good balance of joy and self-control at your age. ";
  } else if (userAge >= 18 && userStatus === "Yes") {
    message += "Having adult money can be really fun! ";
  } else if (userAge >= 18 && userStatus === "No") {
    message +=
      "As I get older, I understand minimalism more and more. It may be better for your wallet to stay that way. ";
  } else if (userAge >= 18 && userStatus === "Sometimes") {
    message +=
      "Hey I get it, sometimes life starts lifeing and a cute purchase can be an easy pick-me-up. ";
  }

  // Switch statement
  switch (userMedia) {
    case "Yes":
      message +=
        "Congrats! You also have chosen a life of joy and limited space. But with the digital age, it's nice to actually own and have something tangible to touch.";
      break;
    case "No":
      message += "I envy your storage space!";
      break;
    default:
      message += " ";
  }

  document.getElementById("output").innerHTML = message;
}
