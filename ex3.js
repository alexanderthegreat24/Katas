
function addDiscount(price, discount) {
    
  if (typeof price ==='number' && typeof discount ==='number') {
      
      var discountedPrice = price - (price * discount) 
      
      return discountedPrice
      
  } else {
      
      return 'Error: Invalid input '
  }
}


console.log(addDiscount(hello, 0.5))
