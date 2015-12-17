


var myHouse = {
	style: "colonial",
	bedrooms: 4
}

console.log(myHouse.style);


function MyCar(make, color) {
  
  this.make = make;
  this.color = color;
  this.isActive = true;
  
}

MyCar.prototype.carType = function() {
  console.log("My car is a " + this.color + this.make);
};

var myCar1 = new MyCar(' Acura', 'black');
myCar1.carType();


var myCar2 = new MyCar(' BMW', 'White');
myCar2.carType();