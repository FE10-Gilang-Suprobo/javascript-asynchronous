const listColor = ["green", "yellow", "blue", "orange", "red"];

const getRandomColor = new Promise((resolve, reject) => {
  console.log("Loading starts ...");
  console.log("generating random color ...");
  let randomNum = Math.floor(Math.random() * 7);
  console.log(`Random Number : ${randomNum}`);
  if (randomNum < listColor.length) {
    setTimeout(() => {
      resolve(listColor[randomNum] + "\nloading end...");
    }, 3000);
  } else {
    setTimeout(() => {
      reject("Failed to get random color, please try again");
    }, 3000);
  }
})
  .then((value) => console.log("The color we got is " + value))
  .catch((error) => console.log(error));