document.getElementById("OrderButton").onclick = function () {
    const FoodPrice = parseInt(document.getElementById("Food").value);
    const MinumanPrice = parseInt(document.getElementById("Minuman").value);

    let TotalPrice = FoodPrice + MinumanPrice;
    let Discount = 0;
    let Total_Price= 0;

    if (TotalPrice > 100) {
      Discount = TotalPrice * 0.1;
      TotalPrice = TotalPrice - Discount;
      Total_Price = TotalPrice - Discount ;
    }
    const resultDiv = document.getElementById("result");

    if (TotalPrice > 0) {
      resultDiv.innerHTML = `
      Total: $${TotalPrice.toFixed(2)} <br>
      Discount: $${Discount.toFixed(2)}<br>
      Final Price : $${Total_Price.toFixed(2)}`;
    }
  };
