const currencyEL_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEL_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

const calculate = () => {
  const currency_one = currencyEL_one.value;
  const currency_two = currencyEL_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_two];
      console.log(data);
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
};

// add Event Listeners

currencyEL_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEL_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);
swap.addEventListener("click", () => {
  const temp = currencyEL_one.value;
  currencyEL_one.value = currencyEL_two.value;
  currencyEL_two.value = temp;
  calculate();
});

calculate();
