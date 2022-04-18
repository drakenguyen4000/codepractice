//Object - Basic Object codes
const hero1 = {
	  name: 'Captain America',
	  gender: 'male',
	  power: 'enhanced strength',
	  level: 'street'
}

//Display hero1 object
console.log('object:', hero1);

//Display name property
console.log('property name:', hero1.name);

//Modify value of level
hero1.level = 'peak human';

console.log('modify:', hero1);

//Add a new property
hero1.origin = 'United States';

console.log('Add Property:', hero1)

//Delete level property
delete hero1.level;
console.log('Delete property:', hero1);




