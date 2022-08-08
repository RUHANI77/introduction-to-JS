const friends = [1,2,34,5,12, 45, 77, 22, 44, 98];

// Remove elements from an array
// and, if necessary, insert new elements in their place
// returning the deleted elements
// will change the original array

const partial = friends.splice(2, 5,99,555,7777); // remove from index 2 to 5-1 and will add 99, 555, 7777........
console.log(partial);
console.log(friends);