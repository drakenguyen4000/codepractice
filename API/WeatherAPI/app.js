//Select button
const button = document.querySelector("button");
let data;
//Listen for event click
button.addEventListener("click", async function () {
  try {
    //Get Data
    let response = await fetch("someapi");
    //Parse data
    data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});

