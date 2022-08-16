//select dom element
const counterEl = document.getElementById("counter-element");
const incrementEl = document.getElementById("increment-element"); 
const decrementEl = document.getElementById("decrement-element");

const counterEl2 = document.getElementById("counter-element-2");
const incrementEl2 = document.getElementById("increment-element-2"); 
const decrementEl2 = document.getElementById("decrement-element-2");

//initial state
let count = 0;
let count2 = 0;


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
  counterEl.innerText=count2;
});

// event listener
incrementEl2.addEventListener("click", () => {
  // console.log("clicked");
  count2++;
  // console.log(count2)
  counterEl2.innerText = count2; 
});

decrementEl2.addEventListener("click", () => {
  // console.log("clicked");
  count2--;
//   console.log(count2);
  counterEl2.innerText=count2;
});
