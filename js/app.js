
'use script'
var shops = [];

var container = document.getElementById("cookiesShop");
var tableEl = document.createElement("table");
container.appendChild(tableEl);
var form = document.getElementById("shopsForm");






var hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function Shop(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesPerHour = [];
  this.total = 0;
  this.getPer();

  shops.push(this);

}
Shop.prototype.costumerRandom = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;


};

Shop.prototype.getPer = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookiesPerHour.push(Math.floor(this.costumerRandom() * this.avg));
    this.total += this.cookiesPerHour[i];
  }



};


Shop.prototype.render = function () {
  var trEl = document.createElement("tr");
  tableEl.appendChild(trEl);
  var tdEl = document.createElement("td");
  trEl.appendChild(tdEl);
  tdEl.textContent = this.name;
  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement("td");
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  var totalTdEl = document.createElement("td");
  trEl.appendChild(totalTdEl);
  totalTdEl.textContent = this.total;

};

function renderHeader() {
  var trEl = document.createElement("tr");
  tableEl.appendChild(trEl);
  var thEl = document.createElement("th");
  trEl.appendChild(thEl);
  thEl.textContent = ' ';
  for (let i = 0; i < hours.length; i++) {
    var thEl = document.createElement("th");
    trEl.appendChild(thEl);
    thEl.textContent = hours[i];
  }
  var thEl = document.createElement("th");
  trEl.appendChild(thEl);
  thEl.textContent = "Total";
}



function renderFooter() {
  var trEl = document.createElement("tr");
  tableEl.appendChild(trEl);
  var tdEl = document.createElement("td");
  trEl.appendChild(tdEl);
  tdEl.textContent = "Total";
  var megaTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    var sum = 0;
    for (let j = 0; j < shops.length; j++) {
      sum += shops[j].cookiesPerHour[i];
      console.log(sum);
    }
    megaTotal += sum;
    var tdEl = document.createElement("td");
    trEl.appendChild(tdEl);
    tdEl.textContent = sum;
  }
  var tdEl = document.createElement("td");
  trEl.appendChild(tdEl);
  tdEl.textContent = megaTotal;
}

function handleSubmit(event) {
  event.preventDefault();
  var name = event.target.name.value;
  var max = parseInt(event.target.max.value);
  var min = parseInt(event.target.min.value);

  var avg = parseFloat(event.target.avg.value);
  var newShop = new Shop(name, min, max, avg);
  console.log(newShop);


  var rowCount = tableEl.rows.length;
  tableEl.deleteRow(rowCount - 1);
  newShop.render();
  renderFooter();
  form.reset();



}

form.addEventListener("submit", handleSubmit);

new Shop(
  "Seattle",
  23,
  65,
  6.3,


)

new Shop(
  "Tokyo",
  3,
  24,
  1.2,


)


new Shop(
  "Dubai",
  11,
  38,
  3.7,


)



new Shop(
  "Paris",
  20,
  38,
  2.7,


)




new Shop(
  "Lima",
  2,
  14,
  4.6,


)


//  console.table(Shop);
// Shop.costumerRandom();
// Shop.getPer();
// Shop.render()


renderHeader();

for (let i = 0; i < shops.length; i++) {
  console.log("hi", shops[i])

  shops[i].render();
}

renderFooter();






// var Seattle = {
//     name: "Seattle",
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     hours: [" 6am: ", " 7am: ", " 8am: ", " 9am: ", " 10am: ", " 11am: ", " 12pm: ", " 1pm: ", " 2pm: ", " 3pm: ", " 4pm: ", " 5pm: ", " 6pm: ", " 7pm: "," Total "],
//     cookiesPerHour:[],

//     costumerRandom: function () {
//         return Math.floor(Math.random() * (this.max - this.min) + 1) + this.min;


//     },
//     getPer: function () {
//         var total = 0;
//         for (var i = 0; i < (this.hours.length -1); i++) {
//             var product =  Math.ceil(this.costumerRandom() * this.avg);



//             total = total + product;
//             this.cookiesPerHour.push(product);


//         }
//                     this.cookiesPerHour.push(total);




//     },

//     render: function () {
//         var container = document.getElementById("sales");
//         var articleEl = document.createElement("article");
//         container.appendChild(articleEl);
//         var h2El = document.createElement("h2");
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;

//         var ulEl = document.createElement("ul");
//         articleEl.appendChild(ulEl);
//         for (let i = 0; i < this.hours.length; i++) {
//             var liEl = document.createElement("li");
//             liEl.textContent = this.hours[i] + `${this.cookiesPerHour[i]}`;
//             ulEl.appendChild(liEl);
//         }

//     }
// }



