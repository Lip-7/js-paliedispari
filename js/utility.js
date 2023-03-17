function switchVisibility(value1,value2){
    const content1 = document.getElementById(value1);
    const content2 = document.getElementById(value2);
    content1.classList.add('d-none');
    content2.classList.remove('d-none');
    setTimeout(() => {
        content2.style.opacity = 1;
      }, 10);
};
function giveVisibility(value){
  const content = document.getElementById(value);
  content.classList.remove('d-none');
  setTimeout(() => {
    content.style.opacity = 1;
  }, 10);
}
function preventSubmitRefresh(form){
  form.addEventListener('submit', (e) => {
      e.preventDefault();
} )
};
function randomNumber(max) {
  return Math.round(Math.random() * (max - 1)) + 1;
};
function generateLi(listIngredients, listToAppend, tohide, toshow) {
let iterable = 0;
const ulDestination = document.getElementById(listToAppend);
while (iterable < listIngredients.length){
    const ingredient = document.createElement('li');
    ingredient.innerText = listIngredients[iterable];
    ulDestination.appendChild(ingredient);
    iterable++;
}
switchVisibility(tohide, toshow)
};
function separe(buttons){
  setTimeout(() => {
    for (let i = 0; i < buttons.length; i++){
        buttons[i].style.translate = 0;
        buttons[i].style.opacity = 1;
      }
  }, 50)
};
function reverseWord(word) {
  let reversedWord = '';
  iterable = word.length - 1;
  for (iterable; iterable >= 0; iterable--){
      reversedWord += word[iterable];
  }
  return reversedWord;
}
function palindromCheck(word) {
  let reversedWord = reverseWord(word);
  if (reversedWord == word) {
    return true
  }
  return false
}
function oddEvenGame(userNumber, userOption){
  let pcNumber = randomNumber(5);
  let finalNumber = parseInt(userNumber) + pcNumber;
  if ((userOption == 'odd' && finalNumber % 2) || (userOption == 'even' && !(finalNumber % 2))) {
      return [pcNumber, finalNumber, true]
  }
  return [pcNumber, finalNumber, false]
}