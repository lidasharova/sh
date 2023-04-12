function getRandomArray() {
  let randomSet = new Set();

  while (randomSet.size < 8) {
    let randomNumber = getRandomNumber();
    randomSet.add(randomNumber);
  }

  let randomArray = Array.from(randomSet);
  randomArray.push(randomArray[0]);

  return randomArray;
}

//ф-ция получения рандомного числа 0-9 (8карточек)
function getRandomNumber() {
  return Math.floor(Math.random() * 8);
}

export default getRandomArray;
