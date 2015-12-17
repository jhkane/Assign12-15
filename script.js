


var myHouse = {
	style: "colonial",
	bedrooms: 4
}

console.log("My house is a " + myHouse.style + " and has " + myHouse.bedrooms + " bedrooms.");


function MyCar(make, color) {
  
  this.make = make;
  this.color = color;
  
  
}

MyCar.prototype.carType = function() {
  console.log("My car is a " + this.color + this.make);
};

var myCar1 = new MyCar(' Acura', 'black');
myCar1.carType();


var myCar2 = new MyCar(' Toyota', 'White');
myCar2.carType();