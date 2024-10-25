const nums = [13, 87, 2, 89, 12, 4, 90, 63];
const doubledNums = nums.map((num) => num * 2);

console.log("Exercise 1:", doubledNums);
// ------------------------------------------------------

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];
const [firstTopping, secondTopping] = pizzaToppings;

console.log("Exercise 2:", firstTopping, secondTopping);

// ------------------------------------------------------

const car = {
  make: "Audi",
  model: "q5",
};

const { make, model } = car;

console.log("Exercise 3:", make, model);

// ------------------------------------------------------

const controversialPizzaToppings = [...pizzaToppings];

console.log("Exercise 4:", controversialPizzaToppings);

// ------------------------------------------------------

const myCar = { ...car };
myCar.model = "q7";

console.log("Exercise 5:", car, myCar);

// ------------------------------------------------------

const propertyName = "username";
const userProfile = {
  [propertyName]: "zaire",
};

console.log("Exercise 6:", userProfile);

// ------------------------------------------------------

const name = "Matt";
const age = 43;
const job = "programmer";

console.log("Exercise 7:", name, age, job);

// ------------------------------------------------------

function describeAnimal(noun = "cat", adjective = "white") {
  console.log(`Exercise 8: The ${noun} is ${adjective}.`);
}

describeAnimal();
describeAnimal("dog", "black");

// ------------------------------------------------------

let pizza = "tasty";
pizza === "tasty"
  ? console.log("Exercise 9: yum")
  : console.log("Exercise 9: yuck");

// ------------------------------------------------------

const localLangConfig = null;
const LANG = localLangConfig || "en";

console.log("Exercise 10 - Language:", LANG);

const userSavedTheme = null;
const USER_THEME = userSavedTheme || "light";

console.log("Exercise 10 - User theme:", USER_THEME);

// ------------------------------------------------------

const adventurer = {
  name: "Alice",
};

let cat = adventurer.cat?.age;

console.log("Exercise 11:", cat);
