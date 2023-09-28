//все міститься в глобальному об'єкті window (все оточення)
//window.document - але window не пишеться
//dom дерево

//МЕТОДИ ДОМ-ДЕРЕВА

//document.getElementById()
window.onload = () => {
    let par = document.getElementById("par");
    par.innerText = "wow (було get)";

}

//.innerText = ; - однакові, робота суто з текстом
//.textContent = ; - однакові
//.innerHTML = ; - сюди передаєм теги, html код, не дуже безпечно

//document.getElementsByClassName, можна вибрати перший отак [0]
//document.getElementByTagName("p")

//ДЛЯ ПЕРЕДБАЧУВАНИХ СТИЛІВ
//.classList.add("назва класу")
//.classList.remove()
//.classList.toggle("нава класу") - перемикач між минулим класом і новим

//для непередбачуваних стилів, напр інфа з сервера або рандом
//element.style.color=""; НЕ ВИКОРИСТОВУЄТЬСЯ
//.border, .color, .display і тд

//QUERY SELECTOR - css селектори
//.querySelector("#oneOFid\.oneOfClass\div\p\.divClass")
//.querySelector("div > div") -дів всередині діва
//.querySelectorAll("".allOFclass")

//console.time("one")
//console.timeEnd("one")
