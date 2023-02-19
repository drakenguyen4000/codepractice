//Image Array
const images = [
  "https://res.cloudinary.com/dkn4000/image/upload/v1676175298/Issue_Tracker_tldprb.png",
  "https://res.cloudinary.com/dkn4000/image/upload/v1676175267/eApparel_Store_tnpfvm.png",
  "https://res.cloudinary.com/dkn4000/image/upload/v1620259147/stanlee_eobur6.jpg",
];

//Select Buttons
const rightButton = document.getElementById("right");
const leftButton = document.getElementById("left");

let counter = 0;

//Default image
document.querySelector(
  "#frame"
).style.backgroundImage = `url("${images[counter]}")`;

//Controls slides with right button (Forward)
rightButton.addEventListener("click", () => {
  counter += 1;
  //Resets to zero if greater than number of images in array
  if (counter === images.length) {
    counter = 0;
  }
  document.querySelector(
    "#frame"
  ).style.backgroundImage = `url("${images[counter]}")`;
});

//Controls slides with left button (Backward)
leftButton.addEventListener("click", () => {
  counter -= 1;
  //Set to last slide if counter goes below zero
  if (counter < 0) {
    counter = images.length -1;
  }
  document.querySelector(
    "#frame"
  ).style.backgroundImage = `url("${images[counter]}")`;
});
