const color = 'red';
if(color == 'green'){
    console.log('You are green');
}
else if (color == 'blue') {
    console.log('You are blue');
}
else if (color == 'red') {
    console.log('You are red');
}
else {
    console.log('You are black');
}

//Switch


switch (color) {
    case 'green':
        console.log('You are green');
        break;
    case 'red':
        console.log('You are red');
        break;
    case 'yellow':
        console.log('You are yellow');
        break;
    default:
        console.log('You are black');
}