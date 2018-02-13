'use strict';

// tabled recreated from: https://github.com/codefellows/seattle-201d32/blob/master/class-06-dom-objects-domain_modeling/lab/assets/support.md
// LOCATION        Min/Cust  Max/Cust  Average Cookie Sale
// 1st and Pike       23        65         6.3
// SeaTac Airport     3         24         1.2
// Seattle Center     11        38         3.7
// Capitol Hill       20        38         2.3
// Akli               2         16         4.6

var totalCookies = 0;
var hoursOperation = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  randomCustomers: function() {
    var customers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    console.log(customers);
    return customers;
  },
  cookiesPerHour: function() {
    //average cookie sale * random generated customers
    var calcCookies = Math.round(this.avgCookieSale * this.randomCustomers());
    console.log(calcCookies);
    return  calcCookies + ' cookies';
  },
  //for loop to create random numbers for each hour of the day
  salesPerHour: function() {
    var salesArray = [];
    for(var i = 0; i < hoursOperation.length; i++){
      if(i === (hoursOperation.length - 1)) {
        salesArray[i] = totalCookies + ' cookies';
        console.log(hoursOperation[i]);
      } else {
        salesArray[i] = this.cookiesPerHour();
        console.log(hoursOperation[i] + salesArray[i]);
        totalCookies += parseInt(salesArray[i]);
      }
    }
    return salesArray;
    
  },
  render: function() {
    var ulEl = document.getElementById('firstAndPike');
    var SalesList = this.salesPerHour();
    for (var i = 0; i < SalesList.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOperation[i] + SalesList[i];
      ulEl.appendChild(liEl);
    }
  },
}

//firstAndPike.render()
