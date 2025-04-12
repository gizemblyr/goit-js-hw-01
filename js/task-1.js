

function makeTransaction(quantity, pricePerDroid){
  totalPrice = quantity * pricePerDroid;
  return console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
}

makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);