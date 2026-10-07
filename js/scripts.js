onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    let turtle = document.getElementById("turtle");
    turtle.setAttribute("class", "hidden");
    let snake = document.getElementById("snake");
    snake.setAttribute("class", "hidden");
    let insect = document.getElementById("insect");
    insect.setAttribute("class", "hidden");
    let spellingError = document.getElementById("misspelled");
    spellingError.setAttribute("class", "hidden");

    const spelling = document.querySelector("input#animal").value;

    if (spelling === "turtle") {
      turtle.removeAttribute("class");
    } else if (spelling === "snake") {
      snake.removeAttribute("class");
    } else if (spelling === "insect") {
      insect.removeAttribute("class");
    } else {
      spellingError.removeAttribute("class");
    }
  };
};