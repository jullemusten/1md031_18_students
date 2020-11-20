var socket = io();
/*import * as io from 'socket.io-client';
window.io=io;*/

var lm = new Vue({
  el: '#website',
  data: {
    title: "Pick a burger ",
    menu: food,
    /*information: orderInformation,
    markDone,
    /*info: orderInformation,*/
    /*markDone,*/
    /*infoAboutOrder: [],*/
    personalInfoArray: [],
    burgerOrderArray: [],
    orders: {},
    pers: {},
    show: false,
    coord: {x: 0, 
      y: 0},
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));
    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },

  methods: {
    orderButton: function() {
      /*this.infoAboutOrder=buttonClicked(),*/
      this.personalInfoArray=personalInfo(),
      this.burgerOrderArray=orderTable(),
      this.addOrder(),
      this.show=true
    },

    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },

    addOrder: function (event) {
      /*var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};*/
      socket.emit("addOrder", { 
        orderId: this.getNext(),
        coord: this.coord,
        orders: this.orders,
        orderItems: this.infoAboutOrder, /*Vill ha burger order*/
        personalItems: this.personalInfoArray,
        orderItems: this.burgerOrderArray,                                
        });
    },

    displayOrder: function(event) {
        var locationMap = {
          x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top};

        this.coord = {
          x: event.clientX - 10 - locationMap.x,
          y: event.clientY - 10 - locationMap.y
        }
        /*this.coord.x = event.clientX - 10 - locationMap.x;
        this.coord.y = event.clientY - 10 - locationMap.y;*/
     },

    /*addOrder: function (event) {
      socket.emit("addOrder", {
        orderId: this.getNext(),
        details: {
          x: event.clientX - 10 - event.currentTarget.getBoundingClientRect().left,
          y: event.clientY - 10 - event.currentTarget.getBoundingClientRect().top,
        },
        orderItems: ["Beans", "Curry"]
      });
    },*/
  }
  /*methods: {
    markDone: function(event) {
      new orderInformation;
    }
  }
  /*methods: {
    markDone: function() {
      Flytta hit markDone från JAvaScript, ta bort markdone komandot
      gör en v-model, gör v-model på alla radiobuttoms, lägg till en variabel i datadleen

      kopplar det till en variabel i data delen
    radios = document.getElementsByName('gender');
    for (i=0; i<radios.length; i++)
    if (radios[i].checked) {
      gender=radios[i].id;
    }
    array=[console.log(document.getElementById('fullname').value), console.log(document.getElementById('email').value), console.log(document.getElementById('street').value), console.log(document.getElementById('house').value), console.log(document.getElementById('recipient').value), console.log(gender)];
    }  
  }*/

})

