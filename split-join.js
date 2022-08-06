const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni';

const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
//console.log(parts);
//console.log(sentences);
//console.log(chars);


/* 
String Sliceing 
*/

const partial = lyrics.slice(2, 8);
//console.log(partial);

const partial2 = lyrics.substring(2, 8);
//console.log(partial2);

/* 
String Joining
*/
const lines = [
    'Tumi bondhu kala pakhi ami jeno ki',
    ' bosonto kale tomai bolte pari ni'
];

const newSong = lines.join('. ')
console.log(newSong);