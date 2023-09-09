console.log(1);
const film1 = {
    name: "film name 1",
    age: "16+",
    year: 2023,
    img: "https://upload.wikimedia.org/wikipedia/ru/b/bf/%D0%9E%D0%BF%D0%BF%D0%B5%D0%BD%D0%B3%D0%B5%D0%B9%D0%BC%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg",
    toString : function () {
        "Це виведеться строкою" //якщо в документ doc.write
    }
}
const film2 = {
    name: "film name 2",
    age: "18+",
    year: 2022,
    img: "https://static.hdrezka.ac/i/2023/7/5/fc2abcacda6edfc90x19y.png"
}
 const allFilms = [film1, film2];

 allFilms.forEach(function (element, index, full) {
        console.log(element.name); //назви
        console.log(index); //0 1
        console.log(full); //весь масив

        document.body.innerHTML += showFilms(element);

    }); //вивести кожен елемент масиву 

function showFilms (film) {
    const pattern = `
        <h1>${film.name}</h1>
        <div><img src="${film.img}"></div>
        <p>year - ${film.year}</p>
    `
    return pattern
}

