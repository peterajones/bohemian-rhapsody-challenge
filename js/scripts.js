// google search the lyrics
// https://www.google.com/search?q=bohemian+rhapsody+lyrics&oq=boh&aqs=chrome.0.69i59j69i57j46j0j46j0.2260j0j7&sourceid=chrome&ie=UTF-8

// copy/paste from the link above and convert to a javascript array of strings using the following link
// https://codepen.io/franciskim/pen/eNjrpR?editors=1111
const lyrics = [
  'Is this the real life?',
  'Is this just fantasy?',
  'Caught in a landslide',
  'No escape from reality',
  'Open your eyes',
  'Look up to the skies and see',
  "I'm just a poor boy, I need no sympathy",
  "Because I'm easy come, easy go",
  'A little high, little low',
  "Anyway the wind blows, doesn't really matter to me, to me",
  'Mama, just killed a man',
  'Put a gun against his head',
  "Pulled my trigger, now he's dead",
  'Mama, life had just begun',
  "But now I've gone and thrown it all away",
  'Mama, oh oh',
  "Didn't mean to make you cry",
  "If I'm not back again this time tomorrow",
  'Carry on, carry on, as if nothing really matters',
  'Too late, my time has come',
  'Sends shivers down my spine',
  "Body's aching all the time",
  "Goodbye everybody I've got to go",
  'Gotta leave you all behind and face the truth',
  'Mama, oh oh(anyway the wind blows)',
  "I don't want to die",
  "Sometimes wish I'd never been born at all",
  'I see a little silhouetto of a man',
  'Scaramouch, Scaramouch will you do the Fandango',
  'Thunderbolt and lightning very very frightening me',
  'Gallileo, Gallileo, Gallileo, Gallileo, Gallileo, figaro, magnifico',
  "I'm just a poor boy and nobody loves me",
  "He's just a poor boy from a poor family",
  'Spare him his life from this monstrosity',
  'Easy come easy go will you let me go',
  'Bismillah, no we will not let you go, let him go',
  'Bismillah, we will not let you go, let him go',
  'Bismillah, we will not let you go, let me go',
  '(Will not let you go) let me go (never, never let you go) let me go (never let me go)',
  'Oh oh no, no, no, no, no, no, no',
  'Oh mama mia, mama mia, mama mia let me go',
  'Beelzebub has a devil put aside for me for me for me',
  'So you think you can stop me and spit in my eye',
  'So you think you can love me and leave me to die',
  "Oh baby can't do this to me baby",
  'Just gotta get out just gotta get right outta here',
  'Oh oh oh yeah, oh oh yeah',
  'Nothing really matters',
  'Anyone can see',
  'Nothing really matters',
  'Nothing really matters to me',
  'Anyway the wind blows'
];

console.log('Each line of the lyrics has been added to a string in an Array...');
console.log(lyrics);
console.log('Now the array of strings is converted to a single string...');

// convert the array to a single string
const singleWords = lyrics.toString();
console.log(singleWords);

// remove punctuation and special characters from the string
const cleanText = singleWords.replace(/[^a-zA-Z' ]/g, ' ');
const str = cleanText.toString();
console.log(`Removing punctuation and converting to an array of single words as strings...`);

// convert the string to an array of words
const words = str.split(/\s+/);
console.log(`Total word count: ${words.length}`);
// document.getElementById('totalWords').innerHTML = `${words.length}`;
console.log(words);

// remove duplicates: https://wsvincent.com/javascript-remove-duplicates-array/
let unique = [...new Set(words)];
console.log(`Now to remove the repeated words leaving ${unique.length} unique words`);
console.log(unique);

// get all the words with six or more characters
const sixOrMore = [];
for (var i = 0; i < unique.length; i++) {
  if (unique[i].length >= 6) {
    sixOrMore.push(unique[i]);
  }
}
console.log("All that's left to do is find all the unique words with six or more letters...");
console.log(`...and there are ${sixOrMore.length} unique words with six or more letters`);
console.log(sixOrMore);

// https://stackoverflow.com/questions/11128700/create-a-ul-and-fill-it-based-on-a-passed-array
var newList = sixOrMore;
makeList = (array) => {
  let list = document.createElement('p');

  for (var i = 0; i < array.length; i++) {
    var item = document.createElement('span');
    item.appendChild(document.createTextNode(array[i].toLowerCase() + ', '));
    list.appendChild(item);
  }
  return list;
};
document.getElementById('result1').appendChild(makeList(newList));
const target = document.getElementById('result1').children[0].lastChild.innerHTML;
const lastWord = target.replace(/[^a-zA-Z]/g, '');
document.getElementById('result1').children[0].lastChild.innerHTML = lastWord;

sort = () => {
  newList.sort();
  document.getElementById('result2').appendChild(makeList(newList));
  const target = document.getElementById('result2').children[0].lastChild.innerHTML;
  const lastWord = target.replace(/[^a-zA-Z]/g, '');
  document.getElementById('result2').children[0].lastChild.innerHTML = lastWord;
};
sort();

capitalize = () => {
  newList.sort();
  document.getElementById('result3').appendChild(makeList(newList));
  const target = document.getElementById('result3').children[0].lastChild.innerHTML;
  const lastWord = target.replace(/[^a-zA-Z]/g, '');
  document.getElementById('result3').children[0].lastChild.innerHTML = lastWord;
};
capitalize();
