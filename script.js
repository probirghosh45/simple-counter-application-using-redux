//select dom element
const counterEl = document.getElementById("counter-element");
const incrementEl = document.getElementById("increment-element");
const decrementEl = document.getElementById("decrement-element");

//initial state
let count = 0;

// event listener
incrementEl.addEventListener("click", () => {
  // console.log("clicked");
  count++;
  // console.log(count)
  counterEl.innerText = count; 
});

decrementEl.addEventListener("click", () => {
  // console.log("clicked");
  count--;
//   console.log(count);
  counterEl.innerText=count;
});
