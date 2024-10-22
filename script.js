console.log("script running");
//const appleButton = document.querySelector("#banana");
//varaiable to save the shopping list total (in cents)
let totalInCents = 0;
const totalList = document.querySelector(`"total-span"`);
const updateTotal = () => {
totalList.innerHTML= totalInCents/100;

};

//creating a varaible, appleButton, setting it equal to the id=apple
//part 1, who
const appleButton = document.querySelector("#apple");
const bananaButton = document.querySelector("#banana");
const mangoButton = document.querySelector("#mango");
const shoppingList = document.querySelector("#shopping-cart");
console.log(appleButton);

//part 2,what 
const addApple = () => {
  shoppingList.innerHTML += `<p>Apple</p>`;
  totalInCents += 75;
  updateTotal();
  updateshoppingList();
  
}
const addbanana = () => {
  shoppingList.innerHTML += `<p>Banana</p>`;
  totalInCents += 30;
  updateTotal();
  updateshoppingList();
  
}
const addmango = () => {
  shoppingList.innerHTML += `<p>Mango</p>`;
  totalInCents += 125;
  updateTotal();
  updateshoppingList();
  
}

appleButton.addEventListener("click", addApple);
bananaButton.addEventListener("click", addbanana);
mangoButton.addEventListener("click", addmango);
