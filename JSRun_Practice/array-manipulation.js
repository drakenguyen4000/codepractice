//Ways to maniuplate arrays

const arr = [0,1,2];

arr.push(4, 5);

console.log('push:', arr);

arr.pop();

console.log('pop:', arr);

arr.shift();

console.log('shift:',arr);

arr.unshift(10, 20);

console.log('unshift:', arr);

//insert 'hi' at 2
arr.splice(2,0,'hi');

console.log('insert:', arr);

//replace 1 item at 2 with 'why'
arr.splice(2,1,'why');

console.log('replace1:', arr);

//replace 2 items at 2 with 3 items
arr.splice(2,2,'cat', 'dog', 'bird');

console.log('replace2:', arr);

//copy from 0 up to 1
let copy1 = arr.slice(0, 1);

console.log('copy1:', copy1);

//copy from 0 up to 2
let copy2 = arr.slice(0, 2);

console.log('copy2:', copy2);

