let userName = "Alex";
let userAge = 20;

if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
  document.getElementById("user-output").innerText = `${userName} is an adult.`;
} else {
  console.log(`${userName} is a minor.`);
  document.getElementById("user-output").innerText = `${userName} is a minor.`;
}

function calculateTotal(price, taxRate) {
  return price + price * taxRate;
}

let total = calculateTotal(100, 0.08);
console.log("Total with tax: $" + total.toFixed(2));

function formatName(firstName, lastName) {
  return `${lastName}, ${firstName}`;
}

console.log(formatName("Alex", "Morgan"));

const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grape"];
const list = document.getElementById("dynamic-list");

for (let i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.textContent = fruits[i];
  list.appendChild(li);
}

let countdown = 3;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}

const toggleBtn = document.getElementById("toggle-btn");
const toggleText = document.getElementById("toggle-text");

toggleBtn.addEventListener("click", () => {
  if (toggleText.style.display === "none") {
    toggleText.style.display = "block";
  } else {
    toggleText.style.display = "none";
  }
});

document.getElementById("user-output").style.color = "green";

const newPara = document.createElement("p");
newPara.textContent = "This paragraph was created with JavaScript!";
document.body.appendChild(newPara);
