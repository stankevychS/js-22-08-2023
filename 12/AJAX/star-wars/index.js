
function req (url) {
    const newReq = new XMLHttpRequest();
    newReq.open("GET", url);

    newReq.addEventListener("readystatechange", () => {
        if (newReq.readyState===4 && newReq>=200 && newReq<300){
            callback(JSON.parse(newReq.response));
        }else if (newReq.readyState===4) {
            throw new Error ("Помилка у запиті!");
        }
    })
}

