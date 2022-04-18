//Using Class
class Dinosaur {
	  constructor(length, height, weight){
	  this.length = length;
   this.height = height;
   this.weight = weight;
  }
  calMass(){
  	  return this.length * this.height * this.weight;
  }
}

const protoDino = new Dinosaur(10, 6, 5);

console.log("class:", protoDino);

class carnivore extends Dinosaur {
	  constructor(length, height, weight, diet, color, sound, name){
	     super(length, height, weight)
	  	  this.diet = diet;
	  	  this.color = color;
	  	  this.sound = sound;
	     this.name = name;
	 }
	 roar(){
	 	   return `The ${this.name} ${this.sound}!`;
	 }
}

const allosaurus = new carnivore (19, 6, 5, 'meat', 'red', 'RRRAAW', 'Allosaurus')
console.log("subclass:", allosaurus); 
console.log("What roared?:", allosaurus.roar());


