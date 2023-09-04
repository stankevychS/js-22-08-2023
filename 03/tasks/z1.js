const btn = document.getElementById("btn"),
tbody = document.getElementById("tbody"),
count = document.getElementById("count"); //всі const
let userData;

let counter = 0;
count.innerHTML=counter;
btn.onclick = function (){
    userData = prompt("Введіть дані у форматі Ім'я.Прізвище.Мова програмування", "Ім'я.Прізвище.Мова програмування");
    if(userData==null) return;
    userData = userData.split(" ");
    if(userData.length!==3) return;
    const tr = `
        <tr>
            <td>${userData[0]}</td>
            <td>${userData[1]}</td>
            <td>${userData[2]}</td>
        </tr>
    `;
    tbody.innerHTML += tr;
    counter++;
    count.innerHTML = counter;
}