// TODO 1: Create webpage w/ 16x16 grid of square divs
// Create divs using JS and put grid squares inside a container div
// USe Flexbox to make divs appear as a grid

// Random Color on hover on new SketchPad
function RandomColorRGB() {
  x = Math.floor(Math.random() * 256);
  y = Math.floor(Math.random() * 256);
  z = Math.floor(Math.random() * 256);
  return "rgb(" + x + "," + y + "," + z + ")";
}

const containerHTML = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    containerHTML.appendChild(squareDiv);
    squareDiv.innerText;

    // TODO 2: Set up "hover" effect so grid changes colors when mouse overs them
    squareDiv.addEventListener("mouseover", () => {
      squareDiv.style.backgroundColor = "red";
    });
  }
}

// TODO 3: Add a button top of screen that sends user a popup asking for number of squares per side for the new grid, once entered existing grid should be deleted
// TODO 3 Part 2:  new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad
const NewSketchPad = document.querySelector(".NewSketchPad");
function getNewSketchPad() {
  let number = prompt(
    "How many squares per side do you want your new grid to have?"
  );
  // TODO 3 Part 3:  new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad
  if (number > 100 || number < 0) {
    alert("Please enter a number between 1 and 100");
    getNewSketchPad(number);
  } else {
    const container = document.querySelector(".container");
    container.style.width = `${number * 20}px`;
    containerHTML.innerHTML = "";
    for (let i = 0; i < number; i++) {
      for (let j = 0; j < number; j++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        containerHTML.appendChild(squareDiv);
        squareDiv.innerText;

        squareDiv.addEventListener("mouseover", () => {
          squareDiv.style.backgroundColor = RandomColorRGB();
          // Progressive darkening effect where each interaction darkens square by 10%
          squareDiv.style.opacity = 1.0;
          for (let i = 0; i < 10; i++) {
            setTimeout(() => {
              squareDiv.style.opacity -= 0.1;
            }, 1000 * i);
          }
        });
      }
    }
  }
}

NewSketchPad.addEventListener("click", getNewSketchPad);
