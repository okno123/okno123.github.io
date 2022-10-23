function updatePrice() {
  let s = document.getElementsByName("prodType");
  let select = s[0];
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }
  
  let radioDiv = document.getElementById("radios");
  let checkDiv = document.getElementById("checkboxes");
  
  if (select.value == "1") 
  {
    radioDiv.style.display = "none";
    checkDiv.style.display = "none";
  }
  if(select.value == "2") 
  {
    radioDiv.style.display = "none";
    checkDiv.style.display = "block";
  }
  if(select.value == "3") 
  {
    checkDiv.style.display = "none";
    radioDiv.style.display = "block";
  }

  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function(radio) {
    if (radio.checked) {
      let optionPrice = prices.prodOptions[radio.value];
      if (optionPrice !== undefined) {
        price += optionPrice;
      }
    }
  });


  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.prodProperties[checkbox.name];
      if (propPrice !== undefined) {
        price += propPrice;
      }
    }
  });
  
  let prodPrice = document.getElementById("prodPrice");
  prodPrice.innerHTML = price + " рублей";
}


function getPrices() {
  return {
    prodTypes: [1000, 500, 3000],
    prodOptions: {
      option2: 500,
      option3: 1000,
    },
    prodProperties: {
      prop1: 100,
      prop2: 300,
    }
  };
}

window.addEventListener('DOMContentLoaded', function (event) {
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = "none";

  let s = document.getElementsByName("prodType");
  let select = s[0];
  select.addEventListener("change", function(event) {
    let target = event.target;
    console.log(target.value);
    updatePrice();
  });
  
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
      console.log(r.value);
      updatePrice();
    });
  });
  
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function(event) {
      let c = event.target;
      console.log(c.name);
      console.log(c.value);
      updatePrice();
    });
  });

  updatePrice();
});

