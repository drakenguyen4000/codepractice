//Ways to build an object

//object literal
const obj1 = {
	  color: 'green',
	  shape: 'round'
}

console.log("obj literal:", obj1);

//object instantiate
const obj2 = new Object ();
obj2.color = 'blue';
obj2.shape = 'square';

console.log("obj instantiate:", obj2);

const obj3 = Object.create(obj2);

obj3.color = 'red';
obj3.shape = 'triangle';
obj3.border = 'black';

console.log("obj create:", obj3);

//Class object
class Obj {
	  constructor(color, shape, height, width){
	  this.color = color;
	  this.shape = shape;
   this.height = height;
   this.width = width
  }
  calArea(){
  	  return this.height * this.width;
  }
}

const obj4 = new Obj('pink', 'rectangle', 4, 2);

console.log("class:", obj4);

console.log("class method:", obj4.calArea());

