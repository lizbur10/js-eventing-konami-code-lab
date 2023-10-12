const code = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

// Keep track of index outside of the event handler.
let index = 0;

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {   
  const key = e.key;

  if (key === code[index]) {
    index++;
    if (index === code.length) {
      alert("Hurray!");
      index = 0; // Reset the sequence
    }
  } else {
    index = 0; // Reset the sequence
  }
}

function init() {
  document.body.addEventListener('keydown', onKeyDownHandler);
}

// Call init to attach the event listener
init();