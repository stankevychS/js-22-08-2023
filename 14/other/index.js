window.addEventListener("DOMContentLoaded", () => {
    
    const req = async function (url) { //асинхронні функції
        const data = await fetch(url); //await - чекати відповідь 
        if(data.status===200){
            return data.json();
        }else{
            throw new Error("Fetch error");
        }
    }
    req("https://api.sampleapis.com/cartoons/cartoons2D")
    .then((data) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.innerText = "Показати"
        btn.addEventListener("click", () => {
            data.forEach(element => {
                showCartoons(element);
            });
            
        })
        document.body.prepend(btn);
        
    })

    showCartoons = ({creator, episodes, genre, id, image, rating, runtime_in_minutes, title, year}) => {
        document.body.innerHTML += `
        <div id="card"> <h3>${id}</h3> <br>
        Картинка: <img src="${image}" alt="картинка мультфільму"> <br>
        <b>Назва</b>: <div>${title}</div> <br>
        Творець: <div>${creator}</div> <br>
        К-сть епізодів: <div>${episodes}</div> <br>
        Жанр(и): <div>${genre}</div> <br>
        Рейтинг: <div>${rating}</div> <br>
        Час: <div>${runtime_in_minutes}</div> хв<br>
        Рік випуску: <div>${year}</div> <br>
        </div>
        `

    }


/*
creator
episodes
genre
id:1
image
"https://nick.mtvnimages.com/uri/mgid:arc:content:nick.com:9cd2df6e-63c7-43da-8bde-8d77af9169c7?quality=0.7"
rating
runtime_in_minutes
title
year
*/
    



})