// var Tokyo = {
//     name: "Tokyo",
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     hours: [" 6am: ", " 7am: ", " 8am: ", " 9am: ", " 10am: ", " 11am: ", " 12pm: ", " 1pm: ", " 2pm: ", " 3pm: ", " 4pm: ", " 5pm: ", " 6pm: ", " 7pm: "," Total "],
//     cookiesPerHour:[],

//     costumerRandom: function () {
//         return Math.floor(Math.random() * (this.max - this.min) + 1) + this.min;


//     },
//     getPer: function () {
//         var total = 0;
//         for (var i = 0; i < (this.hours.length -1); i++) {
//             var product =  Math.ceil(this.costumerRandom() * this.avg);



//             total = total + product;
//             this.cookiesPerHour.push(product);


//         }
//                     this.cookiesPerHour.push(total);




//     },

//     render: function () {
//         var container = document.getElementById("sales");
//         var articleEl = document.createElement("article");
//         container.appendChild(articleEl);
//         var h2El = document.createElement("h2");
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;

//         var ulEl = document.createElement("ul");
//         articleEl.appendChild(ulEl);
//         for (let i = 0; i < this.hours.length; i++) {
//             var liEl = document.createElement("li");
//             liEl.textContent = this.hours[i] + `${this.cookiesPerHour[i]}`;
//             ulEl.appendChild(liEl);
//         }

//     }
// }


// console.table(Tokyo);
// Tokyo.costumerRandom();
// Tokyo.getPer();
// Tokyo.render();


// function Dubai(name, min, max, avg, hours, cookiesPerHour) {
//     this.name = name;
//     this.min = min;
//     this.max = max;
//     this.avg = avg;
//     this.hours = hours;
//     this.cookiesPerHour = cookiesPerHour;




// }
// Dubai.prototype.costumerRandom = function () {
//     return Math.floor(Math.random() * (this.max - this.min) + 1) + this.min;


// };

// Dubai.prototype.getper = function () {
//     var total = 0;
//     for (var i = 0; i < (this.hours.length - 1); i++) {
//         var product = Math.ceil(this.costumerRandom() * this.avg);



//         total = total + product;
//         this.cookiesPerHour.push(product);


//     }
//     this.cookiesPerHour.push(total);




// };


// Dubai.prototype.render = function () {
//     var container = document.getElementById("sales");
//     var articleEl = document.createElement("article");
//     container.appendChild(articleEl);
//     var h2El = document.createElement("h2");
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;

