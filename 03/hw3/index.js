const allWords = ["функція","змінна","константа","цикл","масив","індекс","умова","документ","скрипт","інкремент","декремент","програма"],
    wordField = document.getElementById("word"),
    btnStart = document.getElementById("button-start");

let randomWord;
let answer;
let lettersLeft;
wordField.innerHTML = "Потрібно зібрати слово, вгадуючи букви.";

btnStart.onclick = function () {
    randomWord = allWords[Math.floor(Math.random() * allWords.length)];
    answer = [];
    for (let i=0; i<randomWord.length; i++) {
        answer.push("_");
    }
    lettersLeft = randomWord.length;

    return newClick(randomWord, lettersLeft, answer);
}

function newClick(randomWord, lettersLeft, answer) {

    while (lettersLeft>0){
        alert(`Слово: ${answer.join(" ")}`);
        let guess = prompt("Вгадайте букву або натисність 'Скасувати' для виходу з гри :)");
        if (guess===null) {
            return wordField.innerHTML = `Ви скасували введення, загадане слово: &nbsp;<strong>${randomWord}</strong>.`;;
        } else if (guess.length!==1) {
            alert("Введіть одну букву!");
        } else {
            for (let j=0; j<randomWord.length; j++) {
                if (randomWord[j]===guess) {
                    answer[j] = guess;
                    wordField.innerHTML = answer.join(" ");
                    lettersLeft--;
                }
            }
        }
    }
    wordField.innerHTML = `Чудово! Було загадано слово: &nbsp;<strong>${randomWord}</strong>.`;
}
