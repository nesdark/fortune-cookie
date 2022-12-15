/* 
  [x] Create 1 object with 3 arrays with 5 phrases

  [x] Create a random number

  [x] When the user clicks in the image
  [x] Capture the value in the select
  [x] Change the screen 
    [x] Use the random number and the value of
    [x] select to select the phrase
    [x] Display the phrase 
*/

const phrases = {
  programming: [
    'Billions are made up of cents',
    'Our failures are sometimes more fruitful than successes',
    'By writing you can create anything',
    'Knowing is not enough, you need to apply. Arrangement is not enough, you need to do it',
    "If it doesn't work at first, call it version 1.0",
  ],
  future: [
    'If you realize that the plan does not work, it is time to make a change to the plan, not the goal',
    'You have always improved with mistakes, clarity is just proof of that',
    'If climbing the hill is your goal, start walking, instead of imagining what the view will look like up there',
    'It is impossible to win from the person who does not give up',
    'You want to spend the rest of your life selling sugar water or an opportunity to help the world?',
  ],
  motivational: [
    'Eliminate merchant ships. Invade, plunder, take what is ours.',
    'All dreams can become real when you have courage',
    'Your life is yours alone, only you are capable',
    'The trail is long, the mountain is high, the sea is deep. But in a moment it will',
    "The house falls, so it's time to start over",
  ],
};

function generateRandomPhrase(maximumNumber) {
  return Math.round(Math.random() * maximumNumber - 1);
}

const fortuneCookie = document.querySelector('#fortuneCookieTrigger');

fortuneCookie.addEventListener('click', showTheNextScreen);

// Showing the phrase
function showTheNextScreen() {
  const main = document.querySelector('main');
  main.classList.remove('closed-cookie');

  setPhrase();
}

// Making the phrase

const setPhrase = function () {
  const selectedCategoryPhrase = document.querySelector('#typeOfPhrase').value;

  const randomPhrase = generateRandomPhrase(
    phrases[selectedCategoryPhrase].length
  );

  const finalPhrase = phrases[selectedCategoryPhrase][randomPhrase];
  showIntoScreen(finalPhrase);
};

// Show Into the Screen
const showIntoScreen = (phrase) => {
  const displayPhraseElement = document.querySelector('#luck');

  displayPhraseElement.innerHTML = phrase;
};

const openAnotherCookieButton = document.querySelector('#openAnotherCookie');

// Open Another Cookie
const openAnotherCookie = function () {
  const main = document.querySelector('main');
  main.classList.add('closed-cookie');
};

openAnotherCookieButton.addEventListener('click', openAnotherCookie);
