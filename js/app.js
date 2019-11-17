var Seattle = {
    name: "Seattle",
    min: 23,
    max: 65,
    avg: 6.3,
    hours: [" 6am: ", " 7am: ", " 8am: ", " 9am: ", " 10am: ", " 11am: ", " 12pm: ", " 1pm: ", " 2pm: ", " 3pm: ", " 4pm: ", " 5pm: ", " 6pm: ", " 7pm: "," Total "],
    cookiesPerHour:[],

    costumerRandom: function () {
        return Math.floor(Math.random() * (this.max - this.min) + 1) + this.min;
         

    },
    getPer: function () {
        var total = 0;
        for (var i = 0; i < (this.hours.length -1); i++) {
            var product =  Math.ceil(this.costumerRandom() * this.avg);


            
            total = total + product;
            this.cookiesPerHour.push(product);
            
            
        }
                    this.cookiesPerHour.push(total);


        
        
    },

    render: function () {
        var container = document.getElementById("sales");
        var articleEl = document.createElement("article");
        container.appendChild(articleEl);
        var h2El = document.createElement("h2");
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        
        var ulEl = document.createElement("ul");
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.hours.length; i++) {
            var liEl = document.createElement("li");
            liEl.textContent = this.hours[i] + `${this.cookiesPerHour[i]}`;
            ulEl.appendChild(liEl);
        }
        
    }
}


console.table(Seattle);
Seattle.costumerRandom();
Seattle.getPer();
Seattle.render();




var Tokyo = {
    name: "Tokyo",
    min: 3,
    max: 24,
    avg: 1.2,
    hours: [" 6am: ", " 7am: ", " 8am: ", " 9am: ", " 10am: ", " 11am: ", " 12pm: ", " 1pm: ", " 2pm: ", " 3pm: ", " 4pm: ", " 5pm: ", " 6pm: ", " 7pm: "," Total "],
    cookiesPerHour:[],

    costumerRandom: function () {
        return Math.floor(Math.random() * (this.max - this.min) + 1) + this.min;
         

    },
    getPer: function () {
        var total = 0;
        for (var i = 0; i < (this.hours.length -1); i++) {
            var product =  Math.ceil(this.costumerRandom() * this.avg);


            
            total = total + product;
            this.cookiesPerHour.push(product);
            
            
        }
                    this.cookiesPerHour.push(total);


        
        
    },

    render: function () {
        var container = document.getElementById("sales");
        var articleEl = document.createElement("article");
        container.appendChild(articleEl);
        var h2El = document.createElement("h2");
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        
        var ulEl = document.createElement("ul");
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.hours.length; i++) {
            var liEl = document.createElement("li");
            liEl.textContent = this.hours[i] + `${this.cookiesPerHour[i]}`;
            ulEl.appendChild(liEl);
        }
        
    }
}


console.table(Tokyo);
Tokyo.costumerRandom();
Tokyo.getPer();
Tokyo.render();

var Dubai = {
    name: "Dubai",
    min: 11,
    max: 38,
    avg: 3.7,
    hours: [" 6am: ", " 7am: ", " 8am: ", " 9am: ", " 10am: ", " 11am: ", " 12pm: ", " 1pm: ", " 2pm: ", " 3pm: ", " 4pm: ", " 5pm: ", " 6pm: ", " 7pm: "," Total "],
    cookiesPerHour:[],

    costumerRandom: function () {
        return Math.floor(Math.random() * (this.max - this.min) + 1) + this.min;
         

    },
    getPer: function () {
        var total = 0;
        for (var i = 0; i < (this.hours.length -1); i++) {
            var product =  Math.ceil(this.costumerRandom() * this.avg);


            
            total = total + product;
            this.cookiesPerHour.push(product);
            
            
        }
                    this.cookiesPerHour.push(total);


        
        
    },

    render: function () {
        var container = document.getElementById("sales");
        var articleEl = document.createElement("article");
        container.appendChild(articleEl);
        var h2El = document.createElement("h2");
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        
        var ulEl = document.createElement("ul");
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.hours.length; i++) {
            var liEl = document.createElement("li");
            liEl.textContent = this.hours[i] + `${this.cookiesPerHour[i]}`;
            ulEl.appendChild(liEl);
        }
        
    }
}


console.table(Dubai);
Dubai.costumerRandom();
Dubai.getPer();
Dubai.render();

var Paris = {
    name: "Paris",
    min: 20,
    max: 38,
    avg: 2.3,
    hours: [" 6am: ", " 7am: ", " 8am: ", " 9am: ", " 10am: ", " 11am: ", " 12pm: ", " 1pm: ", " 2pm: ", " 3pm: ", " 4pm: ", " 5pm: ", " 6pm: ", " 7pm: "," Total "],
    cookiesPerHour:[],

    costumerRandom: function () {
        return Math.floor(Math.random() * (this.max - this.min) + 1) + this.min;
         

    },
    getPer: function () {
        var total = 0;
        for (var i = 0; i < (this.hours.length -1); i++) {
            var product =  Math.ceil(this.costumerRandom() * this.avg);


            
            total = total + product;
            this.cookiesPerHour.push(product);
            
            
        }
                    this.cookiesPerHour.push(total);


        
        
    },

    render: function () {
        var container = document.getElementById("sales");
        var articleEl = document.createElement("article");
        container.appendChild(articleEl);
        var h2El = document.createElement("h2");
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        
        var ulEl = document.createElement("ul");
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.hours.length; i++) {
            var liEl = document.createElement("li");
            liEl.textContent = this.hours[i] + `${this.cookiesPerHour[i]}`;
            ulEl.appendChild(liEl);
        }
        
    }
}


console.table(Paris);
Paris.costumerRandom();
Paris.getPer();
Paris.render();

var Lima = {
    name: "Lima",
    min: 20,
    max: 38,
    avg: 2.3,
    hours: [" 6am: ", " 7am: ", " 8am: ", " 9am: ", " 10am: ", " 11am: ", " 12pm: ", " 1pm: ", " 2pm: ", " 3pm: ", " 4pm: ", " 5pm: ", " 6pm: ", " 7pm: "," Total "],
    cookiesPerHour:[],

    costumerRandom: function () {
        return Math.floor(Math.random() * (this.max - this.min) + 1) + this.min;
         

    },
    getPer: function () {
        var total = 0;
        for (var i = 0; i < (this.hours.length -1); i++) {
            var product =  Math.ceil(this.costumerRandom() * this.avg);


            
            total = total + product;
            this.cookiesPerHour.push(product);
            
            
        }
                    this.cookiesPerHour.push(total);


        
        
    },

    render: function () {
        var container = document.getElementById("sales");
        var articleEl = document.createElement("article");
        container.appendChild(articleEl);
        var h2El = document.createElement("h2");
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        
        var ulEl = document.createElement("ul");
        articleEl.appendChild(ulEl);
        for (let i = 0; i < this.hours.length; i++) {
            var liEl = document.createElement("li");
            liEl.textContent = this.hours[i] + `${this.cookiesPerHour[i]}`;
            ulEl.appendChild(liEl);
        }
        
    }
}


console.table(Lima);
Lima.costumerRandom();
Lima.getPer();
Lima.render();