//     var ulEl = document.createElement("ul");
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < this.hours.length; i++) {
//         var liEl = document.createElement("li");
//         liEl.textContent = this.hours[i] + `${this.cookiesPerHour[i]}`;
//         ulEl.appendChild(liEl);
//     }


// };




// var Dubai = {
//     name: "Dubai",
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     hours: [" 6am: ", " 7am: ", " 8am: ", " 9am: ", " 10am: ", " 11am: ", " 12pm: ", " 1pm: ", " 2pm: ", " 3pm: ", " 4pm: ", " 5pm: ", " 6pm: ", " 7pm: "," Total "],
//     cookiesPerHour:[],

//     costumerRandom: function () {
//         return Math.floor(Math.random() * (this.max - this.min) + 1) + this.min;


//     },
//     getPer: function () {
//         var total = 0;
//         for (var i = 0; i < (this.hours.length -1); i++) {
//             var product =  Math.ceil(this.costumerRandom() * this.avg);



//             total = total + product;
//             this.cookiesPerHour.push(product);


//         }
//                     this.cookiesPerHour.push(total);




//     },

//     render: function () {
//         var container = document.getElementById("sales");
//         var articleEl = document.createElement("article");
//         container.appendChild(articleEl);
//         var h2El = document.createElement("h2");
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;

//         var ulEl = document.createElement("ul");
//         articleEl.appendChild(ulEl);
//         for (let i = 0; i < this.hours.length; i++) {
//             var liEl = document.createElement("li");
//             liEl.textContent = this.hours[i] + `${this.cookiesPerHour[i]}`;
//             ulEl.appendChild(liEl);
//         }

//     }
// }


// console.table(Dubai);
// Dubai.costumerRandom();
// Dubai.getPer();
// Dubai.render();



// function Paris(name, min, max, avg, hours, cookiesPerHour) {
//     this.name = name;
//     this.min = min;
//     this.max = max;
//     this.avg = avg;
//     this.hours = hours;
//     this.cookiesPerHour = cookiesPerHour;




// }
// Paris.prototype.costumerRandom = function () {
//     return Math.floor(Math.random() * (this.max - this.min) + 1) + this.min;


// };

// Paris.prototype.getper = function () {
//     var total = 0;
//     for (var i = 0; i < (this.hours.length - 1); i++) {
//         var product = Math.ceil(this.costumerRandom() * this.avg);



//         total = total + product;
//         this.cookiesPerHour.push(product);


//     }
//     this.cookiesPerHour.push(total);




// };


// Paris.prototype.render = function () {
//     var container = document.getElementById("sales");
//     var articleEl = document.createElement("article");
//     container.appendChild(articleEl);
//     var h2El = document.createElement("h2");
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;

//     var ulEl = document.createElement("ul");
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < this.hours.length; i++) {
//         var liEl = document.createElement("li");
//         liEl.textContent = this.hours[i] + `${this.cookiesPerHour[i]}`;
//         ulEl.appendChild(liEl);
//     }


// };







// var Paris = {
//     name: "Paris",
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     hours: [" 6am: ", " 7am: ", " 8am: ", " 9am: ", " 10am: ", " 11am: ", " 12pm: ", " 1pm: ", " 2pm: ", " 3pm: ", " 4pm: ", " 5pm: ", " 6pm: ", " 7pm: "," Total "],
//     cookiesPerHour:[],

//     costumerRandom: function () {
//         return Math.floor(Math.random() * (this.max - this.min) + 1) + this.min;


//     },
//     getPer: function () {
//         var total = 0;
//         for (var i = 0; i < (this.hours.length -1); i++) {
//             var product =  Math.ceil(this.costumerRandom() * this.avg);



//             total = total + product;
//             this.cookiesPerHour.push(product);


//         }
//                     this.cookiesPerHour.push(total);




//     },

//     render: function () {
//         var container = document.getElementById("sales");
//         var articleEl = document.createElement("article");
//         container.appendChild(articleEl);
//         var h2El = document.createElement("h2");
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;

//         var ulEl = document.createElement("ul");
//         articleEl.appendChild(ulEl);
//         for (let i = 0; i < this.hours.length; i++) {
//             var liEl = document.createElement("li");
//             liEl.textContent = this.hours[i] + `${this.cookiesPerHour[i]}`;
//             ulEl.appendChild(liEl);
//         }

//     }
// }


// console.table(Paris);
// Paris.costumerRandom();
// Paris.getPer();
// Paris.render();



// function Lima(name, min, max, avg, hours, cookiesPerHour) {
//     this.name = name;
//     this.min = min;
//     this.max = max;
//     this.avg = avg;
//     this.hours = hours;
//     this.cookiesPerHour = cookiesPerHour;




// }
// Lima.prototype.costumerRandom = function () {
//     return Math.floor(Math.random() * (this.max - this.min) + 1) + this.min;


// };

// Lima.prototype.getper = function () {
//     var total = 0;
//     for (var i = 0; i < (this.hours.length - 1); i++) {
//         var product = Math.ceil(this.costumerRandom() * this.avg);



//         total = total + product;
//         this.cookiesPerHour.push(product);


//     }
//     this.cookiesPerHour.push(total);




// };


// Lima.prototype.render = function () {
//     var container = document.getElementById("sales");
//     var articleEl = document.createElement("article");
//     container.appendChild(articleEl);
//     var h2El = document.createElement("h2");
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;

//     var ulEl = document.createElement("ul");
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < this.hours.length; i++) {
//         var liEl = document.createElement("li");
//         liEl.textContent = this.hours[i] + `${this.cookiesPerHour[i]}`;
//         ulEl.appendChild(liEl);
//     }


// };



// var Lima = {
//     name: "Lima",
//     min: 2,
//     max: 14,
//     avg: 4.6,
//     hours: [" 6am: ", " 7am: ", " 8am: ", " 9am: ", " 10am: ", " 11am: ", " 12pm: ", " 1pm: ", " 2pm: ", " 3pm: ", " 4pm: ", " 5pm: ", " 6pm: ", " 7pm: "," Total "],
//     cookiesPerHour:[],

//     costumerRandom: function () {
//         return Math.floor(Math.random() * (this.max - this.min) + 1) + this.min;


//     },
//     getPer: function () {
//         var total = 0;
//         for (var i = 0; i < (this.hours.length -1); i++) {
//             var product =  Math.ceil(this.costumerRandom() * this.avg);



//             total = total + product;
//             this.cookiesPerHour.push(product);


//         }
//                     this.cookiesPerHour.push(total);




//     },

//     render: function () {
//         var container = document.getElementById("sales");
//         var articleEl = document.createElement("article");
//         container.appendChild(articleEl);
//         var h2El = document.createElement("h2");
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;

//         var ulEl = document.createElement("ul");
//         articleEl.appendChild(ulEl);
//         for (let i = 0; i < this.hours.length; i++) {
//             var liEl = document.createElement("li");
//             liEl.textContent = this.hours[i] + `${this.cookiesPerHour[i]}`;
//             ulEl.appendChild(liEl);
//         }

//     }
// }


// console.table(Lima);
// Lima.costumerRandom();
// Lima.getPer();
// Lima.render();






