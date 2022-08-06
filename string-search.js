const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni ';

const searchString = 'PaKhi';
//const doesExist = lyrics.includes('pakhi');
//const doesExist = lyrics.includes(searchString);

const lyricsLowerCase = lyrics.toLowerCase();
//const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

console.log(doesExist);
console.log(doesExistOneLine);

// indexOf

console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('Tumi'));

//

if (lyrics.indexOf('sada') != -1) {
    console.log('exists inside the string');
}
else {
    console.log('cannot find it');
}

//stratswith

console.log(lyrics.startsWith('2umi'));

// endswith

const fileNmae = 'mybiodata.pdf';
const otherFile = 'mypic.png';

console.log(fileNmae.endsWith('.pdf'));