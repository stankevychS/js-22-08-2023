/*
//2
Реалізуйте клас MyString, який матиме такі методи: метод reverse(),
який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(),
який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.
*/
class MyString {
    reverse (str) {
        return str.split("").reverse().join("");
    }
    ucFirst (str) {
        return str.charAt(0).toUpperCase()+str.substring(1);
    }
    ucWords (str) {
        let newStr = [];
        str.split(" ").forEach(function (word) {
            newStr.push(word.charAt(0).toUpperCase()+word.substring(1));
        });
        return newStr.join(" ");
    }
}
const newSTR = new MyString ();
console.log(newSTR.reverse("нова строка abc"));
console.log(newSTR.ucFirst("нова строка abc"));
console.log(newSTR.ucWords("нова строка abc"));