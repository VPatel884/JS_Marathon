let cartValue = 73;
let discountedCartValue;

if (cartValue < 50) {
  discountedCartValue = cartValue;
  console.log(`No Dicount Applied!`);
} else if (cartValue >= 50 && cartValue <= 100) {
  discountedCartValue = cartValue - cartValue * 0.1;
  console.log(`10% Discount Applied!`);
} else if (cartValue > 100) {
  discountedCartValue = cartValue - cartValue * 0.2;
  console.log(`20% Discount Applied!`);
} else {
  console.log(`Please enter a valid cart value.`);
}

console.log(`Final Cart Value = $${discountedCartValue.toFixed(2)}`);
