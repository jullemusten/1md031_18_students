var socket = io();

var lm = new Vue({
  el: '#website',
  data: {
    title: "Pick a burger ",
    menu: food,
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
      socket.emit("addOrder", { 
        orderId: this.getNext(),
        coord: this.coord,
        orders: this.orders,
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
     },

  }

})

