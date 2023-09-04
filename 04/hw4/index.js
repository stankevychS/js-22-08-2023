const btn = document.getElementById("plus_btn"),
    cardsContainer = document.getElementById("cards-container"),
    cardCount = document.getElementById("counter");
let counter = 1;

function getCardInfo() {
    return [prompt("Ім'я: ", "Ім'я"), 
            prompt("Прізвище: ", "Прізвище"), 
            parseInt(prompt("Вік: ","18")), 
            prompt("Номер телефону: ","+380000000000"), 
            prompt("Email: ","email@gmail.com"), 
            prompt("Шлях до зображення (посилання): ","https://cdn-icons-png.flaticon.com/512/1088/1088638.png")];
}
btn.onclick = function () {
    const cardData = getCardInfo();
    //console.log(cardData);
    for (let i=0; i<cardData.length; i++) {
        if (cardData[i]===null){
            return console.log("Ви скасували введення!");
        }else if (isNaN(cardData[2])==true){
            return console.log("Ви не ввели число у полі 'Вік'!");
        }
    }
    counter++;
    console.log(`click! створення ${counter} картки!`);
    cardsContainer.innerHTML += `
    <div class="card-item">
        <div>
            <img src="${cardData[5]}" alt="card-img">
        </div>
        <div class="card-text">
            <div class="count">
                Картка № <span id="counter">${counter}</span>
            </div>
            <div class="text-info">
                <div><span>Ім'я:</span> ${cardData[0]}</div>
                <div><span>Прізвище:</span> ${cardData[1]}</div>
                <div><span>Вік:</span> ${cardData[2]}</div>
                <div><span>Телефон:</span> <a href="tel:${cardData[3]}">${cardData[3]}</a></div>
                <div><span>Пошта:</span> <a href="mailto:${cardData[4]}" target="_blank">${cardData[4]}</a></div>
            </div>
        </div>
    </div>
    `;
}
