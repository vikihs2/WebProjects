function calculateFruitCost(fruit, weight, price) {
  let weightInKg = weight / 1000;
  let totalCost = weightInKg * price;
  let money = totalCost.toFixed(2);

  console.log("I need ", money, " to buy ", weightInKg, " kilograms ", fruit);
}