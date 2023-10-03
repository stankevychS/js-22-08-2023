window.onload = () => {
    const div = document.createElement("div");
    div.classList.add("mainDiv");
    document.body.append(div);

    const input = document.createElement("input");
    input.type = "tel";
    input.placeholder = "000-000-00-00";
    div.append(input);

    const button = document.createElement("button");
    button.innerText = "Зберегти";
    div.append(button);

    const errorMessage = document.createElement("p");
        errorMessage.innerText = "Помилка!";

    button.onclick = () => {
        pattern = /^\d{3}-\d{3}-\d{2}-\d{2}$/;
        console.log(pattern.exec(input.value));
        if (pattern.exec(input.value)!=null) {
            div.classList.add("green");
            div.classList.remove("red");
            if (div.firstElementChild===errorMessage){
                div.firstElementChild.remove();
            }
            document.location.href = "https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg";
        }else{
            div.classList.add("red");
            div.classList.remove("green");
            div.prepend(errorMessage);

        }
    }
}