'use strict';

// tabled recreated from: https://github.com/codefellows/seattle-201d32/blob/master/class-06-dom-objects-domain_modeling/lab/assets/support.md
// LOCATION        Min/Cust  Max/Cust  Average Cookie Sale
// 1st and Pike       23        65         6.3
// SeaTac Airport     3         24         1.2
// Seattle Center     11        38         3.7
// Capitol Hill       20        38         2.3
// Akli               2         16         4.6


var hoursOperation = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'DAILY TOTAL'];
CookieStore.arrayOfStores = [];
var cookieTable = document.getElementById('cookiesTable');

function CookieStore (name, minCust, maxCust, avgCookieSale){

  this.totalCookies = 0;
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.randomCustomersArray = [];
  this.cookiesPerHourArray = [];
  CookieStore.arrayOfStores.push(this);
  this.randomCustomers();
  this.cookiesPerHour();
  this.salesPerHour();
}

CookieStore.prototype.randomCustomers = function() {
  for (var i = 0; i < hoursOperation.length -1; i++) {
    this.randomCustomersArray.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    console.log('test');
  }
};

CookieStore.prototype.cookiesPerHour = function() {
  //average cookie sale * random generated customers
  for (var i = 0; i < hoursOperation.length -1; i++) {
   this.cookiesPerHourArray.push(Math.ceil(this.avgCookieSale * this.randomCustomersArray[i]));
  }
};

CookieStore.prototype.salesPerHour = function() {
  this.cookiesPerHour();
  for(var i = 0; i < this.cookiesPerHourArray.length; i++) {
    this.totalCookies += this.cookiesPerHourArray[i];
  }
};

CookieStore.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.className = 'storeNameCell';
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  for(var i = 0; i < hoursOperation.length -1; i++) {
    tdEl = document.createElement('td');
    tdEl.className = 'cookieHourCell';
    tdEl.textContent = this.cookiesPerHourArray[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.id = 'totalsCell';
  tdEl.textContent = this.totalCookies;
  trEl.appendChild(tdEl);

  cookieTable.appendChild(trEl);
};


new CookieStore('1st and Pike', 23, 65, 6.3);
new CookieStore('SeaTac Airport', 3, 24, 1.2);
new CookieStore('Seattle Center', 11, 38, 3.7);
new CookieStore('Capitol Hill', 20, 38, 2.3);
new CookieStore('Alki', 2, 16, 4.6);
console.table(CookieStore.arrayOfStores);

//followed off what was shown in lecture
function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.className = 'tableHeaderRow';
  thEl.textContent = 'LOCATION';
  trEl.appendChild(thEl);
  for (var i = 0; i < hoursOperation.length; i++) {
    thEl = document.createElement('th');
    thEl.className = 'tableHeaderRow';
    thEl.textContent = hoursOperation[i];
    trEl.appendChild(thEl);
  }
  cookieTable.appendChild(trEl);
}


function makeStoreRow() {
  for (var i = 0; i < CookieStore.arrayOfStores.length; i++) {
    CookieStore.arrayOfStores[i].render();
  }
}

function makeFooterRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.className = 'tableHeaderRow';
  thEl.textContent = 'HOURLY TOTAL';
  trEl.appendChild(thEl);
  for (var i = 0; i < hoursOperation.length -1; i++) {
    thEl = document.createElement('th');
    thEl.className = 'tableHeaderRow';
    var storeTotalCookies = 0;
    var allStoreTotal = 0;
    for (var j = 0; j < CookieStore.arrayOfStores.length; j++) {
      storeTotalCookies += CookieStore.arrayOfStores[j].cookiesPerHourArray[i];
      allStoreTotal += CookieStore.arrayOfStores[j].totalCookies;
      thEl.textContent = storeTotalCookies;
      trEl.appendChild(thEl);
    }
  }
  thEl = document.createElement('th');
  thEl.className = 'tableHeaderRow';
  thEl.textContent = allStoreTotal;
  trEl.appendChild(thEl);
  cookieTable.appendChild(trEl);
}

makeHeaderRow();
makeStoreRow();
makeFooterRow();
