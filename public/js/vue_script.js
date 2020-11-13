var lm = new Vue({
	el: '#menu' ,
  data: {
  title: "Pick a burger " ,  
  menu: [new menuItem("Chicken burger", "170 kCal", "Gluten"), new menuItem("Cheese beanburger", "130 kCal", "Lactose"), new menuItem("Truffle burger", "200 kCal", "Gluten")],

  }
})