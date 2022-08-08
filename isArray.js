//To array check we have to use Array.isArray

const friends = [4, 6, 7, 3, 2];

console.log(Array.isArray(friends));

//........Check element in an Array..........................

console.log(friends.includes(19));

//.....or................
if (friends.indexOf(3) !== -1) {
    
}

//.....Array concatination...........
const newFriendsAge = [67, 23, 1];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);