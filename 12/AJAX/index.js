//https://api.privatbank.ua/p24api/exchange_rates?date=01.12.2014

//якщо readystate = 4, то дані успішно отримані
const ajax = new XMLHttpRequest(); //readystate=0
const table = document.querySelector("table");
const btn = document.querySelector("button");
const json_url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";


btn.addEventListener("click", () => {
    send(json_url, show);
})

function send(url, callback) {
    //.open(метод, місце даних) - налаштування відправки запитів
    ajax.open("GET", url); //будує запит, readystate=1
    //.send() - відправка запиту
    ajax.send(); //readystate=2
    ajax.addEventListener("readystatechange", () => { //зміна readystate
        console.log(ajax);
        if(ajax.readyState===4 && ajax.status===200){
            console.log(ajax.response); //строка json
            console.log(JSON.parse(ajax.response)); //строка стає js-кодом (масив, об'єкт тощо)
            callback(JSON.parse(ajax.response), table);
        }else if (ajax.readyState === 4 && ajax.status !== 200){
            console.error("Помилка");
        }
    })
}

function show (data, viewEl) {
    data.map ((cur, index) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        
        td1.innerText = (index+1);
        td2.innerText = cur.txt;
        td3.innerText = cur.rate.toFixed(2);
        
        tr.append(td1, td2, td3);

        viewEl.append(tr);
    })
}

