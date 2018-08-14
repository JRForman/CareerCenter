var iRate = 6.5 / 1200;
var iMonths = 120;
var PV = 80000;
//var FV = 0;
var remainingBalance = [];
var months = [];
var yearlyFV = [];
var startingBalance = 80000;
totalBalance = startingBalance;
var yearBal = [];

function getTotalBalance(balance, iRate, iMonths) {
  return balance * Math.pow(1 + iRate, iMonths);
}

function getMonthlyPayment(balance, iRate, iMonths) {
  return (
    balance *
    ((iRate * Math.pow(1 + iRate, iMonths)) /
      (Math.pow(1 + iRate, iMonths) - 1))
  );
}

// Get our total balance
totalBalance = getTotalBalance(startingBalance, iRate, iMonths);
// Determine our total interest during the time period.
interest = totalBalance - startingBalance;
// Get our monthly payment
monthlyPayment = Math.ceil(getMonthlyPayment(startingBalance, iRate, iMonths));
console.log(Math.ceil(monthlyPayment));
//montlyPayment rounded up

var bal = PV;
for (var p = 1; p <= iMonths; p++) {
  var thisMonthsInterest = bal * iRate;
  bal -= monthlyPayment - thisMonthsInterest;
  remainingBalance.push(bal);
}

for (var i = 0; i < 240; i += 60) {
  yearBal.push(remainingBalance[i]);
}

for (var i = 0; i < yearBal.length; i++) {
  if (typeof yearBal[i] === "undefined") {
    yearBal[i] = 0;
  }
}

//compound interest no payments

for (var x = 1; x <= iMonths; x++) {
  amount = PV * Math.pow(1 + iRate, x);
  if (x % 60 === 0) {
    yearlyFV.push(amount);
    months.push(x);
  }
}

var school = true;
if (school) {
  yearBal.unshift(20000, 40000, 60000, 80000);
  months.unshift(0, 12, 24, 36);
}
console.log("yearBal", yearBal);
console.log("totalBalance", totalBalance);
console.log("interest", interest);
console.log("monthly payment", monthlyPayment);

var median = 60000;
var starting = median * 0.67;
var fiveYears = median * 0.87;
var ending = median * 1.35;
var last = median * 1.5;
var medSalaries = [starting, fiveYears, median, ending, last];
var medLables = [0, 5, 10, 15, 20];

medSalaries.unshift(10000, 10000, 10000, 10000);
medLables.unshift(-4, -3, -2, -1);

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: medLables,
    datasets: [
      {
        label: "median wage",
        data: medSalaries,
        backgroundColor: "rgba(179,124,87,.4)"
      },
      {
        label: "cost of school",
        data: yearBal,
        backgroundColor: "rgba(60,69,92,0.4)"
      }
    ]
  }
});
return myChart;
